import Image from 'next/image';
import Link from 'next/link';

type Employee = {
  image: string;
  name: string;
  description: string;
  now: string;
  before: string;
  tasks: string[];
};

export const EmployeeCard = ({ employee }: { employee: Employee }) => {
  return (
    <div className="text-left bg-surface rounded-[1.875rem] text-secondary w-[219px] c-480:w-[440px] c-480:p-[42px] c-640:w-[460px] c-960:w-[824px] c-960:p-[60px] c-960:flex-row c-960:gap-[20px] flex justify-between flex-col">
      <div className="flex flex-col gap-[20px] c-480:flex-row c-480:mb-[40px] c-640:mb-[20px] c-960:flex-col c-960:w-[202px]">
        <Image
          src={employee.image}
          alt={'Фото сотрудника'}
          width={219}
          height={181}
          className="rounded-[1rem] w-219 h-181 c-480:w-[155px] c-480:h-[175px] c-640:w-[140px] c-640:h-[140px] c-960:w-[172px] c-960:h-[175px]"
        />
        <div className="flex flex-col p-[20px] c-480:p-0">
          <p className="text-[18px] leading-[21.6px] c-480:text-[20px] c-480:leading-[24px] c-960:text-[24px] c-960:leading-[28.8px] c-1280:text-[28px] c-1280:leading-[33.6px] font-semibold mb-4 c-640:mb-[5px]">
            {employee.name}
          </p>
          <p className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-480:hidden c-640:block">
            {employee.description}
          </p>
          <Link
            className="inline-block c-480:hidden py-3 rounded-[0.625rem] text-secondary font-medium border-[1.5px] border-primary-light w-full text-center text-[18px] mt-[40px]"
            href="https://google.com"
            target="_blank"
          >
            Подробнее
          </Link>
          <div className="items-center gap-2 mb-5 hidden c-480:flex c-480:flex-col c-480:gap-2 c-480:w-[200px] c-480:items-start c-480:mt-auto c-480:mb-0 c-640:hidden">
            <span className="py-2 px-6 bg-white text-base rounded-full w-full">
              {employee.before}
            </span>
            <span className="py-2 px-6 bg-accent text-base rounded-full">
              {employee.now}
            </span>
          </div>
        </div>
      </div>
      <div className="hidden c-480:flex flex-col">
        <p className="text-[24px] leading-[28.8px] c-640:text-[20px] c-640:leading-[24px] c-960:text-[24px] c-960:leading-[28.8px] c-1280:text-[28px] c-1280:leading-[33.6px] font-semibold mb-4">
          Задачи, с которыми он справится:
        </p>
        <ul className="list-disc list-outside pl-6">
          {employee.tasks.map((task, index) => (
            <li
              key={index}
              className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] mb-2"
            >
              {task}
            </li>
          ))}
        </ul>
        <div className="items-center gap-2 mt-[30px] hidden c-640:flex c-960:order-first c-960:mt-0 c-960:mb-[20px]">
          <span className="py-2 text-center bg-white text-base rounded-full w-[182px]">
            {employee.before}
          </span>
          <span className="py-2 text-center bg-accent text-base rounded-full w-[182px]">
            {employee.now}
          </span>
        </div>
      </div>
    </div>
  );
};
