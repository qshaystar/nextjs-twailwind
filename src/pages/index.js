import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../components/Hero'
import Slider from '@/components/Slider'
import Instagram from '@/components/Instagram'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
    <Hero heading="Turbines" 
      message="Without a broom or bubble, you learnt to fly all by yourself."/>
    <Slider/>
    <Instagram />
   </div>
  )
}
