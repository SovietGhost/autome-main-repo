import Sidebar from "./_components/ProfileSidebar"

export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>
        {children}
    </section>
}