import { Header } from "@/components/header";

export default function ClientLayout({children}:{children:React.ReactNode}){
    return (
        <html>
            <body>
                <Header/>
                {children}
            </body>
        </html>
    )
}