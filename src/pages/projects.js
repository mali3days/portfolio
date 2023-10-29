import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="flex items-center mt-2">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left">{title}</h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>mali3days | Projects Page</title>
        <meta name="description" content="https:TODO: any description"></meta>
      </Head>
      <main className="flex flex-col items-center justify-center w-full mb-16">
        <Layout className="pt-16">
          <AnimatedText
            text=" Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                        It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                        local currency."
                link="https://TODO!"
                type="Featured Project"
                img={project1}
                github="https://TODO"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
