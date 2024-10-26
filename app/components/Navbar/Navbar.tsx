import { Container } from '../MultiPurpose/Container'
import { Logo } from './Logo'
import { Search } from './Search'
import React from 'react'
import { SafeUser } from '@/app/types'
import { UserMenu } from './UserMenu'
import { Categories } from './Categories'

type NavbarProps = {
  currentUser?: SafeUser | null
}

export const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-4 md:gap-0'>
            <Logo />
            <Search />
            <div className='align-text-left ' > <span className='font-semibold text-lg'>Welcome ! </span>{currentUser?.name}</div>
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  )
}
