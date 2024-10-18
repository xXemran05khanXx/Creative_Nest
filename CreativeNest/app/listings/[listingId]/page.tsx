import getCurrentUser from '@/app/actions/getCurrentUser'
import { ListingParams, getListingById } from '@/app/actions/getListingById'
import { ClientOnly } from '@/app/components/ClientOnly'
import { EmptyState } from '@/app/components/EmptyState'
import React from 'react'
import { ListingClient } from './ListingClient'
import { getReservations } from '@/app/actions/getReservations'

export default async function ListingPage({
  params,
}: {
  params: ListingParams
}) {
  const listing = await getListingById(params)
  const reservations = await getReservations(params)
  const currentUser = await getCurrentUser()

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
      <ListingClient
        reservations={reservations}
        listing={listing}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}
