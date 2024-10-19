export const dynamic = 'force-dynamic'
import { EmptyState } from '@/app/components/EmptyState'
import getListings, { ListingParams } from '@/app/actions/getListings'
import getCurrentUser from '@/app/actions/getCurrentUser'
import { ClientOnly } from './components/ClientOnly'
import ListingCard from './components/Listings/ListingCard'
import { Container } from './components/MultiPurpose/Container'

interface HomeProps {
  searchParams: ListingParams
}

const Home = async ({ searchParams }: HomeProps) => {
  console.log('🚀 ~ file: page.tsx:13 ~ Home ~ searchParams:', searchParams)
  const listings = await getListings(searchParams)
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className='
            pt-[220px]
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          '
        >
          {listings.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  )
}

export default Home
