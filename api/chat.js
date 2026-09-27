export default async function handler(req, res) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://zaidfaqiri17-ai.github.io"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, conversation = [] } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: "GEMINI_API_KEY is not configured"
      });
    }

    const history = conversation
      .slice(-20)
      .map(item => {
        const role = item.role === "assistant" ? "model" : "user";

        return {
          role,
          parts: [
            {
              text: String(item.content || "")
            }
          ]
        };
      })
      .filter(item => item.parts[0].text.trim());

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
                text:
                  "Du bist JARVIS, ein intelligenter persönlicher KI-Assistent. " +
                  "Antworte standardmäßig auf Deutsch. " +
                  "Sprich natürlich, klar und direkt. " +
                  "Wenn der Benutzer eine andere Sprache verwendet, antworte in dieser Sprache. " +
                  "Behalte den Gesprächskontext bei. " +
                  "Behandle normale Fragen nicht als Befehle."
              }
            ]
          },
          contents
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Gemini error:", data);

      return res.status(response.status).json({
        error: data?.error?.message || "Gemini request failed"
      });
    }

    const reply =
      data?.candidates?.[0]?.content?.parts
        ?.map(part => part.text || "")
        .join("")
        .trim();

    return res.status(200).json({
      reply:
        reply ||
        "Entschuldigung, ich konnte gerade keine Antwort erzeugen."
    });

  } catch (error) {
    console.error("Backend error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
