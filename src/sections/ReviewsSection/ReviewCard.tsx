import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

type Review = {
  image: string;
  name: string;
  userName: string;
  review: string;
};

type ReviewCardProps = {
  review: Review;
  className?: string;
};

export const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  className,
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-[1.875rem] p-[1.875rem] lg:min-w-[340px] text-secondary text-left w-full c-1280:w-[370px]',
        className
      )}
    >
      <div className="flex items-start lg:gap-5 gap-2.5 mb-5">
        <div className="w-[70px] h-[70px] lg:w-[62px] lg:h-[62px] overflow-hidden rounded-full relative shrink-0">
          <Image
            src={review.image}
            alt={`Фото ${review.userName}`}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-[20px] leading-[24px] c-480:text-[24px] c-480:leading-[28.8px] c-960:text-[20px] c-960:leading-[24px] c-1280:text-[24px] c-1280:leading-[28.8px] font-semibold lg:max-w-[228px] max-w-[160px]">
          {review.name}
        </h3>
      </div>
      <div>
        <h4 className="text-[18px] leading-[21.6px] font-medium mb-2.5">
          — {review.userName}
        </h4>
        <p className="text-[16px] leading-[17.6px] mb-10">{review.review}</p>
        <Link
          className="inline-block py-3.5 px-9 rounded-[0.625rem] text-secondary font-medium border-[1.5px] border-primary-light w-full text-center text-[18px] leading-[21.6px]"
          href="https://google.com"
          target="_blank"
        >
          Хочу также
        </Link>
      </div>
    </div>
  );
};
