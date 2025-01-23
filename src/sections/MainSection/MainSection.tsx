import Image from 'next/image';
import Link from 'next/link';
import { SectionCards } from './SectionCards';

export const MainSection = () => {
  return (
    <section className="container lg:pt-24 md:pt-20 pt-[23px] c-480:pt-[40px] c-960:pt-[80px] c-1280:pt-[110px] pb-[12px] c-640:pb-[40px] c-960:pb-[52px] sm:text-center text-secondary relative">
      <div className="bg-grey-gradient-to-b rounded-b-[1.875rem] lg:mb-5 mb-3 lg:px-0 ">
        <span className="inline-block bg-accent px-6 py-2 md:text-xl text-base rounded-full md:mb-7 mb-5">
          <span className="hidden c-480:inline">
            Усильте свою команду с помощью ИИ
          </span>
          <span className="inline-block c-480:hidden">
            Усильте свою команду
          </span>
        </span>
        <h1 className="text-[24px] leading-[24px] c-480:text-[32px] c-480:leading-[38px] c-960:text-[46px] c-960:leading-[50px] c-1280:text-[54px] c-1280:leading-[56px] font-bold md:mb-8 mb-5">
          <span className="inline-block size-[34px] c-480:size-[40px] c-960:size-[60px] bg-cover bg-lightning-duotone lg:-mb-2 -mb-1" />
          <span className="inline-block size-[34px] c-480:size-[40px] c-960:size-[60px] bg-cover bg-mage-stars ml-2 lg:-mb-2 mr-3 -mb-1" />
          Команда из 50 виртуальных{' '}
          <span className="hidden c-640:inline-block size-[34px] c-480:size-[40px] c-960:size-[60px] bg-cover bg-user-group mx-1 lg:-mb-2.5 -mb-1" />
          сотрудников{' '}
          <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
            увеличат эффективность
          </span>{' '}
          вашего бизнеса уже сегодня
        </h1>
        <p className="block font-semibold max-w-[775px] mx-auto c-960:mb-10 mb-8 text-[18px] leading-[21.6px] c-480:text-[20px] c-480:leading-[24px] c-960:text-[24px] c-960:leading-[28.8px]">
          Получите доступ к команде ИИ-сотрудников, которые помогут вашим
          сотрудникам работать эффективнее:
        </p>
        <ul className="mb-10 text-left inline-grid c-640:grid-cols-2 gap-y-2 list-image-[url('/purple-marker.svg')] list-outside pl-6 justify-start c-960:text-[20px] leading-[17.6px] c-960:leading-[24px]">
          <li className="c-640:max-w-[290px] c-960:max-w-[400px] ">
            Доступны 24/7 без перерывов
          </li>
          <li className="c-640:max-w-[290px] c-960:max-w-[400px] c-960:ml-3">
            Выполняют задачи в 5 раз быстрее
          </li>
          <li className="c-640:max-w-[290px] c-960:max-w-[400px] ">
            Не требуют управления и мотивации
          </li>
          <li className="c-640:max-w-[290px] c-960:max-w-[400px] c-960:ml-3">
            Масштабируются под ваши потребности
          </li>
        </ul>
        <ul className="md:mb-20 mb-10 flex items-center justify-center lg:gap-4 gap-2 c-690:flex-row flex-col">
          <li className="lg:w-auto w-full">
            <Link
              className="inline-block lg:py-3.5 py-3 lg:px-9 px-2.5 text-[18px] rounded-[0.625rem] bg-secondary text-white font-medium lg:w-auto w-full text-center"
              href="https://google.com"
              target="_blank"
            >
              <span className="hidden c-480:inline">
                Протестировать бесплатно 7 дней
              </span>
              <span className="inline-block c-480:hidden">
                Протестировать бесплатно
              </span>
            </Link>
          </li>
          <li className="lg:w-auto w-full">
            <Link
              className="inline-block lg:py-3.5 py-3 lg:px-9 px-2.5 rounded-[0.625rem] text-[18px] text-primary font-medium border-[1.5px] border-primary-light lg:w-auto w-full text-center"
              href="https://google.com"
              target="_blank"
            >
              Посмотреть ИИ сотрудников
            </Link>
          </li>
        </ul>
        <div className="max-w-[1000px] mx-auto">
          <Image
            src="/preview-screen.png"
            alt="Превью приложения"
            width={1600}
            height={513}
          />
        </div>
      </div>
      <SectionCards />
      <span className="h-[310px] w-[310px] absolute top-[150px] right-[50px] border border-[rgba(0, 0, 0, 0.05)] rounded-[0.625rem] -z-[1] lg:block hidden" />
      <span className="h-[400px] w-[500px] absolute top-[350px] -right-[200px] border border-[rgba(0, 0, 0, 0.05)] rounded-[0.625rem] -z-[1] lg:block hidden" />
      <span className="h-[400px] w-[700px] absolute top-[35px] -left-[400px] border border-[rgba(0, 0, 0, 0.05)] rounded-[0.625rem] -z-[1] lg:block hidden" />
      <span className="h-[400px] w-[300px] absolute top-[250px] left-[240px] border border-[rgba(0, 0, 0, 0.05)] rounded-[0.625rem] -z-[1] lg:block hidden" />
    </section>
  );
};
