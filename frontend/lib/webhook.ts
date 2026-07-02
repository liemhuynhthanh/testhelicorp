export async function sendDiscordWebhook(title: string, data: Record<string, any>) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn("DISCORD_WEBHOOK_URL is not set in .env");
    return;
  }

  // Format the data into a nice Discord embed
  const fields = Object.entries(data).map(([key, value]) => ({
    name: key,
    value: String(value),
    inline: true,
  }));

  const payload = {
    embeds: [
      {
        title: title,
        color: 0x00ff00, // Green color
        fields: fields,
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Failed to send Discord webhook:", res.status, res.statusText);
    }
  } catch (error) {
    console.error("Error sending webhook:", error);
  }
}
