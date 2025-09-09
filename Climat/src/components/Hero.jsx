import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>
            <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-20' src={assets.group_profile} alt="" />
                <p className='text-xs font-medium'>Plus de 10 000 personnes nous font confiance</p>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-[64px] font-medium xl:leading-[75px] max-w-5xl'>
            Experts en&nbsp;
            <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>
                vente, installation et maintenance
            </span> de climatisation
            </h1>


            <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>Concevoir des espaces de vie et de travail plus sains, plus frais et plus agréables grâce à la climatisation.</p>

            <div className='relative'>
                <img src={assets.hero_img} alt="" className='w-full max-w-6xl  rounded-xl '/>
            </div>

        </div>
    )
}
export default Hero