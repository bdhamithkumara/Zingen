import Image from 'next/image'
import React from 'react'
import { curve } from '@/public/images'

const HeroSection = () => {
  return (
    <div>
        <div className='flex'>
          123
          <Image src={curve} alt='' fill className='-z-10'/>
        </div>
    </div>
  )
}

export default HeroSection