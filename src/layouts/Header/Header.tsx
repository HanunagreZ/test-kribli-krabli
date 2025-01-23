'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from './Navigation';
import { Menu } from './Menu';
import clsx from 'clsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-[1px] w-full"></div>

      <header
        className={clsx(
          'sticky z-50 w-full top-0 left-0 transition-all duration-300 -mt-8',
          isScrolled
            ? 'bg-transparent backdrop-blur-md rounded-none'
            : 'bg-white rounded-[2.5rem]'
        )}
      >
        <div className="container flex items-center justify-between py-3 px-[10px] c-640:py-[17px] c-640:px-5 c-960:px-10 c-1280:px-[60px]">
          <Link className="inline-block w-[167px] h-[36px]" href="/">
            <Image
              src="/logo.png"
              alt="Лого НейроШтат"
              width={167}
              height={36}
              quality={100}
              priority
            />
          </Link>
          <Navigation />
          <Menu />
        </div>
      </header>
    </>
  );
};
