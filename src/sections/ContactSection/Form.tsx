'use client';

import { InputMask } from '@react-input/mask';
import { FormEvent, useState } from 'react';

export const Form = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [errors, setErrors] = useState<{ phone?: string; name?: string }>({});
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function validateForm(): boolean {
    const newErrors: { phone?: string; name?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Имя обязательно для заполнения.';
    } else if (name.length < 2) {
      newErrors.name = 'Имя должно содержать не менее 2 символов.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Телефон обязателен для заполнения.';
    } else if (!/^(\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})$/.test(phone)) {
      newErrors.phone = 'Телефон должен быть в формате "+7 (___) ___-__-__".';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    const data = JSON.stringify({ phone, name });

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setMessage('Форма успешно отправлена! Спасибо за вашу заявку.');
        setPhone('');
        setName('');
        setErrors({});
      } else {
        setMessage('Произошла ошибка при отправке формы. Попробуйте еще раз.');
      }
    } catch {
      setMessage('Ошибка соединения. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-[1.875rem] max-w-[460px] py-[34px] px-[24px] c-480:p-[40px] mx-auto w-full c-960:max-w-[400px] c-960:h-[340px] c-1280:max-w-[540px]">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <label
              className="text-secondary-light text-[16px] leading-[19.2px]"
              htmlFor="user-phone-num"
            >
              Введите номер телефона:
            </label>
            <InputMask
              mask="+7 (___) ___-__-__"
              placeholder="+7 (___) ___-__-__"
              required
              type="tel"
              name="phone"
              replacement={{ _: /\d/ }}
              id="user-phone-num"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`text-[16px] leading-[19.2px] text-primary border ${
                errors.phone ? 'border-red-500' : 'border-[rgba(0, 0, 0, 0.2)]'
              } rounded-[0.625rem] px-8 py-4 focus:outline-none focus:border-secondary-light focus:ring-1 focus:ring-secondary-light`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="text-secondary-light text-[16px] leading-[19.2px]"
              htmlFor="user-name"
            >
              Введите имя:
            </label>
            <input
              id="user-name"
              name="name"
              placeholder="Имя"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`text-[16px] leading-[19.2px] text-primary border ${
                errors.name ? 'border-red-500' : 'border-[rgba(0, 0, 0, 0.2)]'
              } rounded-[0.625rem] px-8 py-4 focus:outline-none focus:border-secondary-light focus:ring-1 focus:ring-secondary-light`}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
        </div>
        <button
          className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white w-full disabled:bg-gray-400 disabled:cursor-not-allowed text-[18px] leading-[21.6px]"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Отправка...' : 'Записаться на демо'}
        </button>
      </form>
      {message && (
        <div
          className={`mt-4 p-4 rounded-lg text-center ${
            message.includes('успешно')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};
