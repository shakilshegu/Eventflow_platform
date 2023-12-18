import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" width={128} height={38} alt="footer image" />
        </Link>
        <p>2023 Eventflow .All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer