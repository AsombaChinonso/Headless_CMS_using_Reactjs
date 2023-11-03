// 'use client';
import React from 'react'
// import { useState, useEffect } from "react";

async function page() {

    // const dummyWait = await new Promise((resolve, reject) => setTimeout(resolve, 200))
    const response = await fetch("https://graphicshub.thegoshengroup.com.ng/wp/wp-json/wp/v2/books/", {
        // cache: "no-store",
        next: {revalidate: 15},
      });
    
      const data = await response.json();
   
      



    return (
        <div className=' w-full flex-auto'>
            <div className=' mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40'>
                <div className=' mx-auto max-w-2xl lg:max-w-none'>
                    <div className=' space-y-24'>
                        <div className=' relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'></div>
                        <div className=' grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
                            <div className=' opacity-100 transform-none'>
                                <h2 className=' text-2xl font-semibold text-[#252525]'>Books</h2>
                            </div>
                            <div className='lg:col-span-3'>
                                <ul role='list' className=' grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
                                    {data.map((book, index) => (
                                        <li key={index}>
                                            <div className=' opacity-100 transform-none'>
                                            
                                                <div className=' group relative overflow-hidden rounded-3xl bg-neutral-100'>
                                                    <img src={book.acf.image} alt="" className=' h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105' />
                                                    {/* {book.acf.author} */}
                                                    <div className=' absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                                                        <p className=' text-base/6 font-semibold tracking-wide text-white'>{book.title.rendered}</p>
                                                        <p className=' text-sm mt-2 text-white'>{book.acf.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=' space-y-24'>
                        <div className=' relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px'></div>
                        <div className=' grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8'>
                            <div className=' opacity-100 transform-none'>
                                <h2 className=' text-2xl font-semibold text-[#252525]'>Adventure Classics</h2>
                            </div>
                            <div className='lg:col-span-3'>
                                <ul role='list' className=' grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8'>
                                    {data.map((book, index) => (
                                        <li key={index}>
                                            <div className=' opacity-100 transform-none'>
                                            
                                                <div className=' group relative overflow-hidden rounded-3xl bg-neutral-100'>
                                                    <img loading='lazy' src={book.acf.image} alt="" className=' h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105' />
                                                    <div className=' absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6'>
                                                        <p className=' text-base/6 font-semibold tracking-wide text-white'>{book.title.rendered}</p>
                                                        <p className=' text-sm mt-2 text-white'>{book.acf.author}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    
                                    ))}

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page