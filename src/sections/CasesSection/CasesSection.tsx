'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { CaseCard } from '@/sections/CasesSection/CaseCard';
import Link from 'next/link';

export const CasesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="cases"
      className="relative z-10 pt-5 c-640:pt-10 pb-[68px] c-960:pb-[80px] c-1280:pb-[100px] lg:rounded-b-[4.375rem] bg-white"
    >
      <div className="container">
        <h2 className="text-[24px] leading-[28.8px] c-480:text-[28px] c-480:leading-[33.6px] c-640:text-[32px] c-640:leading-[38.4px] c-960:text-[36px] c-960:leading-[43.2px] font-semibold mb-[40px] text-start c-480:text-center text-secondary">
          Кейсы
          <span className="bg-purple-text-gradient-to-r text-transparent bg-clip-text">
            {' '}
            реального{' '}
          </span>
          внедрения
        </h2>
      </div>
      <Swiper
        slidesPerView="auto"
        loop
        spaceBetween={40}
        centeredSlides
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} style={{ width: 'auto' }}>
            <CaseCard
              caseData={{
                task: 'Увеличить количество проектов без найма новых сотрудников',
                title: 'Digital-агентство',
                countEmployees: '25 человек в штате',
                results: [
                  '+12 новых проектов за 2 месяца',
                  'Скорость работы выросла в 3 раза',
                  'Выручка увеличилась на 87%',
                ],
                solutions: [
                  'Внедрили 8 ИИ-сотрудников',
                  'Автоматизировали создание контента',
                  'Ускорили подготовку отчетов',
                ],
                image: '/digital-case.jpg',
              }}
              isActive={activeIndex === index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center gap-[40px]">
        <div className="container flex justify-center items-center gap-5 ">
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
          <Link
            className="hidden c-640:inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white order-second w-[351px]"
            href="https://google.com"
            target="_blank"
          >
            Обсудить внедрение нейроштат
          </Link>
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
        <Link
          className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white order-second c-640:hidden w-[250px] c-480:order-first c-480:w-[456px] text-center"
          href="https://google.com"
          target="_blank"
        >
          <span className="c-480:hidden">Обсудить внедрение</span>
          <span className="hidden c-480:inline">
            Обсудить внедрение нейроштат
          </span>
        </Link>
      </div>
    </section>
  );
};
