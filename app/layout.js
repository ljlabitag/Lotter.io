import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="Parent">
          <Navbar />
          <div className="flex flex-row min-h-screen">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
