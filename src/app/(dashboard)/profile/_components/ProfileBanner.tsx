function ProfileBanner() {
    return (
        <div className="h-[114px] md:h-[200px] flex justify-between w-full bg-[#04011B] bg-[url(/images/profile/profile-banner.png)]">
            <div className="text-white pl-4 md:pl-[50px] py-5 md:py-[54px]">
                <h1 className="text-xl md:text-[36px] mb-1 md:mb-3 font-semibold">Abulfaz Sadigov</h1>
                <p>İstifadəçi</p>
            </div>
            <img className="hidden md:block" src="/images/profile/profile-banner-car.png" alt="" />
        </div>
    )
}

export default ProfileBanner