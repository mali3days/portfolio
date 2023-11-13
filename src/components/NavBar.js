import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
} from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block  w-0 bg-dark
          dark:bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const { mode, toggleMode } = useThemeSwitcher();

  return (
    <header className="flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="twitter.com"
          target="_black"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="twitter.com"
          target="_black"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="twitter.com"
          target="_black"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="twitter.com"
          target="_black"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 rounded-full bg-light"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="twitter.com"
          target="_black"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <DribbbleIcon />
        </motion.a>

        <button
          onClick={toggleMode}
          className={`flex items-center justify-center p-1 ml-3 rounded-full
          ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        >
          {mode === 'dark' ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-light" />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
