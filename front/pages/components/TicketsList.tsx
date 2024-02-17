import Link from "next/link";

const Subscriptions = ({data}) => {

    return (
        <div>

            {data && data.map((ticket, index) => (
                <Link href={{
                    pathname: '/ticket',
                    query: {
                        id: ticket.id,
                        title: ticket.title,
                        author: ticket.author,
                        content: ticket.content,
                        date: ticket.date,
                    },
                }} key={index}>
                    <li key={index} className="ticket-detail">
                        <h4>{ticket.id}. {ticket.title}</h4>
                        <p>{ticket.author}</p>
                        <p>{ticket.content}</p>
                        <p>{ticket.date}</p>
                    </li>
                </Link>
            ))}
        </div>
    )
}


export default Subscriptions;