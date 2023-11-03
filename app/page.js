"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {



  const [books, setBooks] = useState("")
  useEffect(() => {

    fetch('https://graphicshub.thegoshengroup.com.ng/wp/wp-json/wp/v2/books')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setBooks(data)

        const filteredData = data.filter(item => item.wp.featuredmedia);
        console.log(filteredData)
      })
      .catch(error => {
        console.error(error);
      });

  }, [])

  console.log(books)






  return (
    <div className="2xl:max-w-[1280px] h-screen w-full mx-auto flex flex-col bg-gray-100">
      <div
        className={` mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 `}
      >
        <div className="mx-auto max-2xl lg:max-w-none">
          <div className=" opacity-100 transform-none text-center ">
            <h1 className="">
              {/* <span className=" block font-semibold text-base text-[#252525]">
                Welcome to
              </span> */}
              <span className=" sr-only">-</span>
              <span className=" mt-6 block max-w-5xl text-5xl text-[#252525] font-medium tracking-tight [text-wrap:balance] sm:text-6xl mx-auto">
                WP/Reacts Project
              </span>
            </h1>
            <div className="mt-6 max-w-3xl text-xl text-neutral-600 mx-auto">
              <p>A Reactjs frontend and Wordpress backend project. This project captures the latest technologies in the market such as Nextjs 13, Reactjs, Tailwind CSS + the latest version of wordpress for content management system.</p>
            </div>
            <div className="mt-8">
      <Link
        href="/books"
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 hover:from-teal-600 to-teal-600 hover:to-cyan-500 bg-cyan-600 rounded hover:bg-gray-600 transition duration-[600ms] ease-in-out"
      >
        Get Started
      </Link>
    </div>
          </div>
        </div>
      </div>

    </div>
  );
}
