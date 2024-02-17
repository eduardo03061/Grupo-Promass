import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Layaout ({children}){

    return (
        <>
            <Head>
                <title>Hexalud</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.webp" />
            </Head>
            <header>
                <div className='logo'>
                    <Image src="/logo.webp" alt="hexalud" width={60} height={70}/>
                </div>
                <nav>
                    <Link href='#' className='nav-link btn'>Inicia Session</Link>
                </nav>
            </header>
            {children}
        </>
    )
}