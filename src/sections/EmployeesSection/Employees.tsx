'use client';

import { EmployeeCard } from '@/sections/EmployeesSection/EmployeeCard';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import './styles.css';

const pagination = {
  el: '.pagination',
  clickable: true,
};

export const EmployeesSection = () => {
  return (
    <section
      id="employees"
      className="lg:pt-[100px] pb-10 pt-[52px] c-480:pt-[80px] c-1280:pt-[100px] text-secondary text-center"
    >
      <div className="container">
        <div className="flex flex-col items-start">
          <span className="inline-block c-640:hidden w-[60px] h-[38px] bg-ai-sorority mr-2 mb-2 bg-contain bg-no-repeat"></span>
          <h2 className="text-[24px] c-480:text-[28px] c-960:text-[36px] leading-[28.8px] c-480:leading-[33.6px] c-960:leading-[43.2px] font-semibold c-640:mx-auto mb-[40px] c-1280:mb-[60px] text-start c-640:text-center">
            Познакомьтесь с вашими будущими
            <br />
            <span className="hidden c-640:inline-block w-[80px] h-[49px] bg-ai-sorority mr-2 -mb-3 bg-contain bg-no-repeat"></span>
            ИИ-сотрудниками
          </h2>
        </div>

        <div>
          <div className="w-[calc(50%+50vw)]">
            <Swiper
              slidesPerView={'auto'}
              pagination={pagination}
              modules={[Pagination]}
            >
              {new Array(5).fill(0).map((_, index) => (
                <SwiperSlide
                  key={index}
                  className={'mr-5'}
                  style={{ width: 'auto' }}
                >
                  <EmployeeCard
                    employee={{
                      image: '/employee.jpg',
                      name: 'Копирайтер для соцсетей ',
                      description: 'Изменит привычные процессы',
                      now: 'Сейчас: 1,5 часа',
                      before: 'Раньше: 8-10 часов',
                      tasks: [
                        'Написать серию продающих постов для Instagram',
                        'Подготовить текст для рекламы в Facebook',
                        'Составить текст для рассылки в Telegram',
                        'Подготовить текст для рекламы в Google',
                      ],
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="pagination mt-7 min-h-6"></div>
        </div>
        <Link
          className="inline-block py-3.5 px-9 rounded-[0.625rem] bg-secondary text-white mt-[40px]"
          href="https://google.com"
          target="_blank"
        >
          <span className="inline c-480:hidden">Посмотреть всех</span>
          <span className="hidden c-480:inline">
            Посмотреть всех 50 сотрудников
          </span>
        </Link>
      </div>
    </section>
  );
};
