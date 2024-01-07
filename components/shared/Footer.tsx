'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
      setCurrentTime(getCurrentTime());
    }, 60000); // Update every minute to account for time zone changes

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const options: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      hour12: false,
      timeZoneName: 'short',
    };

    return new Date().toLocaleTimeString([], options);
  }

  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-3 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <div className="flex flex-1 flex-col md:flex-row justify-center items-center gap-10">
          <p>{currentTime}</p>

          <p><span className="text-[18px]">&copy;</span> {currentYear} Evently. All Rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer