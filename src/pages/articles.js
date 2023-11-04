import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import article1 from '../../public/images/articles/pagination component in reactjs.jpg';
import article2 from '../../public/images/articles/create loading screen in react js.jpg';
import article3 from '../../public/images/articles/create modal component in react using react portals.png';
import article4 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png';
import article6 from '../../public/images/articles/todo list app built using react redux and framer motion.png';
import { motion, useMotionValue } from 'framer-motion';

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  function handleMouse(event) {
    imageRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imageRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{
          x: x,
          y: y,
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.2,
          },
        }}
        ref={imageRef}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto rounded-lg w-96"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      viewport={{ once: true }}
      initial={{
        y: 200,
      }}
      whileInView={{
        y: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-4 border border-b-4 border-r-4 border-solid rounded-xl bg-light text-dark first:mt-0 border-dark"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="inline-block w-full overflow-hidden rounded-lg cursor-pointer "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            duration: 0.2,
          }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>mali3days | articles Page</title>
        <meta name="description" content="https:TODO: any description"></meta>
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article3}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article4}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article5}
              date="March 22, 2023"
              link="/"
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              img={article6}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
