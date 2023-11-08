import Link from "next/link"

async function getTickets() {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch(' http://localhost:5000/tickets', {
        next: {
            revalidate: 0 // opts out of using cache
        }
    })

    return res.json()
}

export default async function TicketList() {
    const tickets = await getTickets()

    return (
        <>
            {tickets.length === 0 && (
                <p className="text-center">No open tickets found</p>
            )}

            {(tickets || []).map((ticket) => (
                <div key={ticket?.id} className="card my-5">
                    <Link href={`/tickets/${ticket?.id}`} >
                        <h3>{ticket?.title}</h3>
                        <p>{ticket?.body.slice(0, 200)}...</p>
                        <div className={`${ticket?.priority} pill`}>
                            {ticket?.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}
