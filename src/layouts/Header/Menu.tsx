'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navList } from '@/layouts/Header/utils';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;

    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="flex md:hidden ">
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="18"
          viewBox="0 0 30 18"
          fill="none"
        >
          <path
            d="M1 1.36377H29M1 9.00013H29M1 16.6365H29"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className={`fixed left-0 top-0 min-h-screen w-full inset-0 bg-background bg-opacity-90 z-50 transition-opacity duration-300 px-2 py-5 c-480:px-5 c-480:py-[42px] ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="Лого НейроШтат"
            width={167}
            height={36}
            quality={100}
            priority
          />

          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
            >
              <path
                d="M2 19L18 3M2 3L18 19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-6 mt-11">
          {navList.map((item, index) => (
            <li
              className="text-lg active:text-primary-light transition-colors"
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
