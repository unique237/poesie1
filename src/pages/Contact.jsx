import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

export const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACTEZ'} text2={'NOUS'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Notre Boutique</p>
          <p className='text-gray-500'>5221 Martin Street <br /> Brussels, Brussels, Belgium</p>
          <p className='text-gray-500'>Tél : +237 123 321 456 <br /> contact@poesieintime.com </p>
          <p className='font-semibold text-xl text-gray-600'>Opportunités de partenariats</p>
          <p className='text-gray-500'>Apprendre plus  sur nos Opportunités de carrière et stages</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorer nos Opportunités</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact