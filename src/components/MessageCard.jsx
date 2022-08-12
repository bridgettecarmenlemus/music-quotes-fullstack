
function MessageCard({quotes}) {

    return (
        <section>
        {quotes && quotes.map((quote)=>(
            <div className="posted-quote">
            <h3>{quote.name}</h3>
            <p>{quote.quote}</p>
            </div>
            
        ))}
   
        </section>
    )
}

export default MessageCard;