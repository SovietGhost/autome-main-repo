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

import type { User } from "better-auth";
import { useRouter } from "next/navigation";
import { UserButton } from "../auth/UserButton";

const NavLinks = ({ inNavbar }: { inNavbar?: boolean }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <>
      <Link
        href="/about"
        className={`${!inNavbar && "rounded-lg bg-white px-2"} block py-2 hover:text-red-600`}
      >
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Haqqında</span>
          {inNavbar && segment === "about" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link
        href="/auctions"
        className={`${!inNavbar && "rounded-lg bg-white px-2"} block py-2 hover:text-red-600`}
      >
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Hərraclar</span>
          {inNavbar && segment === "auctions" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link
        href="/rules"
        className={`${!inNavbar && "rounded-lg bg-white px-2"} block py-2 hover:text-red-600`}
      >
        <div className={`${inNavbar && "items-center"} flex flex-col`}>
          <span>Qaydalar</span>
          {inNavbar && segment === "rules" && (
            <div className="h-1 w-[50%] rounded bg-red-600"></div>
          )}
        </div>
      </Link>
      <Link
        href="/contact"
        className={`${!inNavbar && "rounded-lg bg-white px-2"} block py-2 hover:text-red-600`}
      >
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
                <BreadcrumbLink
                  className="text-black"
                  href={"/" + array.slice(0, index + 1).join("/")}
                >
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

export default function Navbar({ user }: { user?: User }) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <>
      <header className="flex items-center justify-between border-b p-4">
        <Link href="/" className="text-2xl font-bold text-red-600 md:ml-8">
          <Image src={"/Logo.png"} alt="logo" width={140} height={45} />
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <NavLinks inNavbar />
        </nav>
        <div className="hidden items-center space-x-2 md:flex">
          <Link
            className="rounded-lg border border-black font-semibold text-primaryApp"
            href={"/auctions/create"}
          >
            <Button
              className="font-semibold hover:bg-black hover:text-white"
              variant="ghost"
              size="sm"
            >
              Elan et
            </Button>
          </Link>

          <>
            {user && <UserButton user={user} />}
            {!user && (
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="sm"
                onClick={() => router.push("/auth/login")}
              >
                Daxil ol
              </Button>
            )}
          </>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full bg-gray-100 md:hidden">
            <div className="flex h-full flex-col">
              <div className="mb-8">
                <Image
                  className="mx-auto"
                  src={"/Logo.png"}
                  alt="logo"
                  width={140}
                  height={45}
                />
              </div>
              <nav className="flex flex-col space-y-4">
                <NavLinks />
              </nav>
              <div className="mt-auto space-y-4">
                <Button
                  className="mr-6 rounded-lg border border-black font-semibold text-primaryApp hover:text-hoverPrimary"
                  variant="ghost"
                >
                  Elan et
                </Button>
                <>
                  {user && <UserButton user={user} />}
                  {!user && (
                    <Button
                      className="cursor-pointer hover:text-hoverPrimary"
                      size="sm"
                      onClick={() => router.push("/auth/login")}
                    >
                      Daxil ol
                    </Button>
                  )}
                </>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <BreadCrumpHeader />
    </>
  );
}
