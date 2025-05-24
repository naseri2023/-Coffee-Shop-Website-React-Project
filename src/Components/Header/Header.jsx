import React from 'react';

function Header(props) {
    return (
        <main>
            <section className="relative h-[200px] xs:h-auto xs:aspect-[2/1] bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]" >
                <div className="relative overflow-y-hidden container h-full flex justify-end items-center md:min-h-screen">
                    <div className="text-white">
                        <h2 className="font-MorabaBold text-2xl md:text-5xl mb-0.5 md:mb-2 ">
                            قهوه عربیکا تانزانیا
                        </h2>
                        <span className="font-MorabaLight text-xl md:text-4xl">
                            یک فنجان بالانس!
                        </span>
                        <span className="block w-[100px] my-3 h-px md:h-0.5 md:my-8 bg-orange-300"></span>
                        <p className="font-DanaMedium md:text-xl max-w-[201px] md:max-w-[400px] text-xs">
                            فقط نام آشنای عربیکا را شنیده اید. عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.
                        </p>
                    </div>
                    {/*Circle*/}
                    <div className=" absolute bottom-0 right-0 left-0 mx-auto hidden md:flex items-center justify-center translate-y-2/4">
                        <div className="flex items-center justify-center w-[203px] h-[203px] border border-white/25 rounded-full">
                            <div className="flex items-center justify-center w-[145px] h-[145px] border border-white/50 rounded-full">
                                <div className="flex items-center justify-center w-[95px] h-[95px] border border-white/80 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Curve Icon*/}
                <svg className="w-[100px] h-[21px] absolute bottom-0 right-0 left-0 mx-auto hidden md:inline-block text-gray-100 dark:text-zinc-800" width="100" height="22" viewBox="0 0 100 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z"/>
                </svg>
                {/*Arrow Circle*/}
                <div className="absolute bottom-0 right-0 left-0  translate-y-4 mx-auto  hidden md:flex justify-center items-center w-[30px] h-[30px] rounded-full border-orange-300 border-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-zinc-700 dark:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </section>
        </main>
    );
}

export default Header;