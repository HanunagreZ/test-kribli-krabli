export const HiringEmployeesSection = () => {
  return (
    <section className="pb-10 text-secondary relative z-20 pt-[120px] c-480:pt-[40px] c-640:mt-[80px] c-1280:mt-[120px]">
      <div className="container relative">
        <span className="inline-block c-640:hidden w-[68px] h-[30px] bg-hiring-employees bg-contain bg-no-repeat "></span>
        <h2
          className="text-[24px] leading-[28.8px] c-480:text-[28px] c-480:leading-[33.6px] c-640:text-[33.6px] c-640:leading-[38.4px] c-960:text-[36px] 
        c-960:leading-[43.2px] font-semibold lg:mb-7 mb-[1.875rem] c-1280:absolute c-1280:right-[60px] c-1280:top-[50px] c-1280:w-[540px]"
        >
          Наймите штат
          <span className="hidden c-640:inline-block w-[118px] h-[47px] bg-hiring-employees ml-2 -mb-3 bg-contain bg-no-repeat"></span>
          <br />
          ИИ-сотрудников за 10 минут:
        </h2>
        <ul>
          <li
            className="relative mb-5 c-480:before:content-arrow-to-r before:absolute 
          c-480:before:-bottom-[0px] c-480:before:-left-[-270px] c-480:before:scale-x-[-1] c-480:before:rotate-[-70deg]
          c-640:before:-bottom-[150px] c-640:before:left-[8px] c-640:before:rotate-[0deg] c-640:before:scale-x-[1] c-1280:before:left-[150px]"
          >
            <div className="bg-white rounded-[1.875rem] inline-block text-left shadow-purple w-[300px] py-[40px] px-[32px] c-640:py-[24px] c-960:py-[32px] c-960:w-[540px] c-1280:w-[500px]">
              <div className="flex items-center gap-5 mb-5">
                <span className="size-[60px] text-white text-[1.375rem] font-semibold bg-purple-main rounded-full flex items-center justify-center">
                  1
                </span>
                <h3 className="text-[20px] leading-[24px] c-960:text-[22px] c-960:leading-[22.7px] font-medium">
                  Регистрация
                  <br />и настройки
                </h3>
              </div>
              <ol className="list-decimal list-outside pl-6">
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Создайте аккаунт за 2 минуты
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Загрузите ваши материалы и стандарты
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px]">
                  Получите доступ ко всем специалистам
                </li>
              </ol>
            </div>
          </li>
          <li className="mb-5 text-center">
            <div className="bg-white rounded-[1.875rem] inline-block text-left relative z-10 w-[300px] py-[40px] px-[32px] c-640:py-[24px] c-960:py-[32px] c-960:w-[540px] c-1280:w-[500px]">
              <div className="flex items-center gap-5 mb-5">
                <span className="size-[60px] shrink-0 text-white text-[1.375rem] font-semibold bg-orange-main rounded-full flex items-center justify-center">
                  2
                </span>
                <h3 className="text-[20px] leading-[24px] c-960:text-[22px] c-960:leading-[22.7px] font-medium">
                  Выбор сотрудников
                </h3>
              </div>
              <ol className="list-decimal list-outside pl-6">
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Выберите нужных экспертов из каталога
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Изучите их возможности и кейсы
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px]">
                  Соберите команду под ваши задачи
                </li>
              </ol>
            </div>
          </li>
          <li
            className="relative mb-5 text-right c-480:before:content-arrow-to-b before:absolute 
          c-480:before:-bottom-[-145px] c-480:before:right-[280px] c-480:before:scale-x-[1] c-480:before:rotate-[195deg]
          c-640:before:-bottom-[-240px] c-640:before:right-[35px] c-640:before:rotate-[-90deg] c-640:before:scale-y-[-1] c-690:before:right-[0px] c-690:before:top-[-110px] c-1280:before:right-[150px]"
          >
            <div className="bg-white rounded-[1.875rem] inline-block text-left shadow-purple w-[300px] py-[40px] px-[32px] c-640:py-[24px] c-960:py-[32px] c-960:w-[540px] c-1280:w-[500px]">
              <div className="flex items-center gap-5 mb-5">
                <span className="size-[60px] shrink-0 text-white text-[1.375rem] font-semibold bg-purple-main rounded-full flex items-center justify-center">
                  3
                </span>
                <h3 className="text-[20px] leading-[24px] c-960:text-[22px] c-960:leading-[22.7px] font-medium">
                  Постановка задач
                </h3>
              </div>
              <ol className="list-decimal list-outside pl-6">
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Опишите задачу в чате простым языком
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2.5">
                  Получите результат за считанные минуты
                </li>
                <li className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px]">
                  Корректируйте до нужного результата
                </li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
