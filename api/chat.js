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
    const {
      message,
      conversation = []
    } = req.body || {};

    if (
      !message ||
      typeof message !== "string"
    ) {
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
      Verhindert, dass die aktuelle Nachricht
      doppelt an Gemini geschickt wird.
    */

    const cleanConversation =
      conversation
        .slice(-20)
        .filter(item => {
          if (
            !item ||
            !item.content
          ) {
            return false;
          }

          return String(item.content).trim() !==
            message.trim();
        })
        .map(item => ({
          role:
            item.role === "assistant"
              ? "model"
              : "user",

          parts: [
            {
              text: String(
                item.content
              )
            }
          ]
        }));


    const contents = [
      ...cleanConversation,

      {
        role: "user",

        parts: [
          {
            text: message.trim()
          }
        ]
      }
    ];


    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          "x-goog-api-key":
            process.env.GEMINI_API_KEY
        },

        body: JSON.stringify({

          systemInstruction: {

            parts: [

              {
                text:
                  `Du bist JARVIS, ein moderner persönlicher KI-Assistent.

Dein Name ist JARVIS.

Antworte standardmäßig auf Deutsch.

WICHTIG:
Antworte kurz, natürlich und direkt.
Keine langen Begrüßungen.
Wenn der Benutzer nur "Hi", "Hallo" oder "Hey" sagt, antworte nur kurz und freundlich, zum Beispiel "Hallo, Sir.".

Gehe nicht unnötig ins Detail.
Erkläre nur mehr, wenn der Benutzer danach fragt oder es für die Antwort notwendig ist.

Dein Stil:
- ruhig
- intelligent
- höflich
- selbstbewusst
- präzise
- leicht futuristisch
- gelegentlich subtiler trockener Humor

Du kannst den Benutzer gelegentlich "Sir" nennen, aber nicht in jeder Antwort.

Wenn der Benutzer Deutsch spricht, antworte Deutsch.
Wenn der Benutzer Englisch spricht, kannst du Englisch antworten.

Du kannst Fragen beantworten, Gespräche führen und Programmcode schreiben.

Wenn der Benutzer Java-Code möchte, schreibe korrekten Java-Code und erkläre ihn nur so ausführlich, wie es nötig ist.

Wichtig:
Behaupte niemals, dass du eine App geöffnet, eine Datei verändert oder eine Aktion auf dem Gerät durchgeführt hast, wenn diese Aktion nicht tatsächlich ausgeführt wurde.

Du bist JARVIS innerhalb der Anwendung MARS JARVIS.`
              }

            ]

          },


          contents,


          generationConfig: {

            temperature: 0.55,

            maxOutputTokens: 500

          }

        })

      }
    );


    const data =
      await response.json();


    if (!response.ok) {

      console.error(
        "Gemini error:",
        data
      );

      return res.status(
        response.status
      ).json({

        error:
          data?.error?.message ||
          "Gemini request failed"

      });

    }


    const reply =
      data
        ?.candidates?.[0]
        ?.content?.parts
        ?.map(
          part =>
            part.text || ""
        )
        .join("")
        .trim();


    if (!reply) {

      return res.status(200).json({

        reply:
          "Verstanden."

      });

    }


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
