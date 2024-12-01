import Link from "next/link"

const AuthSidebar = () => {
    return (
        <div className="flex flex-col  py-10  w-full bg-primaryApp  items-center justify-center">
            <Link href="/" className="md:hidden block py-5">
                <img className="w-28 md:w-[140px] object-cover" src="/logo.png" alt="" />
            </Link>
            <div className=" relative w-[80%]  border p-5 text-white text-center bg-white bg-opacity-40 rounded-2xl backdrop-blur-lg">
                <h3 className="text-[20px] font-bold">Yenidən salam, xoş gəlmisiniz!</h3>
                <p className="text-sm my-2">
                    Qeydiyyatdan keç, hərraca başla. Təkliflər ver və bu fürsətdən geri qalma!
                </p>
                <img
                    src="/automobile.png"
                    className="w-full md:h-[300px]  mt-5"
                    alt=""
                />
            </div>
        </div>
    )
}

export default AuthSidebar