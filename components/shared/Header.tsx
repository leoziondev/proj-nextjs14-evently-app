import Image from "next/image"
import Link from "next/link"
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "../ui/button"

export const Header = () => {
  return (
    <div className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
                <Image
                    src="/assets/images/logo.svg"
                    width={128}
                    height={38}
                    alt="Evently logo"
                />
            </Link>

            <div className="flex w-32 justify-end gap-3">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </div>
  )
}
