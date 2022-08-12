
function MessageCard({quotes}) {

    return (
        <>
        {quotes && quotes.map((quote)=>(
            <div className="posted-quote">
            <h3>{quote.name}</h3>
            <p>{quote.description}</p>
            </div>
            
        ))}
   
        </>
    )
}

export default MessageCard;