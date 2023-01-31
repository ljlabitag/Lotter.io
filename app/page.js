import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="Parent">
      <Navbar />
      <div className="flex flex-row min-h-screen">
        <Sidebar />
        <div className="basis-4/5 bg-[#ECECEC]">
          <h1 className="justify-center">LUCKY PICK</h1>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
