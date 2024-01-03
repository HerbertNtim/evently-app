import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs"

const UpdateEvent = () => {
  const { sessionClaims } = auth()

  const userId = sessionClaims?.userId as string

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover">
        <h3 className="wrapper h3-bold text-center sm:text-left py-5 md:py-10">Update Your Events Here</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type='Update'/>
      </div>
    </>
  )
}

export default UpdateEvent