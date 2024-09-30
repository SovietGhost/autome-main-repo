import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#04011B] py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-red-600">
              <Image src={"/Logo.png"} alt="logo" width={140} height={45} /> 
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              Bənzərsiz fürsətlər və hərracların məkanına xoş gəlmisən.
              Qeydiyyatdan keç və hərraca başla! 
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Vacib linklər</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Ana səhifə
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link
                  href="/auctions"
                  className="text-gray-400 hover:text-white"
                >
                  Hərraclar
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-white">
                  Qaydalar
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  Haqqında
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Digər linklər</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/favorite" className="text-gray-400 hover:text-white">
                  Sevimli
                </Link>
              </li> */}
              <li>
                <Link href="/vin-check" className="text-gray-400 hover:text-white">
                  VIN Check
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-gray-400 hover:text-white">
                  Hesab
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Hərrac elan et
                </Link>
              </li>
              <li>
                <Link href="/seller-info" className="text-gray-400 hover:text-white">
                  Satıcı məlumatları
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Əlaqə</h3>
            <p className="text-gray-400">Phone: +994 50 123 45 67</p>
            <p className="text-gray-400">Email: info@autome.az</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AUTOME.AZ - Bütün hüquqlar qorunur
        </div>
      </div>
    </footer>
  );
}
