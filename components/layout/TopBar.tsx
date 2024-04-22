"use client"

import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { navLinks } from '@/lib/constants'

const TopBar = () => {
  const pathName = usePathname()
  const [dropdowMenu, setDropdowMenu] = useState(false)

  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-x1 lg:hidden">

      <Image src="/logo.png" alt='logo' width={150} height={70} />

      <div className='flex gap-8 max-md:hidden'>
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${pathName === link.url  ? "text-blue-1" : "text-grey-1"}`}
          >
            <p>{link.label}</p>

          </Link>
        ))}
      </div>

      <div className=' relative flex gap-4 ntem-center'>
        <Menu className="cursor-pointer md:hidden" onClick={() => setDropdowMenu(!dropdowMenu)} />

        {dropdowMenu && (
          <div className='absolute top-10 right-6 flex flex-col gap-12 p-5 bg-white shadow-x1 rounded-lg'>
            {navLinks.map((link) => (
              <Link href={link.url}
                key={link.label}
                className='flex gap-4 text-body-medium'
                >
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}

        <UserButton />
      </div>
    </div>

  )
}

export default TopBar