import React from 'react'

const NewsLetterBox = () => {
    {/** to prevent the reload of the web page when we suubmit */}
    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Souscrivez maintenant & obtennez 10% de reduction</p>
        <p className='text-gray-400 mt-3'>
            -10% de reduction sur tout nos prosuits en souscrivant à notre notre messagerie ! 
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Entrez votre addresse mail.' required/>
            <button type='submit' className='bg-rose-400 text-white text-xs px-10 py-4'>SOUSCRIRE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox