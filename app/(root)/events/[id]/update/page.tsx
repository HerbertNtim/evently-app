import EventForm from "@/components/shared/EventForm"
import { getEventById } from "@/lib/actions/event.actions"
import { auth } from "@clerk/nextjs"

type UpdateEventProps = {
  params: {
    id: string
  }
}

const UpdateEvent = async ({ params: {id} }: UpdateEventProps) => {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string
  const event = await getEventById(id)

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover">
        <h3 className="wrapper h3-bold text-center sm:text-left py-5 md:py-10">Update Your Event Here</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type='Update' event={event} eventId={event._id} />
      </div>
    </>
  )
}

export default UpdateEvent