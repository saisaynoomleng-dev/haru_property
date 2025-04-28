'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggleButton } from './ThemeToggleButton';
import { SignInButton } from '@clerk/nextjs';
import { SignedIn, SignedOut, SignUpButton, UserButton } from '@clerk/nextjs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [pagesOpen, setPagesOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { title: 'Home', url: '/' },
    { title: 'About Us', url: '/about-us' },
    { title: 'Pages', hasDropdown: true },
  ];

  const pagesLinks = [
    { title: 'Property', url: '/properties' },
    { title: 'Agents', url: '/agents' },
    { title: 'Post a free Property', url: '/post-free-property' },
    { title: 'Post a paid Property', url: '/post-padi-property' },
    { title: 'Blogs', url: '/blogs' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Pricing', url: '/pricing' },
    { title: 'FAQ', url: '/faqs' },
  ];

  return (
    <header className="absolute inset-0 top-0 left-0 px-5 py-3 md:px-10 max-w-[2000px] flex justify-between items-center h-12 z-50 bg-brand-neutral-200 dark:bg-brand-neutral-700">
      <div className="flex gap-1 items-center relative z-50">
        <Link href="/">
          <Image
            src="/logo-on-black.png"
            priority
            alt=""
            width={150}
            height={100}
            className="hidden dark:block min-w-[100px]"
          />

          <Image
            src="/logo-on-white.png"
            priority
            alt=""
            width={150}
            height={100}
            className="block dark:hidden min-w-[100px]"
          />
        </Link>

        <ThemeToggleButton />
      </div>

      <div className="flex gap-3 mr-5 md:mr-0 items-center">
        <SignedOut>
          <SignInButton mode="modal" />
          <SignUpButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button
          className="md:hidden absolute right-[1rem] top-[1rem] cursor-pointer z-50"
          aria-controls="#main-nav"
          onClick={() => setNavOpen((prevOpen) => !prevOpen)}
        >
          <span className="sr-only">Nav Menu Button</span>
          {navOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </button>

        <nav
          id="main-nav"
          role="navigation"
          aria-expanded={navOpen}
          className="md:-order-1"
        >
          <ul
            className={clsx(
              'flex gap-3 max-md:flex-col max-md:fixed max-md:inset-0 max-md:px-10 max-md:py-5 max-md:z-30 max-md:bg-brand-neutral-100 max-md:dark:bg-brand-neutral-600 max-md:dark:text-brand-neutral-100 max-md:top-12 max-md:transition-all max-md:duration-500 max-md:ease-in-out',
              !navOpen
                ? 'max-md:-translate-y-[200%] max-md:opacity-0'
                : 'max-md:translate-y-0 max-md:opacity-100',
            )}
          >
            {navLinks.map((link) => (
              <li key={link.title}>
                {link.url ? (
                  <Link
                    href={link.url}
                    className={clsx(
                      'font-semibold hover:text-green-200',
                      pathname === link.url && 'text-green-500',
                    )}
                    onClick={() => setNavOpen(false)}
                  >
                    {link.title}
                  </Link>
                ) : (
                  <div className="relative group font-semibold">
                    <button
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setPagesOpen((prevOpen) => !prevOpen)}
                    >
                      {link.title}
                      <span
                        className={clsx(
                          'transition-transform duration-150 origin-center',
                          pagesOpen && 'rotate-180',
                        )}
                      >
                        ▾
                      </span>
                    </button>
                    {pagesOpen && (
                      <ul className="absolute p-5 mt-3 ml-3 flex flex-col gap-5 md:w-[200px] bg-brand-neutral-00 md:right-5 dark:bg-brand-neutral-700 bg-brand-neutral-300 dark:text-brand-neutral-100 rounded-sm">
                        {pagesLinks.map((page) => (
                          <li key={page.title}>
                            <Link
                              href={page.url}
                              className={clsx(
                                'font-semibold hover:text-green-200',
                                pathname === page.url && 'text-green-500',
                              )}
                              onClick={() => {
                                setNavOpen(false);
                                setPagesOpen(false);
                              }}
                            >
                              {page.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
