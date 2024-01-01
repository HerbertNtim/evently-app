import { SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link
          href='/'
          className="w-36"
        >
          <Image src="/assets/images/logo.svg" alt="evently logo" width={128} height={38} />
        </Link>

        <div className="w-32 flex items-center justify-end gap-3">
          <SignedOut>
            <Button asChild className=''>
              <Link href={'/sign-in'}>
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header