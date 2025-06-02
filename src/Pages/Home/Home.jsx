import React from 'react';
import Header from "../../Components/Header/Header";
import ProductBox from "../../Components/ProductBox/ProductBox";
import Footer from "../../Components/Footer/Footer";

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
                <div className="flex flex-wrap items-center justify-center gap-x-[29px] md:gap-[65px]  gap-y-6 pt-10 md:py-16 ">
                    <div className="w-[100px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                        <img src="/assets/images/categories/category1.png" alt="category1"/>
                        <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">قهوه دمی و اسپرسو</span>
                    </div>
                    <div className="w-[100px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                        <img src="/assets/images/categories/category2.png" alt="category2"/>
                        <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">لوازم جانبی و تجهیزات</span>
                    </div>
                    <div className="w-[100px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                        <img src="/assets/images/categories/category3.png" alt="category3"/>
                        <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">اسپرسو ساز</span>
                    </div>
                    <div className="w-[100px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
                        <img src="/assets/images/categories/category4.png" alt="category4"/>
                        <span className="text-sm md:text-xl text-center text-zinc-800 dark:text-white">پک تستر قهوه</span>
                    </div>
                    <div className="w-[100px] md:w-auto flex flex-col items-center justify-center gap-y-2.5">
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
                {/*Features Section*/}
                <div className="services flex flex-wrap gap-y-11 mt-16 md:flex justify-between items-center md:mt-28 child:w-1/2 lg:child:w-auto">
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 items-center">
                        <svg width="66" height="73" viewBox="0 0 66 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_862_573)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.2975 53.8429C57.7465 53.8429 60.0952 52.8716 61.8269 51.1427C63.5585 49.4139 64.5314 47.069 64.5314 44.6241C64.5314 42.1791 63.5585 39.8343 61.8269 38.1054C60.0952 36.3765 57.7465 35.4053 55.2975 35.4053V53.8429Z" fill="#FDBA74"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M56.7643 52.2348V37.0095C58.5368 37.3503 60.1351 38.2968 61.2845 39.6863C62.4339 41.0759 63.0626 42.8218 63.0626 44.624C63.0626 46.4261 62.4339 48.172 61.2845 49.5616C60.1351 50.9512 58.5368 51.8977 56.7643 52.2385V52.2348ZM57.5032 8.47917C54.8257 5.79116 51.6424 3.65805 48.1364 2.20247C44.6304 0.74689 40.8708 -0.00244141 37.0737 -0.00244141C33.2766 -0.00244141 29.517 0.74689 26.0109 2.20247C22.5049 3.65805 19.3217 5.79116 16.6442 8.47917C14.5925 10.523 12.8568 12.8603 11.4941 15.4142C10.6315 17.7652 13.414 18.3393 14.0891 16.7768C16.797 11.649 21.1468 7.57426 26.4449 5.20256C31.7429 2.83086 37.6839 2.29884 43.3201 3.69139C48.9564 5.08393 53.9631 8.3208 57.5418 12.8857C61.1204 17.4505 63.0647 23.0804 63.0646 28.8772V37.282C62.0669 36.2255 60.8634 35.3839 59.5281 34.8087C58.1927 34.2335 56.7537 33.9369 55.2993 33.9371C54.9098 33.9371 54.5363 34.0916 54.2609 34.3666C53.9855 34.6416 53.8307 35.0145 53.8307 35.4034V53.8428C53.8307 54.0353 53.8687 54.226 53.9425 54.4039C54.0163 54.5817 54.1245 54.7434 54.2609 54.8795C54.3972 55.0157 54.5591 55.1237 54.7373 55.1974C54.9155 55.2711 55.1065 55.309 55.2993 55.309C58.1082 55.3051 60.8031 54.2 62.8038 52.2318C64.8045 50.2635 65.951 47.5896 65.9963 44.7857C65.9963 44.7675 65.9963 39.4647 65.9963 28.8772C66.0019 25.0858 65.2542 21.331 63.7967 17.83C62.3392 14.3291 60.2007 11.1514 57.505 8.48099L57.5032 8.47917Z" className="fill-zinc-700 dark:fill-white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M63.3157 53.6885C62.9882 53.6884 62.6707 53.8017 62.4174 54.009C62.1641 54.2164 61.9907 54.5051 61.9267 54.8258C61.8627 55.1465 61.9121 55.4795 62.0664 55.768C62.2207 56.0564 62.4705 56.2825 62.7731 56.4078C63.0757 56.533 63.4124 56.5496 63.7259 56.4548C64.0394 56.3599 64.3102 56.1595 64.4923 55.8876C64.6743 55.6158 64.7563 55.2893 64.7243 54.9638C64.6923 54.6383 64.5482 54.334 64.3166 54.1027C64.0503 53.8389 63.6909 53.6902 63.3157 53.6885Z" className="fill-zinc-700 dark:fill-white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1183 67.7146L44.202 67.2731L44.6442 69.3534L42.5605 69.7949L42.1183 67.7146ZM62.5205 58.3014C62.1826 58.109 61.782 58.0584 61.4067 58.1606C61.0314 58.2627 60.712 58.5094 60.5187 58.8464C59.1194 61.2737 57.2478 63.3968 55.0141 65.0908C52.7804 66.7848 50.2297 68.0155 47.5123 68.7102L46.7735 65.2382C46.7334 65.0498 46.6566 64.8711 46.5475 64.7124C46.4383 64.5537 46.2988 64.4179 46.1371 64.313C45.9754 64.208 45.7945 64.1359 45.6049 64.1008C45.4153 64.0656 45.2205 64.0681 45.0319 64.1081L40.0764 65.1601C39.6957 65.2411 39.3628 65.4699 39.1509 65.7959C38.939 66.1219 38.8654 66.5186 38.9463 66.8988L40 71.8461C40.04 72.0345 40.1168 72.2132 40.226 72.3719C40.3352 72.5307 40.4746 72.6664 40.6363 72.7713C40.7981 72.8763 40.9789 72.9484 41.1686 72.9835C41.3582 73.0187 41.5529 73.0162 41.7416 72.9762L46.697 71.9243C50.1009 71.2776 53.3249 69.9056 56.1493 67.9017C58.9736 65.8978 61.3317 63.3093 63.0628 60.3127C63.1604 60.1453 63.2237 59.9602 63.2493 59.7683C63.2748 59.5763 63.262 59.3812 63.2115 59.1942C63.1611 59.0072 63.0741 58.832 62.9555 58.6787C62.8369 58.5255 62.689 58.3973 62.5205 58.3014Z" className="fill-zinc-700 dark:fill-white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.98453 55.7978C3.66255 55.7978 2.39472 55.2735 1.45994 54.3402C0.525155 53.407 0 52.1412 0 50.8214V24.7293C0 24.0758 0.128929 23.4287 0.379425 22.8249C0.629921 22.2212 0.997079 21.6726 1.45994 21.2105C1.92279 20.7484 2.47228 20.3818 3.07703 20.1317C3.68179 19.8816 4.32995 19.7529 4.98453 19.7529H40.8881C41.5427 19.7529 42.1908 19.8816 42.7956 20.1317C43.4003 20.3818 43.9498 20.7484 44.4127 21.2105C44.8755 21.6726 45.2427 22.2212 45.4932 22.8249C45.7437 23.4287 45.8726 24.0758 45.8726 24.7293V57.5275C45.8749 58.1836 45.673 58.8243 45.2948 59.3609C44.9166 59.8975 44.3808 60.3036 43.7614 60.5231C43.142 60.7425 42.4696 60.7644 41.8372 60.5858C41.2048 60.4072 40.6436 60.0369 40.2311 59.526L37.2029 55.8014L4.98453 55.7978ZM4.98453 22.4655C4.68654 22.465 4.39138 22.5233 4.11595 22.6368C3.84052 22.7504 3.59024 22.9171 3.37945 23.1274C3.16865 23.3377 3.00147 23.5874 2.88749 23.8623C2.7735 24.1372 2.71496 24.4318 2.7152 24.7293V50.8232C2.7152 51.4231 2.9539 51.9985 3.3788 52.4227C3.8037 52.8469 4.37999 53.0852 4.98089 53.0852H38.5041L42.3476 57.8091C42.4067 57.8814 42.4867 57.9338 42.5767 57.9589C42.6668 57.9841 42.7624 57.9808 42.8505 57.9495C42.9386 57.9183 43.0149 57.8606 43.0688 57.7844C43.1228 57.7082 43.1518 57.6172 43.152 57.5238V24.7293C43.152 24.1294 42.9133 23.5541 42.4884 23.1299C42.0635 22.7057 41.4872 22.4673 40.8863 22.4673L4.98453 22.4655Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2867 36.3644H40.4259V38.7373L35.6342 50.5651H32.6806L37.3321 39.0425H31.2867V36.3644ZM27.6852 36.1119V38.7082H26.1693V41.1228H23.3558V38.7082H16.6643V36.1101L21.5378 26.6369H24.5296L19.6761 36.1101H23.3558V32.7434H26.1656V36.1119H27.6852ZM5.69066 41.121V39.0316L10.5223 34.0407C11.3909 33.3231 11.9664 32.313 12.1402 31.2009C12.1552 30.9554 12.118 30.7094 12.031 30.4793C11.9439 30.2491 11.8091 30.04 11.6353 29.8656C11.4615 29.6912 11.2527 29.5556 11.0226 29.4675C10.7925 29.3795 10.5463 29.3412 10.3003 29.355C9.78397 29.3623 9.28187 29.5251 8.85975 29.822C8.43763 30.119 8.11514 30.5362 7.93451 31.0192L5.58875 29.6402C5.98057 28.7331 6.63421 27.9632 7.46625 27.4286C8.2983 26.894 9.27101 26.619 10.2603 26.6387C10.8652 26.6062 11.4703 26.6978 12.0384 26.9079C12.6064 27.118 13.1253 27.4422 13.5629 27.8604C14.0006 28.2785 14.3477 28.7819 14.5828 29.3392C14.8179 29.8966 14.9361 30.4962 14.93 31.101C14.8624 31.974 14.6221 32.825 14.2229 33.6047C13.8236 34.3843 13.2735 35.0772 12.6042 35.6431L9.83442 38.4266H15.152V41.1246L5.69066 41.121Z" className="fill-zinc-700 dark:fill-white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3803 27.1387L21.7579 50.5654H22.9809L35.5978 27.1405L34.3803 27.1387Z" fill="#EDB56A"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_862_573">
                                    <rect width="66" height="73" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col text-zinc-700 dark:text-white tracking-normal text-center md:text-start">
                            <h4 className="font-DanaBold md:leading-6 text-sm md:text-xl">پشتیبانی شبانه روزی</h4>
                            <span className="font-DanaLight text-xs md:text-sm mt-3 md:mt-3.5 text-nowrap">7 روز هفته ، 24 ساعته</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 items-center">
                        <svg width="109" height="73" viewBox="0 0 109 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_862_604)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.5095 8.66211L92.4431 18.9995V35.1861L81.547 38.7482V23.3623L47.2621 12.3864L59.5095 8.66211Z" fill="#FDBA74"/>
                                <path d="M61.0774 8.62312L94.2237 19.2602C94.5708 19.3717 94.8738 19.5906 95.0894 19.8857C95.3049 20.1807 95.422 20.5367 95.4237 20.9027V34.948C95.4254 35.3079 95.3155 35.6594 95.1093 35.9537C94.903 36.2481 94.6106 36.4706 94.2727 36.5904L91.0325 37.7402C90.6049 37.8785 90.1404 37.8439 89.7378 37.6437C89.3352 37.4435 89.0262 37.0934 88.8766 36.668C88.727 36.2425 88.7485 35.7753 88.9365 35.3655C89.1246 34.9557 89.4643 34.6358 89.8836 34.4737L91.9729 33.7325V22.1736L55.0631 10.3292C54.7194 10.2171 54.4194 9.99934 54.2055 9.70676C53.9916 9.41418 53.8746 9.06153 53.871 8.69858C53.8674 8.33562 53.9774 7.98069 54.1854 7.68388C54.3934 7.38706 54.689 7.16334 55.0304 7.04429L67.1735 2.86828C67.5221 2.74879 67.8997 2.74447 68.2509 2.85596L106.888 15.1006C107.236 15.211 107.541 15.4295 107.757 15.7246C107.974 16.0198 108.092 16.3764 108.094 16.7431V58.9918C108.092 59.3583 107.975 59.7147 107.758 60.0098C107.542 60.3049 107.238 60.5236 106.89 60.6343L68.2509 72.9241C67.9104 73.033 67.5447 73.033 67.2042 72.9241L29.0494 60.6425C28.7027 60.5307 28.4001 60.3116 28.1849 60.0166C27.9698 59.7216 27.853 59.3657 27.8515 59V53.2739C27.8435 53.0415 27.8822 52.8098 27.9653 52.5927C28.0484 52.3756 28.1741 52.1775 28.335 52.0103C28.4959 51.843 28.6887 51.71 28.9019 51.6191C29.1151 51.5283 29.3443 51.4815 29.5759 51.4815C29.8074 51.4815 30.0366 51.5283 30.2498 51.6191C30.463 51.71 30.6558 51.843 30.8167 52.0103C30.9776 52.1775 31.1033 52.3756 31.1864 52.5927C31.2695 52.8098 31.3082 53.0415 31.3002 53.2739V57.7312L67.7337 69.4524L104.643 57.7312V18.0181L67.7541 6.32775L61.0774 8.62312Z" className="fill-zinc-700 dark:fill-white"/>
                                <path d="M105.848 15.3264C106.28 15.1994 106.746 15.2476 107.144 15.4608C107.542 15.6739 107.841 16.0351 107.977 16.467C108.113 16.8989 108.075 17.3671 107.871 17.7713C107.668 18.1756 107.315 18.4838 106.888 18.6299L68.2509 30.9053C67.9117 31.0135 67.5475 31.0135 67.2083 30.9053L37.7234 21.4857C37.5013 21.4221 37.2942 21.3144 37.1143 21.169C36.9344 21.0235 36.7855 20.8433 36.6763 20.6389C36.567 20.4346 36.4997 20.2103 36.4784 19.9794C36.4571 19.7484 36.4821 19.5155 36.5521 19.2945C36.622 19.0735 36.7354 18.8688 36.8856 18.6926C37.0357 18.5164 37.2196 18.3722 37.4262 18.2687C37.6329 18.1652 37.8581 18.1044 38.0886 18.0899C38.3191 18.0754 38.5501 18.1075 38.768 18.1843L67.7316 27.4356L105.848 15.3264Z" className="fill-zinc-700 dark:fill-white"/>
                                <path d="M84.9466 36.0071C85.372 35.8927 85.8248 35.946 86.2123 36.1561C86.5998 36.3662 86.8927 36.7171 87.0309 37.137C87.1692 37.5569 87.1423 38.014 86.9558 38.4146C86.7694 38.8153 86.4375 39.1292 86.0281 39.292L81.7739 40.7025C81.515 40.7881 81.2396 40.8109 80.9702 40.7691C80.7008 40.7272 80.4452 40.6218 80.2242 40.4615C80.0032 40.3013 79.8231 40.0907 79.6988 39.8471C79.5744 39.6035 79.5093 39.3338 79.5088 39.06V26.2815L42.599 14.4372C42.2558 14.3235 41.9569 14.1044 41.7443 13.8109C41.5317 13.5174 41.4162 13.1643 41.4142 12.8014C41.4122 12.4384 41.5237 12.084 41.733 11.7881C41.9422 11.4922 42.2387 11.2698 42.5806 11.1523L57.0706 6.33363C57.4965 6.21736 57.9506 6.26942 58.3394 6.4791C58.7282 6.68878 59.0223 7.04013 59.161 7.46089C59.2998 7.88165 59.2728 8.33982 59.0855 8.74116C58.8982 9.14251 58.5649 9.45651 58.1541 9.61858L48.6992 12.768L81.7596 23.3764C82.1067 23.4878 82.4097 23.7068 82.6253 24.0018C82.8409 24.2969 82.9579 24.6529 82.9596 25.0189V36.6661L84.9466 36.0071Z" className="fill-zinc-700 dark:fill-white"/>
                                <path d="M31.2921 18.3114V26.6593C31.2767 27.1083 31.0882 27.5337 30.7665 27.8459C30.4448 28.158 30.015 28.3325 29.5677 28.3325C29.1204 28.3325 28.6905 28.158 28.3688 27.8459C28.0471 27.5337 27.8587 27.1083 27.8433 26.6593V17.0488C27.8434 16.68 27.9606 16.3209 28.1779 16.0237C28.3952 15.7264 28.7012 15.5066 29.0515 15.396L42.7483 11.0845C43.1817 10.9575 43.6473 11.0061 44.0454 11.22C44.4435 11.4339 44.7423 11.7959 44.8776 12.2284C45.013 12.6609 44.9741 13.1295 44.7694 13.5336C44.5647 13.9377 44.2105 14.2452 43.7827 14.39L31.2921 18.3114Z" className="fill-zinc-700 dark:fill-white"/>
                                <path d="M45.8577 30.4888C46.3153 30.4888 46.7541 30.6713 47.0777 30.9963C47.4013 31.3213 47.583 31.762 47.583 32.2216C47.583 32.6812 47.4013 33.1219 47.0777 33.4469C46.7541 33.7718 46.3153 33.9544 45.8577 33.9544H14.8436C14.6122 33.9624 14.3815 33.9235 14.1653 33.8401C13.9492 33.7567 13.7519 33.6304 13.5854 33.4688C13.4189 33.3072 13.2864 33.1136 13.1959 32.8995C13.1055 32.6854 13.0589 32.4552 13.0589 32.2226C13.0589 31.99 13.1055 31.7598 13.1959 31.5457C13.2864 31.3316 13.4189 31.138 13.5854 30.9764C13.7519 30.8148 13.9492 30.6885 14.1653 30.6051C14.3815 30.5217 14.6122 30.4828 14.8436 30.4908L45.8577 30.4888Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M28.6099 38.1119C29.0569 38.1273 29.4805 38.3166 29.7914 38.6396C30.1022 38.9627 30.2759 39.3944 30.2759 39.8437C30.2759 40.2929 30.1022 40.7246 29.7914 41.0477C29.4805 41.3708 29.0569 41.56 28.6099 41.5754H1.72535C1.49391 41.5835 1.26323 41.5446 1.04706 41.4612C0.830893 41.3777 0.63366 41.2515 0.467114 41.0898C0.300569 40.9282 0.16812 40.7346 0.0776606 40.5205C-0.0127989 40.3064 -0.0594177 40.0762 -0.0594177 39.8437C-0.0594177 39.6111 -0.0127989 39.3809 0.0776606 39.1668C0.16812 38.9527 0.300569 38.7591 0.467114 38.5975C0.63366 38.4359 0.830893 38.3096 1.04706 38.2262C1.26323 38.1427 1.49391 38.1039 1.72535 38.1119H28.6099Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M9.66133 33.9544C10.6142 33.9544 11.3867 33.1786 11.3867 32.2216C11.3867 31.2646 10.6142 30.4888 9.66133 30.4888C8.70843 30.4888 7.93594 31.2646 7.93594 32.2216C7.93594 33.1786 8.70843 33.9544 9.66133 33.9544Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M14.49 49.1985C15.4429 49.1985 16.2154 48.4227 16.2154 47.4657C16.2154 46.5087 15.4429 45.7329 14.49 45.7329C13.5371 45.7329 12.7646 46.5087 12.7646 47.4657C12.7646 48.4227 13.5371 49.1985 14.49 49.1985Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M36.8893 45.733C37.3364 45.7484 37.76 45.9376 38.0708 46.2607C38.3816 46.5838 38.5553 47.0155 38.5553 47.4648C38.5553 47.914 38.3816 48.3457 38.0708 48.6688C37.76 48.9919 37.3364 49.1811 36.8893 49.1965H19.6641C19.4326 49.2045 19.202 49.1657 18.9858 49.0822C18.7696 48.9988 18.5724 48.8725 18.4058 48.7109C18.2393 48.5493 18.1068 48.3557 18.0164 48.1416C17.9259 47.9275 17.8793 47.6973 17.8793 47.4648C17.8793 47.2322 17.9259 47.002 18.0164 46.7879C18.1068 46.5738 18.2393 46.3802 18.4058 46.2186C18.5724 46.057 18.7696 45.9307 18.9858 45.8473C19.202 45.7638 19.4326 45.725 19.6641 45.733H36.8893Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M54.1391 0C54.5967 0 55.0356 0.182564 55.3591 0.50753C55.6827 0.832496 55.8645 1.27324 55.8645 1.73282C55.8645 2.19239 55.6827 2.63314 55.3591 2.9581C55.0356 3.28307 54.5967 3.46563 54.1391 3.46563H27.2546C26.797 3.46563 26.3581 3.28307 26.0345 2.9581C25.711 2.63314 25.5292 2.19239 25.5292 1.73282C25.5292 1.27324 25.711 0.832496 26.0345 0.50753C26.3581 0.182564 26.797 0 27.2546 0H54.1391Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M27.23 8.31494C27.6876 8.31494 28.1265 8.49751 28.4501 8.82247C28.7736 9.14744 28.9554 9.58819 28.9554 10.0478C28.9554 10.5073 28.7736 10.9481 28.4501 11.273C28.1265 11.598 27.6876 11.7806 27.23 11.7806H14.1465C13.9151 11.7886 13.6844 11.7497 13.4682 11.6663C13.2521 11.5829 13.0548 11.4566 12.8883 11.295C12.7217 11.1334 12.5893 10.9398 12.4988 10.7257C12.4084 10.5116 12.3618 10.2814 12.3618 10.0488C12.3618 9.81621 12.4084 9.58601 12.4988 9.37191C12.5893 9.15781 12.7217 8.96419 12.8883 8.80259C13.0548 8.64099 13.2521 8.51471 13.4682 8.43129C13.6844 8.34786 13.9151 8.30899 14.1465 8.31699L27.23 8.31494Z" className="fill-teal-600 dark:fill-emerald-500"/>
                                <path d="M69.686 71.1109C69.6706 71.5599 69.4822 71.9853 69.1605 72.2975C68.8388 72.6096 68.4089 72.7841 67.9616 72.7841C67.5143 72.7841 67.0845 72.6096 66.7628 72.2975C66.4411 71.9853 66.2526 71.5599 66.2372 71.1109V62.5434C66.2372 62.0838 66.419 61.643 66.7426 61.3181C67.0662 60.9931 67.505 60.8105 67.9626 60.8105C68.4202 60.8105 68.8591 60.9931 69.1827 61.3181C69.5062 61.643 69.688 62.0838 69.688 62.5434L69.686 71.1109Z" className="fill-zinc-700 dark:fill-white"/>
                                <path d="M69.6859 55.5814C69.6939 55.8138 69.6552 56.0455 69.5721 56.2626C69.4891 56.4797 69.3633 56.6778 69.2024 56.845C69.0415 57.0123 68.8487 57.1453 68.6356 57.2361C68.4224 57.327 68.1932 57.3738 67.9616 57.3738C67.73 57.3738 67.5008 57.327 67.2876 57.2361C67.0744 57.1453 66.8817 57.0123 66.7207 56.845C66.5598 56.6778 66.4341 56.4797 66.351 56.2626C66.268 56.0455 66.2293 55.8138 66.2372 55.5814V30.8354C66.2372 30.3758 66.419 29.935 66.7426 29.6101C67.0662 29.2851 67.505 29.1025 67.9626 29.1025C68.4202 29.1025 68.8591 29.2851 69.1826 29.6101C69.5062 29.935 69.688 30.3758 69.688 30.8354L69.6859 55.5814Z" className="fill-zinc-700 dark:fill-white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_862_604">
                                    <rect width="108.092" height="73" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="flex flex-col text-zinc-700 dark:text-white tracking-normal text-center md:text-start">
                            <h4 className="font-DanaBold md:leading-6 text-sm md:text-xl">امکان تحویل اکسپرس</h4>
                            <span className="font-DanaLight text-xs mt-3 md:text-sm md:mt-3.5 text-nowrap">ارسال بسته با سرعت باد</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 items-center">
                        <svg width="52" height="73" viewBox="0 0 52 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.05 8.5V1.5H21.55V8.5L17.05 18L16.55 30H24.55V18L29.05 8.5Z" className="fill-teal-600 dark:fill-emerald-500"/>
                            <path d="M50.2009 16.1646L46.2333 8.22953V1.21667C46.2333 0.544762 45.6886 0 45.0167 0H6.08333C5.41143 0 4.86667 0.544762 4.86667 1.21667V8.22953L0.899117 16.1646C0.308882 17.3478 0.00121667 18.6518 0 19.974V71.7833C0 72.4552 0.544763 73 1.21667 73H49.8833C50.5552 73 51.1 72.4552 51.1 71.7833V19.974C51.0988 18.6518 50.7911 17.3478 50.2009 16.1646ZM30.4167 2.43333H43.8V7.3H30.4167V2.43333ZM23.0108 9.0155C23.0181 9.0009 23.0279 8.96197 23.0388 8.9352C23.0821 8.8181 23.1071 8.69491 23.113 8.5702C23.113 8.55317 23.1228 8.53978 23.1228 8.52275V2.43333H27.9894L27.9833 8.22953L24.0158 16.1646C23.4256 17.3478 23.1179 18.6518 23.1167 19.974V29.2H18.25V19.974C18.2515 19.0294 18.4713 18.0979 18.8924 17.2523L22.995 9.06052C23.0023 9.04592 23.0035 9.0301 23.0108 9.0155ZM7.3 2.43333H20.6833V7.3H7.3V2.43333ZM38.9333 19.974V70.5667H2.43333V19.974C2.43485 19.0294 2.65461 18.0979 3.07573 17.2523L6.83523 9.73333H19.9314L16.7158 16.1646C16.1256 17.3478 15.8179 18.6518 15.8167 19.974V30.4167C15.8167 31.0886 16.3614 31.6333 17.0333 31.6333H24.3333C25.0052 31.6333 25.55 31.0886 25.55 30.4167V19.974C25.5515 19.0294 25.7713 18.0979 26.1924 17.2523L29.9519 9.73333H43.0481L39.8325 16.1646C39.2422 17.3478 38.9346 18.6518 38.9333 19.974ZM48.6667 70.5667H41.3667V19.974C41.3682 19.0294 41.588 18.0979 42.0091 17.2523L45.0167 11.2371L48.0243 17.2523C48.4454 18.0979 48.6652 19.0294 48.6667 19.974V70.5667Z" className="fill-zinc-700 dark:fill-white"/>
                            <path d="M30.05 47.5L29.55 43.5L27.55 40.5H23.05L16.05 43.5L11.55 50L12.05 57L16.55 59L21.55 58L27.55 53L30.05 47.5Z" fill="#FDBA74"/>
                            <path d="M22.265 39.5659C19.3649 40.227 16.7206 41.7195 14.6559 43.8607C12.5173 45.9246 11.0266 48.5671 10.366 51.4649C9.70029 53.9429 10.3468 56.5895 12.0802 58.4814C13.4184 59.7706 15.2211 60.464 17.0783 60.4037C17.7578 60.4031 18.4357 60.3352 19.1016 60.2006C22.0017 59.5395 24.646 58.0469 26.7107 55.9057C28.8493 53.8418 30.34 51.1994 31.0006 48.3016C31.6663 45.8235 31.0198 43.177 29.2863 41.285C27.3949 39.547 24.7454 38.8982 22.265 39.5659ZM12.7506 51.9516C13.3185 49.5228 14.5799 47.3113 16.3812 45.586C18.1072 43.7821 20.3206 42.519 22.7516 41.9506C23.2555 41.8481 23.768 41.7951 24.2822 41.7924C25.2621 41.7658 26.2263 42.0415 27.044 42.582C26.5093 42.9966 25.9283 43.3476 25.3127 43.6283C22.816 44.8347 20.8007 46.8499 19.5944 49.3467C19.1389 50.3617 18.4896 51.2778 17.683 52.044C16.916 52.8507 15.9996 53.5002 14.9844 53.9566C14.2344 54.3043 13.5247 54.7335 12.8686 55.2366C12.5418 54.1709 12.5011 53.0379 12.7506 51.9516ZM28.616 47.8149C28.0481 50.2437 26.7867 52.4551 24.9854 54.1805C23.2594 55.9844 21.046 57.2474 18.615 57.8159C17.1562 58.1979 15.6048 57.9724 14.3153 57.1905C14.8524 56.7728 15.4363 56.4187 16.0551 56.1357C17.308 55.5608 18.4417 54.7555 19.3973 53.762C20.394 52.8075 21.2017 51.6736 21.7783 50.4198C22.7468 48.4048 24.3721 46.7795 26.387 45.811C27.1356 45.4629 27.8435 45.0333 28.4979 44.5299C28.8248 45.5955 28.8655 46.7286 28.616 47.8149Z" className="fill-zinc-700 dark:fill-white"/>
                        </svg>
                        <div className="flex flex-col text-zinc-700 dark:text-white tracking-normal text-center md:text-start">
                            <h4 className="font-DanaBold md:leading-6 text-sm md:text-xl">رست تخصصی</h4>
                            <span className="font-DanaLight text-xs mt-3 md:text-sm md:mt-3.5 text-nowrap"> تازه برشته شده و با کیفیت</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-4 items-center">
                        <svg width="76" height="73" viewBox="0 0 76 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9999 35.5L10.4999 33V64.5L11.4999 68L16.4999 72H52.0002L55.0002 70.5L58.0002 67V34.5L45.0002 31.5L35.0002 33L20.0002 35.5H18.9999Z" fill="#FDBA74"/>
                            <path d="M11.4999 10V3.5L13.9999 1H51.0002L56.0002 2V10H11.4999Z" className="fill-teal-600 dark:fill-emerald-500"/>
                            <path d="M69.0001 8.57485H57.8V4.37483C57.8 2.0547 55.9201 0.174805 53.5999 0.174805H14.8003C12.4808 0.174805 10.6002 2.0547 10.6002 4.37483V8.57485H2.20018C1.70662 8.57485 1.24929 8.83531 0.997046 9.25982C0.744798 9.68433 0.735228 10.21 0.971069 10.6441L7.32716 22.3254C8.55422 24.5854 9.19817 27.1154 9.20022 29.6864V65.9752C9.20501 69.8389 12.3366 72.9705 16.2003 72.9752H52.1999C56.0643 72.9705 59.1952 69.8389 59.2 65.9752V16.9749H66.2001C66.9732 16.9749 67.6001 17.6018 67.6001 18.3749V43.5751C67.6001 45.8945 69.4807 47.7751 71.8002 47.7751C74.1203 47.7751 76.0002 45.8945 76.0002 43.5751V15.5749C75.9954 11.7105 72.8645 8.57896 69.0001 8.57485ZM13.4002 4.37483C13.4002 3.60168 14.0271 2.97482 14.8003 2.97482L53.5999 2.97482C54.3731 2.97482 55 3.60168 55 4.37483V8.57485H13.4002V4.37483ZM4.55654 11.3749H56.4V32.0147C49.5189 30.4473 50 30.5 44.2373 31.3947L32.3913 33.3614C25.6161 34.4921 18.6824 34.2549 12.0002 32.6635V29.6864C11.9982 26.6478 11.2367 23.6571 9.78538 20.9869L4.55654 11.3749ZM52.1999 70.1752H16.2003C13.8808 70.1752 12.0002 68.2946 12.0002 65.9752V35.525C15.8967 36.4103 19.8794 36.8621 23.875 36.8717C26.8828 36.8703 29.8852 36.6215 32.852 36.1266L44.696 34.1585C50 33.3614 49.6829 33.2678 56.4 34.8811V65.9752C56.4 68.2946 54.5201 70.1752 52.1999 70.1752ZM73.2002 43.5751C73.2002 44.3482 72.5733 44.9751 71.8002 44.9751C71.027 44.9751 70.4001 44.3482 70.4001 43.5751V18.3749C70.4001 16.0548 68.5202 14.1749 66.2001 14.1749H59.2V11.3749H69.0001C71.3203 11.3749 73.2002 13.2548 73.2002 15.5749V43.5751Z" className="fill-zinc-700 dark:fill-white"/>
                            <path d="M52.1999 56.1748C51.4268 56.1748 50.7999 56.8017 50.7999 57.5748V63.1748C50.7999 63.948 50.173 64.5749 49.3999 64.5749H43.7998C43.0267 64.5749 42.3998 65.2017 42.3998 65.9749C42.3998 66.748 43.0267 67.3749 43.7998 67.3749H49.3999C51.72 67.3749 53.5999 65.4943 53.5999 63.1748V57.5748C53.5999 56.8017 52.973 56.1748 52.1999 56.1748Z" className="fill-zinc-700 dark:fill-white"/>
                        </svg>
                        <div className="flex flex-col text-zinc-700 dark:text-white tracking-normal text-center md:text-start">
                            <h4 className="font-DanaBold md:leading-6 text-sm md:text-xl">اکسسوری قهوه</h4>
                            <span className="font-DanaLight text-xs mt-3 md:text-sm md:mt-3.5 text-nowrap">وسایل و ادوات دم آوری</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
        ;
}

export default Home;