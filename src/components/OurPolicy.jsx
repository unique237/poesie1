import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex felx-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className=' font-semibold'>Une Politique Souple d'Echange</p>
            <p className='text-gray-400'>Echangez vos produits sans frais en cas de désagrément</p>
        </div>

        <div>
            <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5'/>
            <p className=' font-semibold'>Une Politique de 7 Jours</p>
            <p className='text-gray-400'>Rembourssement sans frais allant jusqu'à 7 jours!</p>
        </div>

        <div>
            <img src={assets.support_img} alt="" className='w-12 m-auto mb-5'/>
            <p className=' font-semibold'>Meilleur Service Cleintelle</p>
            <p className='text-gray-400'>Un service client disponible 24H/24 et 7Jours/7!</p>
        </div>
    </div>
  )
}

export default OurPolicy