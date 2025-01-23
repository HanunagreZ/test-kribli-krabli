import { Form } from './Form';
import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-surface text-secondary pt-[58px] c-480:pt-[68px] c-640:pt-[86px] c-1280:pt-[100px] pb-10 relative"
    >
      <div className="container">
        <span className="inline-block c-640:hidden w-[72px] h-[30px] bg-personal mb-2 bg-contain bg-no-repeat"></span>
        <h2 className="text-[24px] leading-[28.8px] c-480:text-[28px]  c-480:leading-[33.6px] c-640:text-[32px] c-640:leading-[38.4px]  c-1280:text-[36px] c-1280:leading-[43.2px] font-semibold mb-[60px] c-640:text-center c-960:text-left">
          Получите
          <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
            {' '}
            персональную{' '}
          </span>
          <br />
          демонстрацию возможностей
          <br />
          <span className="hidden c-640:inline-block w-[94px] h-[37px] bg-personal mr-2 -mb-2 bg-contain bg-no-repeat"></span>
          Нейроштат для вашего
          <br />
          бизнеса
        </h2>
        <div className="flex flex-col w-full c-960:flex-row">
          <Form />

          <Image
            src="/choose-employee.png"
            alt="Выбери своего работника"
            width={480}
            height={420}
            className="object-cover mt-[60px] mx-auto c-960:relative c-960:bottom-[110px]"
          />
        </div>
      </div>

      {/* <div className="bg-accent h-[450px] w-2/3 lg:top-52 top-60 rounded-l-[2rem] absolute -z-0 right-0 text-right">
        <div className="relative inline-block lg:mr-20 mr-10 lg:-mt-10 -mt-5 lg:max-w-[480px] max-w-[390px]">
          <Image
            src="/choose-employee.png"
            alt="Выбери своего работника"
            width={480}
            height={420}
            className="object-cover"
          />
        </div>
      </div> */}
    </section>
  );
};
