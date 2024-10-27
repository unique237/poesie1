import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

export const PlaceOrder = () => {

  const [method, setMethod] = useState ('cod');

  const { navigate } = useContext(ShopContext);

  {/** provinces **/}
  const provinces = [
    "Anvers",
    "Brabant Flamand",
    "Brabant Wallon",
    "Bruxelles-Capitale",
    "Frandre-Orientale",
    "Hainaut",
    "Liège",
    "Limbourg",
    "Luxembourg",
    "Namur",
  ];
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/** left side  */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'FORMULAIRE DE'} text2={'LIVRAISON'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Votre prénom' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Votre nom' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Adresse E-mail' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Ruelle' />
        <div className='flex gap-3'>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Ville' />
          <select id='province' name='province' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Province'>
            <option value="">Sélectionnez la Province</option>
            {provinces.map((province, index) => (
              <option key={index} value={province}>{province}</option>
            ))}
          </select>
          
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Code postal' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Numéro de Porte' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Numéro de Téléphone' />
      </div>

      {/** right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />

        </div>

        <div className='mt-12'>
          <Title text1={'METHODE DE'} text2={'PAIEMENT'}/>
          {/**Payment method geteways */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'paypal' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.paypal_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method == 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>COMMANDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder