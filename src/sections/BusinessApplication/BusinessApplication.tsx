import Link from 'next/link';
import Image from 'next/image';

export const BusinessApplication = () => {
  return (
    <section className="bg-surface text-secondary relative ">
      <div className="container bg-white rounded-[1.875rem] pt-[68px] c-960:py-[80px] c-1280:py-[100px]">
        <div className="max-w-[1040px] mx-auto c-960:w-[920px] c-1280:w-[1040px]">
          <h2 className="text-[24px] leading-[28.8px] c-480:text-[28px] c-480:leading-[33.6px] c-960:text-[36px] c-960:leading-[43.2px] font-semibold mb-2 text-start c-640:text-center">
            Применение в
            <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
              {' '}
              бизнесе
            </span>
          </h2>
          <div className="flex flex-col gap-[40px] c-960:gap-[10px]">
            <div className="flex justify-center items-center flex-col-reverse c-960:flex-row c-1280:justify-between">
              <div className="flex flex-col self-start w-full c-960:py-[80px] c-960:pl-[80px] c-960:w-[440px] c-1280:pl-0">
                <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] c-960:text-[28px] c-960:leading-[33.6px] c-1280:text-[32px] c-1280:leading-[38.4px] font-semibold mb-4 c-640:self-center c-960:self-start">
                  Маркетинг и контент
                </h3>
                <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] lg:mb-[50px] mb-10 c-640:self-center c-960:self-start">
                  <li className="mb-1">Создание рекламных материалов</li>
                  <li className="mb-1">Подготовка контент-планов</li>
                  <li className="mb-1">Работа с социальными сетями</li>
                  <li>Анализ целевой аудитории</li>
                </ul>
                <Link
                  className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white text-[18px] w-full text-center c-640:w-[257px] c-640:self-center c-640:px-0 c-960:self-start"
                  href="https://google.com"
                  target="_blank"
                >
                  Посмотреть примеры
                </Link>
              </div>
              <Image
                src="/marketing-specialist.png"
                alt="Маркетолог"
                width={320}
                height={262}
                className="w-full c-640:w-[380px] c-960:w-[450px] c-1280:w-[500px]"
              />
            </div>
            <div className="flex justify-center items-center flex-col-reverse c-960:flex-row-reverse c-1280:justify-between">
              <div className="flex flex-col self-start w-full c-960:py-[80px] c-960:pl-[80px] c-960:w-[440px] c-1280:pl-0">
                <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] c-960:text-[28px] c-960:leading-[33.6px] c-1280:text-[32px] c-1280:leading-[38.4px] font-semibold mb-4 c-640:self-center c-960:self-start">
                  Продажи
                </h3>
                <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] lg:mb-[50px] mb-10 c-640:self-center c-960:self-start">
                  <li className="mb-1">Разработка скриптов продаж</li>
                  <li className="mb-1">Создание коммерческих предложений</li>
                  <li className="mb-1">Анализ воронки продаж</li>
                  <li>Подготовка презентаций</li>
                </ul>
                <Link
                  className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white text-[18px] w-full text-center c-640:w-[257px] c-640:self-center c-640:px-0 c-960:self-start"
                  href="https://google.com"
                  target="_blank"
                >
                  Посмотреть примеры
                </Link>
              </div>
              <Image
                src="/sale-manager.png"
                alt="Менеджер по продажам"
                width={320}
                height={262}
                className="w-full c-640:w-[380px] c-960:w-[450px] c-1280:w-[500px]"
              />
            </div>
            <div className="flex justify-center items-center flex-col-reverse c-960:flex-row c-1280:justify-between">
              <div className="flex flex-col self-start w-full c-960:py-[80px] c-960:pl-[80px] c-960:w-[440px] c-1280:pl-0">
                <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] c-960:text-[28px] c-960:leading-[33.6px] c-1280:text-[32px] c-1280:leading-[38.4px] font-semibold mb-4 c-640:self-center c-960:self-start">
                  Операционная деятельность
                </h3>
                <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] lg:mb-[50px] mb-10 c-640:self-center c-960:self-start">
                  <li className="mb-1">Подготовка отчетов и аналитики</li>
                  <li className="mb-1">Разработка онлайн-курсов</li>
                  <li className="mb-1">Создание регламентов и процессов</li>
                  <li>Оптимизация бизнес-процессов</li>
                </ul>
                <Link
                  className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white text-[18px] w-full text-center c-640:w-[257px] c-640:self-center c-640:px-0 c-960:self-start"
                  href="https://google.com"
                  target="_blank"
                >
                  Посмотреть примеры
                </Link>
              </div>

              <Image
                src="/business-assistant.png"
                alt="Бизнес ассистент"
                width={320}
                height={262}
                className="w-full c-640:w-[380px] c-960:w-[450px] c-1280:w-[500px]"
              />
            </div>
            <div className="flex justify-center items-center flex-col-reverse c-960:flex-row-reverse c-1280:justify-between">
              <div className="flex flex-col self-start w-full c-960:py-[80px] c-960:pl-[80px] c-960:w-[440px] c-1280:pl-0">
                <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] c-960:text-[28px] c-960:leading-[33.6px] c-1280:text-[32px] c-1280:leading-[38.4px] font-semibold mb-4 c-640:self-center c-960:self-start">
                  Обучение и HR
                </h3>
                <ul className="list-disc list-outside pl-6 text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] lg:mb-[50px] mb-10 c-640:self-center c-960:self-start">
                  <li className="mb-1">Создание обучающих материалов</li>
                  <li className="mb-1">Разработка онлайн-курсов</li>
                  <li className="mb-1">Подготовка тестовых заданий</li>
                  <li>Написание должностных инструкций</li>
                </ul>
                <Link
                  className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white text-[18px] w-full text-center c-640:w-[257px] c-640:self-center c-640:px-0 c-960:self-start"
                  href="https://google.com"
                  target="_blank"
                >
                  Посмотреть примеры
                </Link>
              </div>
              <Image
                src="/hr-manager.png"
                alt="HR менеджер"
                width={320}
                height={262}
                className="w-full c-640:w-[380px] c-960:w-[450px] c-1280:w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
