export default async function handler(req, res) {
  // CORS für deine GitHub-Pages-Seite
  res.setHeader("Access-Control-Allow-Origin", "https://zaidfaqiri17-ai.github.io");
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

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "OPENAI_API_KEY is not configured" });
    }

    const input = [
      {
        role: "system",
        content:
          "Du bist JARVIS, ein intelligenter persönlicher KI-Assistent. " +
          "Antworte standardmäßig auf Deutsch. " +
          "Sprich natürlich, klar und direkt. " +
          "Wenn der Benutzer eine andere Sprache verwendet, darfst du in dieser Sprache antworten. " +
          "Behalte den Gesprächskontext bei. " +
          "Behandle normale Fragen nicht als Befehle."
      },
      ...conversation.slice(-20),
      {
        role: "user",
        content: message
      }
    ];

    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-5.6",
        input
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("OpenAI error:", data);
      return res.status(response.status).json({
        error: data?.error?.message || "OpenAI request failed"
      });
    }

    const reply =
      data.output_text ||
      data.output
        ?.flatMap(item => item.content || [])
        ?.find(item => item.type === "output_text")
        ?.text ||
      "Entschuldigung, ich konnte gerade keine Antwort erzeugen.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Backend error:", error);

    return res.status(500).json({
      error: "Internal server error"
    });
  }
}
