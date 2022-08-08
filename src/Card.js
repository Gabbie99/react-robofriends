import './Card.css';



function Card(props){
    return(
        <div className='card'>
            <img src={`https://robohash.org/${props.name}`} alt='...'/>
            <h4>{props.name}</h4>
            <p>{props.username}</p>
            <p>{props.email}</p>
        </div>
        
    )
}

export default Card;