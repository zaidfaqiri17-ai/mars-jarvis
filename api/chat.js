 export default async function handler(req, res) {
  // CORS für deine GitHub-Pages-Seite
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

  // Preflight-Anfrage
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // Nur POST erlauben
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const {
      message,
      conversation = []
    } = req.body || {};

    // Nachricht prüfen
    if (
      !message ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    // Gemini API-Key prüfen
    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured"
      });
    }

    /*
      Gesprächsverlauf für Gemini vorbereiten.

      Unser Frontend verwendet:
      user      -> user
      assistant -> model
    */

    const history = conversation
      .slice(-20)
      .map(item => {
        const role =
          item.role === "assistant"
            ? "model"
            : "user";

        return {
          role,
          parts: [
            {
              text: String(item.content || "")
            }
          ]
        };
      })
      .filter(item =>
        item.parts[0].text.trim()
      );

    /*
      Aktuelle Nachricht hinzufügen.
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

    /*
      GEMINI

      WICHTIG:
      Dieses Modell ist absichtlich
      gemini-3.5-flash-lite.
    */

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key":
            process.env.GEMINI_API_KEY
        },

        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text:
                  "Du bist JARVIS, ein intelligenter persönlicher KI-Assistent. " +

                  "Antworte standardmäßig auf Deutsch. " +

                  "Sprich ruhig, intelligent, höflich, präzise und selbstbewusst. " +

                  "Du darfst gelegentlich subtilen trockenen Humor verwenden. " +

                  "Antworte natürlich und nicht unnötig lang. " +

                  "Wenn der Benutzer eine andere Sprache verwendet, kannst du in dieser Sprache antworten. " +

                  "Behalte den Gesprächskontext bei. " +

                  "Behandle normale Fragen als normale Unterhaltung und nicht automatisch als Befehle. " +

                  "Wenn du etwas nicht weißt, sage das ehrlich. " +

                  "Behaupte niemals, eine Aktion auf dem Gerät durchgeführt zu haben, wenn sie tatsächlich nicht durchgeführt wurde. " +

                  "Du bist ein moderner persönlicher KI-Assistent namens MARS JARVIS."
              }
            ]
          },

          contents,

          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800
          }
        })
      }
    );

    const data = await response.json();

    /*
      Gemini-Fehler an Vercel weitergeben,
      damit wir sie in den Logs sehen können.
    */

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

    /*
      Antwort aus Gemini holen.
    */

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("")
        .trim();

    /*
      Falls Gemini keine Antwort geliefert hat.
    */

    if (!reply) {
      return res.status(200).json({
        reply:
          "Entschuldigung, ich konnte gerade keine Antwort erzeugen."
      });
    }

    /*
      Erfolgreiche Antwort.
    */

    return res.status(200).json({
      reply
    });

  } catch (error) {

    console.error(
      "Backend error:",
      error
    );

    return res.status(500).json({
      error:
        "Internal server error"
    });
  }
    }
