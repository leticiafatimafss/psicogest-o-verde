export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { nome, telefone, empresa, mensagem } = req.body;

    const response = await fetch("https://hook.us2.make.com/pcpcatn7yx4yu7homqo1ykgjewd4mhnu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        telefone,
        empresa,
        mensagem,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(500).json({
        error: "Erro ao enviar para o Make",
        details: text,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      error: "Erro interno no servidor",
      details: error.message,
    });
  }
}
