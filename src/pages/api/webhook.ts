// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // --- Логика обработки сообщения от Telegram ---
    console.log('Received webhook update:', body);

    // 1. Проверка, что пришло сообщение (а не, например, callback_query или что-то ещё)
    if (body.message) {
      const chatId = body.message.chat.id;
      const text = body.message.text;

      // 2.  Ваша логика обработки сообщения.
      //     Например, простой эхо-бот:
      if (text === '/start') {
        //Здесь можно вызвать sendMessage, см. шаг 4.
        await sendMessage(chatId, 'Привет! Я бот, работающий через вебхук.');
      } else {
        await sendMessage(chatId, `Вы сказали: ${text}`);
      }
    }

    return NextResponse.json({ status: 'ok' }); // Важно вернуть 200 OK!
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Вспомогательная функция для отправки сообщений (см. шаг 4)
async function sendMessage(chatId: number, text: string) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Получаем токен из переменных окружения!
  if (!BOT_TOKEN) {
    throw new Error(
      'TELEGRAM_BOT_TOKEN is not defined in environment variables'
    );
  }

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: text,
      // Другие опциональные параметры (parse_mode, reply_markup и т.д.)
    }),
  });

  if (!response.ok) {
    // Обрабатываем ошибки от Telegram API.  Например, логируем.
    const errorData = await response.json();
    console.error(
      'Error sending message to Telegram:',
      response.status,
      errorData
    );
    //Можно выбрасывать ошибку, но в `POST` ее надо ловить и возвращать 200
    //throw new Error(`Failed to send message: ${response.status}`);
  }
  // Можно ничего не возвращать, т.к. нас интересует только факт отправки.
}

// Очень важно экспортировать config, чтобы Next.js знал, что не надо парсить body.
export const config = {
  api: {
    bodyParser: false,
  },
};
