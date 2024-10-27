import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

export const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'A'} text2={'PROPOS'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.hero_collection1} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Poésie Intime est une marque qui vous offrent bla bla bla bla bla bla bla bla (A faire) j'aurais besoin d'une description</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, veritatis deserunt ea labore beatae nesciunt illum ex necessitatibus dolor totam a consequatur pariatur unde fugit eos, asperiores deleniti minima commodi.</p>
          <b className='text-gray-800'>Nos Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia illum autem vitae consequatur, itaque, inventore magnam facere illo, ullam similique ratione dolore minima provident impedit numquam? Similique eius voluptas illo.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'POURQUOI'} text2={'NOUS CHOISIR'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Assurence Qualité : </b>
          <p className='text-gray-600'>(pour combler l'espace )bla bla bla bla bla Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laborum ad commodi necessitatibus fugiat quidem qui sit omnis nostrum facilis corporis, reprehenderit, enim sapiente vitae placeat nemo optio explicabo iusto?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Produits à la Mode :</b>
          <p className='text-gray-600'>bla bla bla bla bla Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laborum ad commodi necessitatibus fugiat quidem qui sit omnis nostrum facilis corporis, reprehenderit, enim sapiente vitae placeat nemo optio explicabo iusto?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Service Cleint H24: </b>
          <p className='text-gray-600'>bla bla bla bla bla Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet laborum ad commodi necessitatibus fugiat quidem qui sit omnis nostrum facilis corporis, reprehenderit, enim sapiente vitae placeat nemo optio explicabo iusto?</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About