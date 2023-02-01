import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';
import LuckyPick from './lucky_pick';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Parent">
      <Navbar />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <LuckyPick />
      </div>
    </div>
  )
}
