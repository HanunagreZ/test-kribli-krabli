import { PreviewVideo } from './PreviewVideo';
import Link from 'next/link';

export const PreviewSection = () => {
  return (
    <section className="bg-surface relative lg:z-0 text-secondary text-center pt-[57px] c-640:pt-[76px] c-960:pt-[80px] c-1280:pt-[100px] pb-[68px] c-480:pb-[96px] c-640:pb-[60px] c-960:pb-[80px] c-1280:pb-[100px]">
      <div className="container">
        <h2 className="text-[24px] leading-[28.8px] c-480:text-[32px]  c-480:leading-[38.4px] c-960:text-[36px] c-960:leading-[43.2px] font-semibold mb-4 text-secondary text-start c-640:text-center">
          Посмотрите, как
          <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
            {' '}
            работает{' '}
          </span>
          НейроШтат
        </h2>
        <p className="text-[18px] leading-[21.6px] c-480:text-[20px] c-480:leading-[24px] c-1280:text-[24px] c-1280:leading-[28.8px] max-w-[710px] mx-auto mb-[32px] c-480:mb-[40px] c-1280:mb-[50px] text-start c-640:text-center">
          2 минуты, которые изменят ваше представление о работе с Искусственным
          Интелектом
        </p>
        <PreviewVideo />
        <div className="flex flex-col items-center">
          <h3 className="text-[20px] leading-[24px] c-960:text-[24px] c-960:leading-[28.8px] font-semibold mt-[32px] c-640:mt-[20px] c-960:mt-[40px] mb-5 self-start c-640:self-center">
            Ключевые моменты:
          </h3>
          <ul className="list-disc list-outside pl-6 mb-[50px] text-left self-start c-640:self-center">
            <li className="text-[16px] leading-[17.6px]  c-960:text-[20px] c-960:leading-[24px] mb-2.5">
              Как ИИ учитывает специфику вашего бизнеса
            </li>
            <li className="text-[16px] leading-[17.6px]  c-960:text-[20px] c-960:leading-[24px]">
              Как быстро поставить задачу любому специалисту
            </li>
          </ul>
          <Link
            className="inline-block py-3.5 w-full rounded-[0.625rem] bg-secondary text-white text-[18px] c-640:w-[280px]"
            href="https://google.com"
            target="_blank"
          >
            Попробовать бесплатно
          </Link>
        </div>
      </div>
    </section>
  );
};
