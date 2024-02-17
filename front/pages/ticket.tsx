import Layaout from "./components/Layaout"
import Link from "next/link";

export default function Ticket({id, title, author, date, content}) {
    return (
        <>
            <Layaout>
                <br/>
                <div className='btn-atras'>
                    <Link href={{
                        pathname: '/',
                    }} className='nav-link btn'>
                        Atras
                    </Link>
                </div>
                <br/>
                <div className="ticket-detail">
                    <h2>Has seleccionado la entrada: {title}</h2>
                    <p>De: {author} <span className='date'>{date}</span></p>
                    <br/>
                    <p>{content}</p>
                </div>
            </Layaout>
        </>
    )
}

Ticket.getInitialProps = async ({query}) => {
    return query
}