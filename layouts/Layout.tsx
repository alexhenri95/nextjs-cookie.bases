import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from "../components"

export const Layout: FC<PropsWithChildren> = ({children}) => {
    return (
        <>
            <Head>
                <title>Página De inicio</title>
            </Head>

            <Navbar/>

            <main style={{ padding: '20px 50px' }}>
                { children }
            </main>
        </>
    )
}