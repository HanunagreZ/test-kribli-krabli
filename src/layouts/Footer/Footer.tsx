import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-surface pt-[24px] pb-[37px] c-690:py-[60px] c-1280:px-[50px]">
      <div className="container">
        <ul className="flex items-center justify-between mb-[24px]">
          <li>
            <Link className="inline-block w-[167px] h-[36px]" href="/">
              <Image
                src="/logo.png"
                alt="Лого НейроШтат"
                width={206}
                height={44}
                quality={100}
                priority
              />
            </Link>
          </li>
          <li>
            <Link className="text-lg text-primary-lighter" href="/#top">
              Наверх
            </Link>
          </li>
        </ul>
        <div className="flex items-start justify-between flex-col c-960:flex-row-reverse ">
          <ul className="flex flex-col justify-center items-center text-right mx-auto mb-[24px] c-960:mr-0">
            <li className="mb-2.5">
              <Link
                href="tel:+79999999999"
                className="text-secondary text-[24px] leading-[28.8px] c-960:text-[28px] c-960:leading-[33.6px] font-semibold transition-colors duration-300 hover:text-secondary-light"
              >
                +7 (999) 999-99-99
              </Link>
            </li>
            <li>
              <Link
                href="mailto:neuroshtat@mail.ru"
                className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] text-secondary transition-colors duration-300 hover:text-secondary-light"
              >
                neuroshtat@mail.ru
              </Link>
            </li>
          </ul>
          <div className="flex flex-col c-640:flex-row c-640:justify-between c-640:w-full c-960:w-auto c-960:gap-[60px]">
            <ul className="grid grid-cols-1 gap-x-[0px] gap-y-[12px] mb-[24px]">
              {footerLinksLeft.map((item, index) => {
                return (
                  <li className="inline-block " key={`Footer-nav-${index}`}>
                    <Link
                      className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] text-secondary-light transition-colors duration-300 hover:text-secondary-lighter"
                      href={item.link}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="grid grid-cols-1 gap-x-[0px] gap-y-[12px]">
              {footerLinksRight.map((item, index) => {
                return (
                  <li className="inline-block" key={`Footer-nav-${index}`}>
                    <Link
                      className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] text-secondary-light transition-colors duration-300 hover:text-secondary-lighter"
                      href={item.link}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerLinksLeft = [
  {
    link: '/#',
    text: 'Помощь',
  },
  {
    link: '/#',
    text: 'Оплата',
  },
  {
    link: '/#',
    text: 'Безопасная сделка',
  },
  {
    link: '/#',
    text: 'Отзывы',
  },
  {
    link: '/#',
    text: 'Контакты',
  },
];

const footerLinksRight = [
  {
    link: '/#',
    text: 'Пользовательское соглашение',
  },
  {
    link: '/#',
    text: 'Политика конфиденциальности',
  },
  {
    link: '/#',
    text: 'Политика возвратов',
  },
  {
    link: '/#',
    text: 'Отказ от ответственности',
  },
  {
    link: '/#',
    text: 'Управление подпиской',
  },
];
