import React from 'react'

const NavHeader = () => {
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <span className='text-[24px] font-bold text-text-color-primary'>Zingen</span>
        </div>
        <div>
          <span className='font-medium text-[16px] bg-text-color-secondary hover:bg-gradient-to-r from-red-500 to-yellow-400 inline-block text-transparent bg-clip-text'>Conheça o app</span>
          <span className='font-medium text-[16px] bg-text-color-secondary hover:bg-gradient-to-r from-red-500 to-yellow-400 inline-block text-transparent bg-clip-text'>Funcionalidades</span>
          <span className='font-medium text-[16px] bg-text-color-secondary hover:bg-gradient-to-r from-red-500 to-yellow-400 inline-block text-transparent bg-clip-text'>Planos e preços</span>
          <button className='bg-text-color-primary py-[12px] px-[24px] rounded-lg hover:bg-gradient-to-r from-red-500 to-yellow-400'><span className='font-medium text-[16px] text-background-color'>Baixar agora</span></button>
        </div>
      </div>
    </div>
  )
}

export default NavHeader