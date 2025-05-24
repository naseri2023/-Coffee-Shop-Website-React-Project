import React from 'react';
import Header from "../../Components/Header/Header";
import ProductBox from "../../Components/ProductBox/ProductBox";

function Home(props) {

    const productDetails =[
        {title:"1قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم ...",firstPrice:"154,000",discount:"10",image:"/assets/images/products/p1.png",star:3,exist:true},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط دوم اس2م ...",firstPrice:"175,000",discount:"15",image:"/assets/images/products/p2.png",star:2,exist:false},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط دوم ا3سم ...",firstPrice:"154,000",discount:"",image:"/assets/images/products/p3.png",star:0,exist:true},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط دوم 4اسم ...",firstPrice:"160,000",discount:"5",image:"/assets/images/products/p4.png",star:4,exist:false},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط دوم5 اسم ...",firstPrice:"154,000",discount:"2",image:"/assets/images/products/p5.png",star:2,exist:true},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط دو6م اسم ...",firstPrice:"140,000",discount:"",image:"/assets/images/products/p6.png",star:3,exist:true},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط د7وم اسم ...",firstPrice:"120,000",discount:"20",image:"/assets/images/products/p7.png",star:1,exist:false},
        {title:"قهوه ترک بن مانو مقدار 250 گرم خط 8دوم اسم ...",firstPrice:"130,000",discount:"50",image:"/assets/images/products/p8.png",star:0,exist:true},
    ]

    return (
        <div className="font-DanaLight bg-gray-100 dark:bg-zinc-800">
            <Header/>
            <img className="hidden md:block absolute opacity-30 dark:opacity-75 bg-no-repeat" src="/assets/images/body-bg.png" alt="bodyBackground"/>
                <div className="container relative mb-20" >
                    <div className="product-header pt-8 md:pt-24 lg:pt-48 mb-5 md:mb-12">
                        <span className="font-MorabaMedium text-2xl md:text-4xl text-zinc-700 dark:text-white">جدیدترین محصولات</span>
                        <div className="flex justify-between items-center">
                            <span className="font-MorabaLight text-lg md:text-2xl pt-0.5 md:pt-[6px] text-zinc-700 dark:text-white">فرآوری شده از دانه قهوه</span>
                            <div className="flex justify-between items-center h-10 pr-3 pl-1 rounded-md text-orange-300 transition-colors md:hover:bg-orange-300/20 cursor-pointer">
                                <span className="hidden md:inline-block text-lg tracking-tightest">مشاهده همه محصولات</span>
                                <span className="md:hidden text-base tracking-tightest">مشاهده همه </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
                        {productDetails.map(product => (
                            <ProductBox
                                key={product.title}
                                title={product.title}
                                price={product.firstPrice}
                                image={product.image}
                                discount={product.discount}
                                exist={product.exist}
                                star={product.star}/>
                        ))}
                    </div>

                {/*Category Section*/}
                <div className="flex flex-col md:flex-row items-center justify-between mt-8 md:mt-20 md:mb-10 gap-5">
                        {/* Right Cart */}
                        <div className="relative w-full h-[165px] md:w-[620px] md:h-[248px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/assets/images/categories/category-right.jpg"
                                alt="category-right"
                            />
                            <div className="absolute w-full h-ful inset-0 bg-gradient-to-l from-black/60 to-black/10"></div>
                            <div className="relative z-10 flex flex-col justify-center gap-y-4 md:gap-y-7 pr-7 md:pr-12 h-full text-white">
                                <h4 className="text-2xl md:text-4xl font-DanaMedium ">انواع قهوه</h4>
                                <span className="text-base md:text-xl">ترکیبی و تک خاستگاه</span>
                            </div>
                        </div>

                        {/* Left Cart*/}
                        <div className="relative w-full h-[165px] md:w-[620px] md:h-[248px] rounded-2xl overflow-hidden">
                            <img
                                className="absolute inset-0 w-full h-full object-cover"
                                src="/assets/images/categories/category-left.jpg"
                                alt="category-left"
                            />
                            <div className="absolute w-full h-ful inset-0 bg-gradient-to-l from-black/60 to-black/10"></div>
                            <div className="relative z-10 flex flex-col justify-center gap-y-4 md:gap-y-7 pr-7 md:pr-12 h-full text-white">
                                <h4 className="text-2xl md:text-4xl font-DanaMedium">پودرهای فوری</h4>
                                <span className="text-base md:text-xl">نسکافه، هات چاکلت، ماسالا</span>
                            </div>
                        </div>
                    </div>

                {/* Group Section*/}
                    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 pt-10 md:py-16 ">
                        <div className="w-[100px] h-[148px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                            <img src="/assets/images/categories/category1.png" alt="category1"/>
                            <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">قهوه دمی و اسپرسو</span>
                        </div>
                        <div className="w-[100px] h-[148px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                            <img src="/assets/images/categories/category2.png" alt="category2"/>
                            <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">لوازم جانبی و تجهیزات</span>
                        </div>
                        <div className="w-[100px] h-[148px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                            <img src="/assets/images/categories/category3.png" alt="category3"/>
                            <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">اسپرسو ساز</span>
                        </div>
                        <div className="w-[100px] h-[148px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                            <img src="/assets/images/categories/category4.png" alt="category4"/>
                            <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">پک تستر قهوه</span>
                        </div>
                        <div className="w-[100px] h-[148px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                            <img src="/assets/images/categories/category5.png" alt="category5"/>
                            <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">قهوه ترک</span>
                        </div>
                    </div>
                {/*Product Suggestion*/}
                    <div className="flex flex-col gap-y-0.5 md:gap-y-2 mt-16">
                        <h4 className="font-MorabaMedium text-zinc-700 dark:text-white text-2xl md:text-5xl">محصولات پر فروش</h4>
                        <div className="flex justify-between items-center ">
                            <span className="font-MorabaLight text-lg md:text-3xl text-zinc-700 dark:text-white">پیشنهاد قهوه خور ها ...</span>
                            <div className="flex items-center justify-between gap-x-3 md:gap-x-[18px]">
                                <div className="flex items-center justify-center transition-all cursor-pointer text-zinc-700 dark:text-white w-9 md:w-11 h-9 md:h-11 bg-white hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex items-center justify-center transition-all cursor-pointer text-zinc-700 dark:text-white w-9 md:w-11 h-9 md:h-11 bg-white hover:bg-gray-300 dark:bg-zinc-700 dark:hover:bg-white dark:hover:text-zinc-700 rounded-full ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-x-5">
                            <ProductBox
                                key={productDetails[4].title}
                                title={productDetails[4].title}
                                price={productDetails[4].firstPrice}
                                image={productDetails[4].image}
                                discount={productDetails[4].discount}
                                exist={productDetails[4].exist}
                                star={productDetails[4].star}
                            />
                            <ProductBox
                                key={productDetails[5].title}
                                title={productDetails[5].title}
                                price={productDetails[5].firstPrice}
                                image={productDetails[5].image}
                                discount={productDetails[5].discount}
                                exist={productDetails[5].exist}
                                star={productDetails[5].star}
                            />
                            <div className="hidden md:block">
                                <ProductBox
                                    key={productDetails[6].title}
                                    title={productDetails[6].title}
                                    price={productDetails[6].firstPrice}
                                    image={productDetails[6].image}
                                    discount={productDetails[6].discount}
                                    exist={productDetails[6].exist}
                                    star={productDetails[6].star}
                                />
                            </div>
                            <div className="hidden md:block">
                                <ProductBox
                                    key={productDetails[7].title}
                                    title={productDetails[7].title}
                                    price={productDetails[7].firstPrice}
                                    image={productDetails[7].image}
                                    discount={productDetails[7].discount}
                                    exist={productDetails[7].exist}
                                    star={productDetails[7].star}
                                />
                            </div>
                        </div>
                    </div>
                {/*Club Gifts*/}
                    <div className="flex flex-col md:flex-row justify-center md:justify-between items-center h-[254px] md:h-36 rounded-2xl mt-8 md:mt-20 bg-gradient-to-l from-emerald-600 to-emerald-500">
                        <div className="flex justify-between items-center pt-[23px] mb-[34px] gap-x-3 md:gap-x-6">
                            <img className="w-[110px] h-[98px] mr-3 md:mr-11" src="/assets/images/club/diamond.png" alt="club-image"/>
                            <div className="flex flex-col justify-center gap-x-3 gap-y-2">
                                <h4 className="font-MorabaMedium text-2xl md:text-5xl text-white">کافی کلاب</h4>
                                <span className="font-MorabaLight text-lg md:text-2xl text-white md:max-w-[400px] max-w-[235px]">میدونستی میتونی با امتیاز هات قهوه بگیری ؟</span>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-between items-center gap-x-[19px] md:gap-x-[110px]">
                            <div className="flex justify-center items-center gap-x-2 md:gap-x-5">
                                <div className="flex flex-col justify-center items-center gap-y-1.5 w-[72px] h-[72px] md:w-[98px] md:h-[98px] bg-white rounded-2xl">
                                    <svg className="w-[33px] h-[33px] md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.9998 0.000183105C31.0398 0.000183105 39.9998 8.96018 39.9998 20.0002C39.9998 31.0602 31.0398 40.0002 19.9998 40.0002C8.93976 40.0002 -0.000244141 31.0602 -0.000244141 20.0002C-0.000244141 8.96018 8.93976 0.000183105 19.9998 0.000183105ZM27.6998 13.4202C27.9198 12.7202 27.2798 12.0602 26.5798 12.2802L16.3398 15.4802C15.9198 15.6202 15.5798 15.9402 15.4598 16.3602L12.2598 26.6202C12.0398 27.3002 12.6998 27.9602 13.3798 27.7402L23.5798 24.5402C23.9998 24.4202 24.3398 24.0802 24.4598 23.6602L27.6998 13.4202Z" fill="#059669"/>
                                    </svg>
                                    <span className="font-DanaLight text-emerald-600 text-xs md:text-sm ">چرخ و بخت</span>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-y-1.5 w-[72px] h-[72px] md:w-[98px] md:h-[98px] bg-white rounded-2xl">
                                    <svg className="w-[33px] h-[33px] md:w-10 md:h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.8995 3.5606C26.8195 4.0606 26.7795 4.5606 26.7795 5.0606C26.7795 9.5606 30.4195 13.1986 34.8995 13.1986C35.3995 13.1986 35.8795 13.1406 36.3795 13.0606V29.1986C36.3795 35.9806 32.3795 40.0006 25.5795 40.0006H10.8015C3.99951 40.0006 -0.000488281 35.9806 -0.000488281 29.1986V14.4006C-0.000488281 7.6006 3.99951 3.5606 10.8015 3.5606H26.8995ZM27.3015 15.7206C26.7595 15.6606 26.2215 15.9006 25.8995 16.3406L21.0615 22.6006L15.5195 18.2406C15.1795 17.9806 14.7795 17.8786 14.3795 17.9206C13.9815 17.9806 13.6215 18.1986 13.3795 18.5186L7.46151 26.2206L7.33951 26.4006C6.99951 27.0386 7.15951 27.8586 7.75951 28.3006C8.03951 28.4806 8.33951 28.6006 8.67951 28.6006C9.14151 28.6206 9.57951 28.3786 9.85951 28.0006L14.8795 21.5386L20.5795 25.8206L20.7595 25.9386C21.3995 26.2786 22.1995 26.1206 22.6595 25.5186L28.4395 18.0606L28.3595 18.1006C28.6795 17.6606 28.7395 17.1006 28.5195 16.6006C28.3015 16.1006 27.8195 15.7606 27.3015 15.7206ZM35.1797 0C37.8397 0 39.9997 2.16 39.9997 4.82C39.9997 7.48 37.8397 9.64 35.1797 9.64C32.5197 9.64 30.3597 7.48 30.3597 4.82C30.3597 2.16 32.5197 0 35.1797 0Z" fill="#059669"/>
                                    </svg>
                                    <span className="font-DanaLight text-emerald-600 text-xs md:text-sm ">ماموریت ها</span>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-y-1.5 w-[72px] h-[72px] md:w-[98px] md:h-[98px] bg-white rounded-2xl">
                                    <svg className="w-[33px] h-[33px] md:w-10 md:h-10" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.712 0C36.28 0 39.998 3.68403 39.998 8.21028L40 13.5649C40 13.9573 39.842 14.3378 39.562 14.6152C39.28 14.8946 38.9 15.0512 38.5 15.0512C36.858 15.0512 35.522 16.375 35.522 18.002C35.522 19.629 36.858 20.9528 38.5 20.9528C39.328 20.9528 40 21.6186 40 22.4391V27.7917C40 32.318 36.284 36 31.716 36H8.286C3.718 36 0 32.318 0 27.7917V22.4391C0 21.6186 0.672 20.9528 1.5 20.9528C3.144 20.9528 4.48 19.629 4.48 18.002C4.48 16.4166 3.198 15.2236 1.5 15.2236C1.102 15.2236 0.722 15.067 0.44 14.7876C0.158 14.5082 0 14.1297 0 13.7373L0.004 8.21028C0.004 3.68403 3.72 0 8.288 0H31.712ZM20.004 10.3069C19.436 10.3069 18.928 10.6201 18.674 11.1234L17.216 14.0504L13.964 14.5201C13.402 14.5994 12.942 14.9799 12.764 15.5149C12.588 16.05 12.73 16.6286 13.138 17.021L15.496 19.296L14.94 22.5124C14.844 23.0673 15.07 23.6182 15.53 23.9491C15.79 24.1334 16.092 24.2286 16.398 24.2286C16.632 24.2286 16.868 24.1711 17.084 24.0581L20 22.5401L22.91 24.0542C23.414 24.3217 24.012 24.2801 24.47 23.9472C24.932 23.6182 25.158 23.0673 25.062 22.5124L24.504 19.296L26.862 17.021C27.272 16.6286 27.414 16.05 27.236 15.5149C27.06 14.9799 26.6 14.5994 26.044 14.5221L22.786 14.0504L21.328 11.1254C21.078 10.622 20.57 10.3089 20.004 10.3069Z" fill="#059669"/>
                                    </svg>
                                    <span className="font-DanaLight text-emerald-600 text-xs md:text-sm ">جایزه ها</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center md:pl-11">
                                <h4 className="font-DanaBold text-white text-3xl">542</h4>
                                <span className="font-DanaLight text-xs md:text-sm text-white pb-2">امتیـــــــاز شما</span>
                                <div className="flex justify-center items-center w-[90px] h-[26px] md:w-[110px] md:h-8 bg-gradient-to-l from-orange-300 to-orange-200 rounded-full ">
                                    <span className="text-white font-DanaLight text-xs md:text-sm">دریافت جایزه</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-white">
                                        <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*Blog Section*/}
                    <div className="flex justify-between items-center mt-8 md:mt-20">
                        <h4 className="font-MorabaMedium text-2xl md:text-5xl text-zinc-700 dark:text-white ">مطالب خواندنی</h4>
                        <div className="flex justify-between items-center h-10 pr-3 pl-1 rounded-md text-orange-300 transition-colors md:hover:bg-orange-300/20 cursor-pointer">
                            <span className="hidden md:inline-block text-lg tracking-tightest">مشاهده همه محصولات</span>
                            <span className="md:hidden text-base tracking-tightest">مشاهده همه </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-center items-center md:mt-12 mt-5 md:gap-x-5 gap-y-3.5">
                        <div className="flex flex-row md:flex-col justify-center items-center md:p-0 p-2.5 w-[358px] h-[150px] md:w-[300px] md:h-[285px] bg-white dark:bg-zinc-700 rounded-2xl ">
                            <div className="w-[130px] h-[130px] md:w-[280px] md:h-[186px] rounded-t-2xl rounded-tl-2xl rounded-bl-4xl rounded-b-2xl md:rounded-2xl overflow-hidden">
                                <img className="w-full h-full object-cover object-center " src="/assets/images/blogs/blog-1.png" alt="blog1" />
                            </div>
                             <div className="flex md:flex-row flex-col justify-between items-center pr-2.5">
                                <span className="font-DanaLight max-w-[192px] md:max-w-[193px] pb-5 md:pb-0 text-sm md:text-lg text-zinc-700 dark:text-white leading-7">طرز تهیه قهوه دمی با دستگاه اروپرس</span>
                                <div className="hidden md:flex flex-row gap-x-1 md:flex-col items-center justify-center pr-5 pt-0 m-0 text-teal-600 dark:text-emerald-600 md:mt-3 md:border-r border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs md:text-2xl md:-mb-1 ">21</span>
                                    <span className="text-xs md:text-sm">مرداد</span>
                                    <span className="text-xs md:text-sm">1402</span>
                                </div>
                                <div className="md:hidden flex justify-between items-center pt-[21px] ml-4 border-t border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-600 ml-12">21 مرداد 1402 </span>
                                    <div className="w-[69px] h-5 bg-orange-200/20 cursor-pointer flex justify-center items-center text-center text-orange-300 rounded-md gap-x-1">
                                        <span className="text-xs ">مطالعه</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col justify-center items-center md:p-0 p-2.5 w-[358px] h-[150px] md:w-[300px] md:h-[285px] bg-white dark:bg-zinc-700 rounded-2xl ">
                            <div className="w-[130px] h-[130px] md:w-[280px] md:h-[186px] rounded-t-2xl rounded-tl-2xl rounded-bl-4xl rounded-b-2xl md:rounded-2xl overflow-hidden">
                                <img className="w-full h-full object-cover object-center " src="/assets/images/blogs/blog-2.png" alt="blog2" />
                            </div>
                            <div className="flex md:flex-row flex-col justify-between items-center pr-2.5">
                                <span className="font-DanaLight max-w-[192px] md:max-w-[193px] pb-5 md:pb-0 text-sm md:text-lg text-zinc-700 dark:text-white leading-7">طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی</span>
                                <div className="hidden md:flex flex-row gap-x-1 md:flex-col items-center justify-center pr-5 pt-0 m-0 text-teal-600 dark:text-emerald-600 md:mt-3 md:border-r border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs md:text-2xl md:-mb-1 ">21</span>
                                    <span className="text-xs md:text-sm">مرداد</span>
                                    <span className="text-xs md:text-sm">1402</span>
                                </div>
                                <div className="md:hidden flex justify-between items-center pt-[21px] ml-4 border-t border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-600 ml-12">21 مرداد 1402 </span>
                                    <div className="w-[69px] h-5 bg-orange-200/20 cursor-pointer flex justify-center items-center text-center text-orange-300 rounded-md gap-x-1">
                                        <span className="text-xs ">مطالعه</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col justify-center items-center md:p-0 p-2.5 w-[358px] h-[150px] md:w-[300px] md:h-[285px] bg-white dark:bg-zinc-700 rounded-2xl ">
                            <div className="w-[130px] h-[130px] md:w-[280px] md:h-[186px] rounded-t-2xl rounded-tl-2xl rounded-bl-4xl rounded-b-2xl md:rounded-2xl overflow-hidden">
                                <img className="w-full h-full object-cover object-center " src="/assets/images/blogs/blog-3.png" alt="blog3" />
                            </div>
                            <div className="flex md:flex-row flex-col justify-between items-center pr-2.5">
                                <span className="font-DanaLight max-w-[192px] md:max-w-[193px] pb-5 md:pb-0 text-sm md:text-lg text-zinc-700 dark:text-white leading-7">طرز تهیه یک فنجان کافه زینو برزیلی</span>
                                <div className="hidden md:flex flex-row gap-x-1 md:flex-col items-center justify-center pr-5 pt-0 m-0 text-teal-600 dark:text-emerald-600 md:mt-3 md:border-r border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs md:text-2xl md:-mb-1 ">21</span>
                                    <span className="text-xs md:text-sm">مرداد</span>
                                    <span className="text-xs md:text-sm">1402</span>
                                </div>
                                <div className="md:hidden flex justify-between items-center pt-[21px] ml-4 border-t border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-600 ml-12">21 مرداد 1402 </span>
                                    <div className="w-[69px] h-5 bg-orange-200/20 cursor-pointer flex justify-center items-center text-center text-orange-300 rounded-md gap-x-1">
                                        <span className="text-xs ">مطالعه</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row md:flex-col justify-center items-center md:p-0 p-2.5 w-[358px] h-[150px] md:w-[300px] md:h-[285px] bg-white dark:bg-zinc-700 rounded-2xl ">
                            <div className="w-[130px] h-[130px] md:w-[280px] md:h-[186px] rounded-t-2xl rounded-tl-2xl rounded-bl-4xl rounded-b-2xl md:rounded-2xl overflow-hidden">
                                <img className="w-full h-full object-cover object-center " src="/assets/images/blogs/blog-4.png" alt="blog4" />
                            </div>
                            <div className="flex md:flex-row flex-col justify-between items-center pr-2.5">
                                <span className="font-DanaLight max-w-[192px] md:max-w-[193px] pb-5 md:pb-0 text-sm md:text-lg text-zinc-700 dark:text-white leading-7">طرز تهیه قهوه دالگونا مناسب روز‌های کرونایی</span>
                                <div className="hidden md:flex flex-row gap-x-1 md:flex-col items-center justify-center pr-5 pt-0 m-0 text-teal-600 dark:text-emerald-600 md:mt-3 md:border-r border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs md:text-2xl md:-mb-1 ">21</span>
                                    <span className="text-xs md:text-sm">مرداد</span>
                                    <span className="text-xs md:text-sm">1402</span>
                                </div>
                                <div className="md:hidden flex justify-between items-center pt-[21px] ml-4 border-t border-gray-100 dark:border-white/10">
                                    <span className="font-DanaMedium text-xs text-teal-600 dark:text-emerald-600 ml-12">21 مرداد 1402 </span>
                                    <div className="w-[69px] h-5 bg-orange-200/20 cursor-pointer flex justify-center items-center text-center text-orange-300 rounded-md gap-x-1">
                                        <span className="text-xs ">مطالعه</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-3">
                                            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*Advertise*/}
                    <div className="md:mt-28 mt-7 md:gap-x-5 flex md:flex-row flex-col items-center justify-center">
                        <img className="w-[296px] h-[305px] mb-8" src="/assets/images/contact.png" alt="contact" />
                        <div className="flex flex-col justify-between ">
                            <div className="flex flex-col text-zinc-700 dark:text-white">
                                <h4 className="font-MorabaMedium text-2xl md:text-5xl">یکی از بهترین قهوه ها !</h4>
                                <span className="font-MorabaLight text-xl md:text-3xl md:pt-2.5">کیفیت قهوه را از ما بخواهید ...</span>
                                <div className="flex justify-start items-center gap-x-2.5 mt-5 md:mt-6">
                                    <div className="bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
                                    <div className="bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
                                    <div className="bg-zinc-700 dark:bg-gray-400 w-1 h-1 rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between ">
                                <span className="font-DanaLight leading-8 text-lg md:text-2xl md:max-w-[944px] max-w-[358px] text-zinc-700 dark:text-white py-5 md:py-6 text-justify">فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می سازد!</span>
                                <div className="flex items-center justify-center gap-x-2 w-[180px] h-[50px] md:w-[216px] md:h-[60px] border-2 rounded-[100px] border-orange-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6 md:size-8 text-orange-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <span className="text-orange-300 text-base md:text-xl tracking-tighter">ثبت سفارش تلفنی</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    ;
}

export default Home;