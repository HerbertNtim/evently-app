import { getEventById } from "@/lib/actions/event.actions"
import { SearchParamProps } from "@/types"
import Image from "next/image"

const EventDetails = async ({ params: id }: SearchParamProps) => {
  const event = await getEventById(id)
  console.log(event)
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-cover bg-dotted-pattern bg-center">
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl'>
          <Image
            src={event.imageUrl}
            alt="hero image"
            width={1000}
            height={1000}
            className='h-full min-h-[300px] object-cover object-center'
          />

          <div>
            <h2></h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventDetails