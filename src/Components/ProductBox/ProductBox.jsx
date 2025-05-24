import React from 'react';

function ProductBox({title,price,image,discount,exist,star}) {

    return (
            <div className="flex flex-col p-2 md:p-5 bg-white dark:bg-zinc-700 mt-12 rounded-2xl shadow-normal">
                <div className="relative mb-5">
                    <img className="w-32 h-32 mx-auto md:w-auto" src={image} alt="product 1" />
                    <span className = {`${ exist && discount.length > 0 ? "flex" : "hidden"} absolute top-1.5 right-1.5 font-DanaMedium text-xs md:text-base items-center justify-center text-white dark:text-zinc-700 bg-orange-300 w-10 h-5 md:w-[54px] md:h-[30px] rounded-4xl`}>{discount}%</span>
                </div>
                <h4 className="font-DanaMedium text-zinc-700 dark:text-white text-sm md:text-xl h-10 md:h-14 line-clamp-2 ">{title}</h4>
                <div className={` ${exist ? "" : "hidden"} flex items-center gap-x-2.5 mt-2.5`}>
                    <div className="text-teal-600 dark:text-emerald-500 tracking-tighter text-base md:text-xl font-DanaBold">

                        {(Number(price.replace(/,/g, '')) - (Number(price.replace(/,/g, '')) * Number(discount) / 100)).toLocaleString()}

                        <span className="font-DanaLight text-xs tracking-tighter md:text-sm pr-1">تومان</span>
                    </div>
                    <div className={` ${ discount.length > 0 ? "" : "hidden "}text-gray-400 dark:text-gray-400 text-base md:text-xl tracking-tighter font-DanaMedium`}>
                        {price}
                        <span className="font-DanaLight tracking-tighter hidden md:inline-block text-sm pr-1">تومان</span>
                        <span className="block w-[48px] md:w-[100px] h-px md:h-0.25 -translate-y-3.5 md:-translate-y-4 bg-red-500"></span>
                    </div>
                </div>
                <span className={`${exist ? "hidden" : ""} text-base md:text-xl font-DanaMedium text-red-400 mt-2.5`}>
                    فعلا موجود نیست
                </span>

                {/*Icons Bax*/}
                <div className="flex items-center justify-between pt-4">
                    {/*Cart & Compare Icon*/}
                    <div className="flex items-center justify-between gap-x-2.5 md:gap-x-3">
                        <div className="flex items-center justify-center w-[26px] h-[26px] md:w-9 md:h-9 bg-gray-100 dark:bg-zinc-800 hover:bg-teal-600 dark:hover:bg-emerald-500 rounded-full transition-all cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-[22px] md:h-[22px] text-gray-400 hover:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </div>
                        <div className="block transition-all cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-6 md:h-6 text-gray-400 hover:text-teal-600 dark:hover:text-emerald-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </div>
                    </div>
                    {/*Star Icon*/}
                    <div className="flex items-center text-gray-300 dark:text-gray-400">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={index < star ? "text-yellow-400 size-4 md:size-6" : "size-4 md:size-6"}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                                />
                            </svg>
                        ))}
                    </div>

                </div>
            </div>
    );
}

export default ProductBox;