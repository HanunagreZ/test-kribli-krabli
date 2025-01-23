import { ReviewCard } from '@/sections/ReviewsSection/ReviewCard';

export const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="bg-blend py-10 text-secondary text-center relative c-960:pt-0"
    >
      <div className="container c-640:px-[20px]">
        <h2 className="text-[24px] leading-[28.8px] c-480:text-[28px]  c-480:leading-[33.6px] c-960:text-[36px] c-960:leading-[43.2px] font-semibold mb-[40px]">
          Отзывы
        </h2>

        <ul className="flex lg:gap-5 gap-[20px] items-center justify-center c-960:flex-row flex-col c-960:gap-[10px]">
          <li className="relative">
            <ReviewCard
              review={{
                image: '/user-mihail.png',
                name: 'Онлайн-школа SkillPath',
                userName: 'Михаил Добров, Основатель',
                review:
                  'Благодаря Нейроштат мы запустили 5 новых курсов за месяц. Раньше на это уходило полгода. ИИ-методологи и копирайтеры помогли создать качественные материалы, которые высоко оценили наши студенты.',
              }}
              className="relative z-10"
            />
            <div className="shadow-purple absolute bg-transparent z-0 top-1/2"></div>
          </li>
          <li className="c-960:relative c-960:top-[-14px]">
            <ReviewCard
              review={{
                image: '/user-anna.png',
                name: 'Маркетинговое агентство MediaForce',
                userName: 'Анна Светлова, CEO',
                review:
                  'До внедрения Нейроштат мы тратили 70% времени на рутинные задачи. Сейчас наши специалисты занимаются стратегией и развитием, а всю базовую работу выполняют ИИ-помощники. Производительность выросла в 3 раза.',
              }}
              className="relative z-10"
            />
            <div className="shadow-purple absolute bg-transparent bottom-0 left-0"></div>
          </li>
          <li className="relative">
            <ReviewCard
              review={{
                image: '/user-sergey.png',
                name: 'Digital-агентство FutureWeb',
                userName: 'Сергей Иванов, Руководитель проектов',
                review:
                  'Нейроштат стал настоящим прорывом для нашего агентства. Теперь мы берем в 2 раза больше проектов, при этом качество работы только выросло. ИИ-специалисты помогают нам поддерживать высокую скорость без потери качества.',
              }}
              className="relative z-10"
            />
            <div className="shadow-purple absolute b-10 bg-transparent bottom-0 right-24"></div>
          </li>
        </ul>
      </div>
    </section>
  );
};
