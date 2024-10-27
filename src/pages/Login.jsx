import React, { useState } from 'react'

export const Login = () => {

  const [currentState, setCurrentState] = useState('Connexion');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState === 'Connexion' ? '' :  <input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Votre Nom' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Votre E-mail' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Mot de Passe' required/>
      {currentState === 'Connexion' ? '' : <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirmer le Mot de Passe' required/>}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Oubliez votre mot de passe?</p>
        {
          currentState === "Connexion" ?
          <p onClick={()=>setCurrentState('Nouveau Compte')} className='cursor-pointer'>Crée un compte</p>
          :
          <p onClick={()=>setCurrentState('Connexion')} className='cursor-pointer'>Connexion</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Connexion' ? 'Connexion' : 'Nouveau Compte'}</button>
    </form>
  )
}

export default Login