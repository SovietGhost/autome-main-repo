"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { Button } from "~/components/ui/button";
import { Fragment, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Menu } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  ClerkLoading,
  ClerkLoaded,
} from "@clerk/nextjs";
import { Skeleton } from "~/components/ui/skeleton";

const NavLinks = ({ inNavbar }: { inNavbar?: boolean }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Link href="/about" className={`${!inNavbar && "bg-white px-2 rounded-lg"} block py-2 hover:text-red-600`}>
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Haqqında</span>
          {inNavbar && segment === "about" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/auctions" className={`${!inNavbar && "bg-white px-2 rounded-lg"} block py-2 hover:text-red-600`}>
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Hərraclar</span>
          {inNavbar && segment === "auctions" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/rules" className={`${!inNavbar && "bg-white px-2 rounded-lg"} block py-2 hover:text-red-600`}>
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Qaydalar</span>
          {inNavbar && segment === "rules" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/contact" className={`${!inNavbar && "bg-white px-2 rounded-lg"} block py-2 hover:text-red-600`}>
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Əlaqə</span>
          {inNavbar && segment === "contact" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
    </>
  );
};

function routeToAzerbaijani(segment: string) {
  switch (segment) {
    case "view":
      return "Baxış";
    case "about":
      return "Haqqında";
    case "create":
      return "Elan et";
    case "auctions":
      return "Hərraclar";
    case "rules":
      return "Qaydalar";
    case "contact":
      return "Əlaqə";
    case "vin-check":
      return "VIN yoxlama";
    case "account":
      return "Hesab məlumatları";
    default:
      return segment;
  }
}

const BreadCrumpHeader = () => {
  const segments = useSelectedLayoutSegments();

  if (segments.length === 0) {
    return null;
  }

  return (
    <header className="container mx-auto py-2">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-black" href="/">
              Ana səhifə
            </BreadcrumbLink>
          </BreadcrumbItem>

          {segments.map((segment, index, array) => (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black" href={"/" + array.slice(0, index + 1).join("/")}>
                  {routeToAzerbaijani(segment)}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between border-b p-4">
        <Link href="/" className="md:ml-8 text-2xl font-bold text-red-600">
          <Image src={"/Logo.png"} alt="logo" width={140} height={45} />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <NavLinks inNavbar />
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <Link className="border border-black rounded-lg text-primaryApp font-semibold" href={"/auctions/create"}>
            <Button className="font-semibold" variant="ghost" size="sm">
              Elan et
            </Button>
          </Link>
          <ClerkLoaded>
            <>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <Button className="cursor-pointer" variant="destructive" size="sm">
                    Daxil ol
                  </Button>
                </SignInButton>
              </SignedOut>
            </>
          </ClerkLoaded>
          <ClerkLoading>
            <Skeleton className="h-8 w-8 rounded-full" />
          </ClerkLoading>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full md:hidden bg-gray-100">
            <div className="flex h-full flex-col">
              <div className="mb-8">
                <Image className="mx-auto" src={"/Logo.png"} alt="logo" width={140} height={45} />
              </div>
              <nav className="flex flex-col space-y-4">
                <NavLinks />
              </nav>
              <div className="mt-auto space-y-4">
                <Button className="border mr-6 border-black rounded-lg text-primaryApp font-semibold" variant="ghost">
                  Elan et
                </Button>
                <ClerkLoaded>
                  <>
                    <SignedIn>
                      <div className="flex w-full justify-center">
                        <UserButton />
                      </div>
                    </SignedIn>
                    <SignedOut>
                      <SignInButton>
                        <Button variant="destructive" size="sm">
                          Daxil ol
                        </Button>
                      </SignInButton>
                    </SignedOut>
                  </>
                </ClerkLoaded>
                <ClerkLoading>
                  <Skeleton className="h-8 w-8 rounded-full" />
                </ClerkLoading>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <BreadCrumpHeader />
    </>
  );
}
