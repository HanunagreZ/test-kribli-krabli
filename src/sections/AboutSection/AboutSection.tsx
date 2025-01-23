import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section className="bg-accent md:rounded-t-[4.375rem] rounded-[40px] lg:pt-24 lg:pb-32 md:py-20 py-10 text-secondary">
      <div className="container">
        <span className="inline-block w-[90px] h-[30px] bg-command-group mb-1 bg-contain bg-no-repeat c-480:hidden"></span>
        <h2 className="text-[24px] c-480:text-[28px] c-960:text-[36px] font-semibold c-640:text-center text-left mb-[40px] leading-[28.8px] c-480:leading-[33.6px] c-960:leading-[43.2px]">
          Ваша команда&nbsp;
          <span className="hidden c-480:inline-block w-[90px] h-[30px] c-960:w-[132px] c-960:h-[44px] bg-command-group mr-2 -mb-2 bg-contain bg-no-repeat"></span>
          станет
          <br />в 5 раз эффективнее вместе с НейроШтат
        </h2>

        <div className="flex flex-col items-center justify-between gap-8 mb-[60px] c-640:flex-row">
          <div className="lg:max-w-[520px] max-w-[420px]">
            <Image
              src="/corporate-db.png"
              alt="Корпоративная база данных"
              width={520}
              height={450}
            />
          </div>
          <div className="lg:max-w-[520px] max-w-[455px]">
            <h3 className="text-[20px] c-480:text-[24px] c-960:text-[28px] c-1280:text-[32px] font-semibold mb-[1.875rem]  leading-[24px] c-480:leading-[28.8px] c-960:leading-[33.6px] c-1280:leading-[38.4px]">
              Искусственный Интеллект работает с
              <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
                {' '}
                вашей базой знаний
              </span>
            </h3>
            <p className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] mb-4">
              Научите Искусственный Интеллект работать по вашим правилам за 10
              минут:
            </p>
            <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px]">
              <li className="mb-1">Мгновенное обучение новым стандартам</li>
              <li className="mb-1">Соблюдение вашего брендбука</li>
              <li>Работа с конфиденциальными данными</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-between gap-8 mb-[60px] c-640:flex-row">
          <div className="lg:max-w-[520px] max-w-[455px]">
            <h3 className="text-[20px] c-480:text-[24px] c-960:text-[28px] c-1280:text-[32px] font-semibold mb-[1.875rem]  leading-[24px] c-480:leading-[28.8px] c-960:leading-[33.6px] c-1280:leading-[38.4px]">
              Виртуальный офис
              <br />
              <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
                из 50 сотрудников
              </span>
            </h3>
            <p className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] mb-4">
              Вся экспертиза для роста бизнеса в одном окне
            </p>
            <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px]">
              <li className="mb-1">Закрывают 97% типовых задач</li>
              <li className="mb-1">Доступны 24/7 без выходных</li>
              <li>Неограниченное количество запросов</li>
            </ul>
          </div>
          <div className="lg:max-w-[520px] max-w-[420px]">
            <Image src="/office.png" alt="Офис" width={520} height={450} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-8 c-640:flex-row">
          <div className="lg:max-w-[520px] max-w-[420px]">
            <Image src="/chat.png" alt="Чат" width={520} height={450} />
          </div>
          <div className="lg:max-w-[520px] max-w-[455px]">
            <h3 className="text-[20px] c-480:text-[24px] c-960:text-[28px] c-1280:text-[32px] font-semibold mb-[1.875rem]  leading-[24px] c-480:leading-[28.8px] c-960:leading-[33.6px] c-1280:leading-[38.4px]">
              <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
                Чат{' '}
              </span>
              вместо брифов и ТЗ
            </h3>
            <p className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] mb-4">
              Получайте результат за минуты, а не дни
            </p>
            <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px]">
              <li className="mb-1">Моментальный старт работы</li>
              <li className="mb-1">Бесконечные правки без доплат</li>
              <li>Понимает даже сложные задачи</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
