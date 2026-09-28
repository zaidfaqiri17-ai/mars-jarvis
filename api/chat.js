
export default async function handler(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://zaidfaqiri17-ai.github.io"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const body = req.body || {};

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    const conversation = Array.isArray(body.conversation)
      ? body.conversation
      : [];

    if (!message) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured"
      });
    }

    /*
     * ============================================================
     * BILDERKENNUNG
     * ============================================================
     *
     * Wenn der Benutzer ausdrücklich ein Bild möchte,
     * verwenden wir das Gemini-Bildmodell.
     *
     * Normale Fragen laufen weiterhin über das normale
     * Gemini-Textmodell.
     */

    const wantsImage = /(?:erstelle|erstell|generiere|generier|mach|zeichne|create|generate|draw|make)\b[\s\S]{0,120}\b(?:bild|bilder|foto|fotorealistisch|image|picture|photo|illustration|grafik)\b/i.test(
      message
    ) ||
    /(?:bild|image|picture|foto|photo)\b[\s\S]{0,80}\b(?:von|für|mit|of|with)\b/i.test(
      message
    );

    /*
     * ============================================================
     * BILDGENERIERUNG
     * ============================================================
     */

    if (wantsImage) {
      const imagePrompt = `
Erstelle genau das Bild, das der Benutzer beschreibt.

Benutzerwunsch:
${message}

Stil:
Hochwertig, detailliert und visuell ansprechend.
Halte dich möglichst genau an die Beschreibung.
Wenn kein Stil angegeben wurde, wähle einen passenden,
modernen und professionellen Stil.

Wichtig:
Generiere tatsächlich ein Bild und keine reine Textantwort.
      `.trim();

      const imageResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1/models/gemini-3.1-flash-image:generateContent",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY
          },

          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: imagePrompt
                  }
                ]
              }
            ],

            generationConfig: {
              responseModalities: [
                "TEXT",
                "IMAGE"
              ],

              responseFormat: {
                image: {
                  aspectRatio: "1:1",
                  imageSize: "1K"
                }
              }
            }
          })
        }
      );

      const imageData = await imageResponse.json();

      if (!imageResponse.ok) {
        console.error(
          "Gemini image error:",
          imageData
        );

        return res.status(imageResponse.status).json({
          error:
            imageData?.error?.message ||
            "Image generation failed"
        });
      }

      const parts =
        imageData?.candidates?.[0]?.content?.parts || [];

      let generatedImage = null;
      let generatedText = "";

      for (const part of parts) {
        if (part?.text) {
          generatedText += part.text;
        }

        if (part?.inlineData?.data) {
          generatedImage = {
            mimeType:
              part.inlineData.mimeType ||
              "image/png",

            data:
              part.inlineData.data
          };
        }
      }

      if (!generatedImage) {
        return res.status(500).json({
          error:
            "Gemini hat kein Bild zurückgegeben."
        });
      }

      return res.status(200).json({
        type: "image",

        reply:
          generatedText.trim() ||
          "Bild wurde erstellt, Sir.",

        image: generatedImage
      });
    }

    /*
     * ============================================================
     * NORMALER JARVIS-CHAT
     * ============================================================
     */

    /*
     * Code 1 kann die aktuelle Nachricht bereits
     * innerhalb von conversation mitsenden.
     *
     * Deshalb entfernen wir einen identischen User-Eintrag,
     * bevor wir die aktuelle Nachricht unten selbst hinzufügen.
     */

    const history = conversation
      .slice(-20)
      .filter(item => {
        if (!item || typeof item.content !== "string") {
          return false;
        }

        const content = item.content.trim();

        if (!content) {
          return false;
        }

        if (
          item.role === "user" &&
          content === message
        ) {
          return false;
        }

        return true;
      })
      .map(item => ({
        role:
          item.role === "assistant"
            ? "model"
            : "user",

        parts: [
          {
            text: String(item.content).trim()
          }
        ]
      }));

    /*
     * Jetzt kommt die aktuelle Nachricht genau EINMAL
     * an Gemini.
     */

    const contents = [
      ...history,

      {
        role: "user",

        parts: [
          {
            text: message
          }
        ]
      }
    ];

    const systemPrompt = `
Du bist JARVIS, ein hochentwickelter persönlicher KI-Assistent.

Persönlichkeit:
Ruhig, souverän, intelligent, höflich, technisch kompetent und lösungsorientiert.
Antworte natürlich, klar und präzise.
Verwende gelegentlich trockenen, subtilen Humor.
Sei selbstbewusst, aber niemals arrogant.

Anrede:
Du darfst den Benutzer gelegentlich mit "Sir" ansprechen,
aber nicht in jeder Antwort.

Sprache:
Standardmäßig Deutsch.
Wenn der Benutzer Englisch oder eine andere Sprache verwendet,
antworte möglichst in dieser Sprache.

Gespräch:
Behalte relevanten Kontext bei.
Normale Fragen sind Gespräche und keine Befehle.
Stelle bei Unklarheiten kurze Rückfragen.
Erfinde keine Informationen.

Antwortstil:
Einfache Fragen kurz beantworten.
Bei komplexen Fragen ausreichend erklären,
aber unnötiges Gerede vermeiden.
Zeige niemals deine interne Gedankenkette.
Gib stattdessen klare Ergebnisse und kurze Begründungen.

Atmosphäre:
Futuristisch, elegant, ruhig, professionell,
intelligent und subtil humorvoll.

Wichtig:
Du bist ein eigenständiger KI-Assistent.
Behaupte nicht, die originale Filmfigur
oder deren originale Stimme zu sein.
`;

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": process.env.GEMINI_API_KEY
        },

        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: systemPrompt
              }
            ]
          },

          contents
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Gemini error:",
        data
      );

      return res.status(response.status).json({
        error:
          data?.error?.message ||
          "Gemini request failed"
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("")
        .trim();

    return res.status(200).json({
      type: "text",

      reply:
        reply ||
        "Entschuldigung, Sir. Ich konnte gerade keine Antwort erzeugen."
    });

  } catch (error) {
    console.error(
      "Backend error:",
      error
    );

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
