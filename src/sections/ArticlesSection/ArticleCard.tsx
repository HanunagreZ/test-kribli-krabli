import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

type Article = {
  link: string;
  image: string;
  minutes: number;
  title: string;
  description: string;
  about: string;
};

type ArticleCardProps = {
  article: Article;
  className?: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  className,
}) => {
  return (
    <article
      className={clsx(
        'bg-white mr-[20px] p-[24px] rounded-[1.875rem] text-secondary shadow-[0px_0px_40px_0px_rgba(118,118,118,0.1)] flex flex-col justify-between w-[300px] c-480:w-[380px] c-1280:w-[400px]',
        className
      )}
    >
      <Link
        href={article.link}
        target="_blank"
        className="overflow-hidden rounded-[1.25rem] w-full h-[200px] relative block mb-6"
      >
        <Image
          src={article.image}
          alt={`Изображение статьи ${article.title}`}
          width={400}
          height={200}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <span className="sr-only">{article.title}</span>
        <span className="bg-white text-[16px] leading-[17.6px] rounded-full py-2 px-6 absolute left-2.5 bottom-2.5">
          Читать {article.minutes} мин
        </span>
      </Link>
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] font-semibold mb-2.5">
            {article.title}
          </h3>
          <p className="text-[18px] leading-[21.6px] font-medium mb-2.5">
            {article.description}
          </p>
          <p className="text-[16px] leading-[17.6px] text-primary-lighter">
            {article.about}
          </p>
        </div>
        <Link
          className="inline-block py-3.5 px-9 rounded-[0.625rem] text-secondary border-[1.5px] border-primary-light w-full text-center mt-4 text-[18px] leading-[21.6px]"
          href={article.link}
          target="_blank"
        >
          Читать
        </Link>
      </div>
    </article>
  );
};
