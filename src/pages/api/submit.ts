import { NextApiRequest, NextApiResponse } from 'next';

// Telegram BOT API token
const TELEGRAM_BOT_API_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

// Telegram chat ID
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

/**
 * Submit the form data.
 * @param req - The request.
 * @param res - The response.
 */
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Only allow POST requests
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   console.log('Telegram bot token:', TELEGRAM_BOT_API_TOKEN);
//   console.log('Telegram chat ID:', TELEGRAM_CHAT_ID);

//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   // Get the data from the request body (form data)
//   const { phone, name } = req.body;

//   console.log(`New form submission:\nName: ${name}\nPhone: ${phone}`);

//   // Validate the data
//   if (!phone || !name) {
//     return res.status(400).json({ error: 'Please fill out all fields' });
//   }

//   // Validate the phone number
//   if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
//     return res.status(400).json({ error: 'Invalid phone number' });
//   }

//   // Validate the name minimum length
//   if (name.length < 2) {
//     return res.status(400).json({ error: 'Name is too short' });
//   }

//   // Validate the name maximum length
//   if (name.length > 30) {
//     return res.status(400).json({ error: 'Name is too long' });
//   }

//   try {
//     const markdownMessage =
//       '*Новое обращение:*' + `\n\n*Имя:* ${name}` + `\n*Телефон:* ${phone}`;

//     // Send the message to private Telegram chat
//     const response = await fetch(
//       `https://api.telegram.org/bot${TELEGRAM_BOT_API_TOKEN}/sendMessage`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: TELEGRAM_CHAT_ID,
//           text: markdownMessage,
//           parse_mode: 'Markdown',
//         }),
//       }
//     );

//     // Handle the response
//     if (!response.ok) {
//       console.error(response.statusText);
//       return res.status(500).json({ error: 'Failed to send the message' });
//     }

//     // Return the success response
//     return res.status(200).json({ message: 'Form submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('Telegram bot token:', TELEGRAM_BOT_API_TOKEN);
  console.log('Telegram chat ID:', TELEGRAM_CHAT_ID);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Get the data from the request body (form data)
  const { phone, name } = req.body;

  console.log(`New form submission:\nName: ${name}\nPhone: ${phone}`);

  // Validate the data
  if (!phone || !name) {
    return res.status(400).json({ error: 'Please fill out all fields' });
  }

  // Validate the phone number
  if (!/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(phone)) {
    return res.status(400).json({ error: 'Invalid phone number' });
  }

  // Validate the name minimum length
  if (name.length < 2) {
    return res.status(400).json({ error: 'Name is too short' });
  }

  // Validate the name maximum length
  if (name.length > 30) {
    return res.status(400).json({ error: 'Name is too long' });
  }

  try {
    const markdownMessage =
      '*Новое обращение:*' + `\n\n*Имя:* ${name}` + `\n*Телефон:* ${phone}`;

    // Send the message to private Telegram chat
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_API_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: markdownMessage,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return res
        .status(500)
        .json({ error: 'Failed to send the message', details: errorData });
    }

    console.log('Message sent successfully');
    return res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res
      .status(500)
      .json({ error: 'Internal server error', details: error });
  }
}
