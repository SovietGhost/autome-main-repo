"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "~/components/ui/button"

function Sidebar() {
    const currentPath = usePathname();
    return (
        <div className="w-full flex flex-col gap-16 md:gap-[104px] items-start pb-5 lg:w-[calc(25%-2rem)] bg-white rounded-lg border border-[#F2F2F4]">
            <ul className="flex flex-col w-full">
                <div>
                    <li className="py-4">
                        <Link href="/profile/account-details"
                            className={`${currentPath === "/profile/account-details" ? "text-black border-l-2 border-l-black" : "text-[#828091]"} pl-4 }`}
                        >
                            Hesab təfərrüatları
                        </Link>
                    </li>
                    <li className="py-4">
                        <Link href="/profile/change-password"
                            className={`${currentPath === "/profile/change-password" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}

                        >
                            Şifrə dəyişikliyi
                        </Link>
                    </li>
                </div>
                <div className="border my-2" />
                <div>
                    <li className="py-4">
                        <Link href="/profile/my-auctions"
                            className={`${currentPath === "/profile/my-auctions" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}
                        >
                            Mənim hərraclarım
                        </Link>
                    </li>
                    <li className="py-4">
                        <Link href="/profile/my-auctions"
                            className={`${currentPath === "/profile/my-auctions" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}
                        >
                            Təsdiqlənməmiş hərraclar
                        </Link>
                    </li>
                    <li className="py-4">
                        <Link href="/profile/my-auctions"
                            className={`${currentPath === "/profile/my-auctions" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}
                        >
                            Gözləmədə olan hərraclar
                        </Link>
                    </li>
                </div>
                <div className="border my-2" />
                <div>
                    <li className="py-4">
                        <Link href="/profile/win-auctions"
                            className={`${currentPath === "/profile/win-auctions" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}
                        >
                            Qazanılmış hərraclar
                        </Link>
                    </li>
                    <li className="py-4">
                        <Link href="/profile/deal-auctions"
                            className={`${currentPath === "/profile/deal-auctions" ? "text-black border-l-2 border-l-black" : ""} text-[#828091] pl-4 }`}
                        >
                            Qazanılmamış hərraclar
                        </Link>
                    </li>
                </div>
            </ul>
            <Button className="pl-4 hover:underline text-white ml-4">
                Hesabdan çıxış
            </Button>
        </div>
    )
}

export default Sidebar