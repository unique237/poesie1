import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.poesie} alt="" className='mb-5 w-32' />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Poésie Intime, vous offre des produits haut de gamme
                    pourt tout types de circonstences. Notre mission est 
                    de vous mettre dans le confort de l'intimité.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    BOUTIQUE
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Acceuil</li>
                    <li>A propos</li>
                    <li>Livraison</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>
                    RESTEZ INFORMER!
                </p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+33 666 777 444</li>
                    <li>www.poesieintime@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                &copy; Copyright 2024 @ poesie.vercel.app - All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer