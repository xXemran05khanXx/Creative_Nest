'use client'
import { useCountries } from '@/app/helpers/hooks/useCountries'
import { SafeUser } from '@/app/types'
import React from 'react'
import { IconType } from 'react-icons'
import { Avatar } from '../MultiPurpose/Avatar'
import { ListingCategory } from './ListingCategory'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('../Map'), {
  ssr: false,
})

type ListingInfoProps = {
  user: SafeUser | null
  description: string
  roomCount: number
  guestCount: number
  bathroomCount: number
  locationValue: string
  category:
    | {
        icon: IconType
        label: string
        description: string
      }
    | undefined
}
export const ListingInfo: React.FC<ListingInfoProps> = ({
  bathroomCount,
  category,
  description,
  guestCount,
  locationValue,
  roomCount,
  user,
}) => {
  const { getByValue } = useCountries()
  const coordinates = getByValue(locationValue)?.latlng
  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold flex flex-row items-center gap-2'>
          <div>Hosted by {user?.name}</div>
          <Avatar imageSrc={user?.image} />
        </div>
        <div className='flex flex-row items-center gap-4 font-light text-neutral-400'>
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className='text-lg font-light text-neutral-500'>{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  )
}
