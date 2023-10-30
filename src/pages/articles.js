import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li>
            {/* TODO */}
        </li>
    );
}

const articles = () => {
  return     <>
  <Head>
    <title>mali3days | articles Page</title>
    <meta name="description" content="https:TODO: any description"></meta>
  </Head>
  <main className='flex flex-col items-center justify-center w-full mb-16 overflow-hidden'>
    <Layout className="pt-16">
        <AnimatedText text="Words Can Change The World!" className='mb-16' />
        <ul className='grid grid-cols-2 gap-16'>
            <li>Featured Article - 1</li>
            <li>Featured Article - 2</li>
        </ul>
    </Layout>
  </main>
  </>
};

export default articles;


/*

ARTICLES PAGE:

- Words Can Change The World! 

Build A Custom Pagination Component In Reactjs From Scratch
Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
9 min read

Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens
Learn how to create stunning loading screens in React with 3 different methods. 
Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
Improve the user experience.
10 min read

Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling

Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers

Creating An Efficient Modal Component In React Using Hooks And Portals

Build A Fabulous Todo List App With React, Redux And Framer-Motion

Redux Simplified: A Beginner's Guide For Web Developers

What Is Higher Order Component (Hoc) In React?

*/
