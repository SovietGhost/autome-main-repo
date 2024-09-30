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
      <Link href="/about" className={`block py-2 hover:text-red-600`}>
        <div className="flex flex-col items-center">
          <span>Haqqında</span>
          {inNavbar && segment === "about" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/auctions" className={`block py-2 hover:text-red-600`}>
        <div className="flex flex-col items-center">
          <span>Hərraclar</span>
          {inNavbar && segment === "auctions" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/rules" className={`block py-2 hover:text-red-600`}>
        <div className="flex flex-col items-center">
          <span>Qaydalar</span>
          {inNavbar && segment === "rules" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link href="/contact" className={`block py-2 hover:text-red-600`}>
        <div className="flex flex-col items-center">
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

          {segments.map((segment, index) => (
            <Fragment key={index}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-black" href={"/" + segment}>
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
        <Link href="/" className="ml-8 text-2xl font-bold text-red-600">
          <Image src={"/Logo.png"} alt="logo" width={140} height={45} />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <NavLinks inNavbar />
        </nav>
        <div className="flex items-center space-x-2">
          <Link href={"/auctions/create"}>
            <Button variant="ghost" size="sm">
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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full md:hidden">
            <div className="flex h-full flex-col">
              <nav className="flex flex-col space-y-4">
                <NavLinks />
              </nav>
              <div className="mt-auto space-y-4">
                <Button className="w-full" variant="ghost">
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
