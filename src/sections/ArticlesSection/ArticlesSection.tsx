'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { ArticleCard } from '@/sections/ArticlesSection/ArticleCard';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';

export const ArticlesSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="articles"
      className="lg:pt-[130px] pt-10 c-480:pt-[60px] c-640:pt-[100px] c-1280:pt-[120px]"
    >
      <div className="container">
        <div className="flex items-center gap-[160px]">
          <div className="lg:mb-[50px] mb-10">
            <h2 className="text-[24px] leading-[28.8px] c-480:text-[28px]  c-480:leading-[33.6px] c-960:text-[36px] c-960:leading-[43.2px] font-semibold mb-4">
              Полезные статьи и гайды
            </h2>
            <p className="text-[18px] leading-[21.6px] c-480:text-[20px]  c-480:leading-[24px] c-1280:text-[24px] c-1280:leading-[28.8px]">
              Здесь вы найдете множество полезных материалов, от пошаговых
              инструкций до подробных разборов. Практические советы, лайфхаки и
              проверенные стратегии ждут вас!
            </p>
          </div>
          <div className="md:flex hidden justify-center items-center gap-2">
            <button
              className="inline-block py-3.5 px-[1.375rem] rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span className="sr-only">Сдвинуть влево</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
              >
                <path
                  d="M28.5 11H1.5"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 2L1.5 11L10.5 20"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className="inline-block py-3.5 px-[1.375rem] rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span className="sr-only">Сдвинуть вправо</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
              >
                <path
                  d="M1.5 11L28.5 11"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 20L28.5 11L19.5 2"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-[calc(50%+50vw)]">
          <Swiper
            slidesPerView={'auto'}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {new Array(5).fill(0).map((_, index) => (
              <SwiperSlide
                className="my-5"
                style={{ width: 'auto' }}
                key={index}
              >
                <ArticleCard
                  article={{
                    image: '/article-welcome.jpg',
                    link: 'https://google.com',
                    title: 'Начало работы',
                    description:
                      'Как эффективно внедрить ИИ-сотрудников в вашу команду',
                    minutes: 7,
                    about:
                      'Пошаговый план интеграции, чек-лист для руководителя, примеры успешного внедрения',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="c-960:hidden flex justify-center items-center gap-2">
            <button
              className="inline-block py-3.5 px-[1.375rem] rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <span className="sr-only">Сдвинуть влево</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
              >
                <path
                  d="M28.5 11H1.5"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10.5 2L1.5 11L10.5 20"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className="inline-block py-3.5 px-[1.375rem] rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <span className="sr-only">Сдвинуть вправо</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="22"
                viewBox="0 0 30 22"
                fill="none"
              >
                <path
                  d="M1.5 11L28.5 11"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 20L28.5 11L19.5 2"
                  stroke="#010E27"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
