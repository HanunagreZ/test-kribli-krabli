import Link from 'next/link';

export const Banner = () => {
  return (
    <Link
      href="https://google.com"
      target="_blank"
      className="block bg-purple-gradient-to-r h-28 c-480:h-24 sm:pt-5 pt-4 px-2.5 w-full text-center text-white relative "
    >
      Какое-нибудь актуальное предложение только сегодня.
    </Link>
  );
};
