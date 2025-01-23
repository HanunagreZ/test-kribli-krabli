import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

type Case = {
  title: string;
  countEmployees: string;
  task: string;
  results: string[];
  solutions: string[];
  image: string;
};

type CaseCardProps = {
  caseData: Case;
  isActive: boolean;
};

export const CaseCard = ({ caseData, isActive }: CaseCardProps) => {
  return (
    <div
      className={clsx(
        'rounded-[1.875rem] overflow-hidden w-[300px] text-secondary mb-[60px] transform transition-all duration-300 c-480:w-[460px] c-960:w-[660px] c-1280:w-[740px]',
        isActive ? 'bg-white scale-100 shadow-xl' : 'bg-surface scale-95'
      )}
    >
      <div>
        <Image
          src={caseData.image}
          alt={'Фото кейса'}
          width={740}
          height={355}
        />
      </div>
      <div className="py-[32px] px-[24px] c-960:p-[40px]">
        <div className="flex items-start justify-between mb-[24px] flex-col gap-[16px] c-480:flex-row c-480:items-center">
          <h3 className="text-[20px] leading-[24px] c-960:text-[24px] c-960:leading-[28.8px] font-semibold c-480:order-first">
            {caseData.title}
          </h3>
          <span className="py-2 px-6 bg-accent text-base rounded-full order-first">
            {caseData.countEmployees}
          </span>
        </div>
        <h4 className="text-[18px] leading-[21.6px] c-960:text-[20px] c-960:leading-[22px] c-1280:text-[22px] font-medium mb-3">
          Задача
        </h4>
        <p className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px] mb-5">
          {caseData.task}
        </p>
        <h4 className="text-[18px] leading-[21.6px] c-960:text-[20px] c-960:leading-[22px] c-1280:text-[22px] font-medium mb-3">
          Решение
        </h4>
        <ul className="list-disc list-outside pl-6 mb-5">
          {caseData.solutions.map((task, index) => (
            <li
              key={index}
              className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px]"
            >
              {task}
            </li>
          ))}
        </ul>
        <h4 className="text-[18px] leading-[21.6px] c-960:text-[20px] c-960:leading-[22px] c-1280:text-[22px] font-medium mb-3">
          Результат:
        </h4>
        <ul className="list-disc list-outside pl-6">
          {caseData.results.map((task, index) => (
            <li
              key={index}
              className="text-[16px] leading-[17.6px] c-960:text-[18px] c-960:leading-[21.6px] c-1280:text-[20px] c-1280:leading-[24px]"
            >
              {task}
            </li>
          ))}
        </ul>
        <Link
          className="inline-block py-3.5 px-[4.625rem] rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light mt-[24px] text-[18px] w-full text-center c-960:w-[250px] c-960:px-0"
          href="https://google.com"
          target="_blank"
        >
          Хочу также
        </Link>
      </div>
    </div>
  );
};
