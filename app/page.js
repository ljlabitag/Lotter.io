import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <h1 className="text-3xl bg-green-600 text-white font-bold underline border-4 border-gray-400">
      Hello world!
    </h1>
  )
}
