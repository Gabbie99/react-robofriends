import './Card.css';



function Card(props){
    return(
        <div>
            <div className='card'>
                <img src={`https://robohash.org/${props.name}?set=set4`} alt='...'/>
            <h4>{props.name}</h4>
            <p>{props.username}</p>
            <p>{props.email}</p>
            </div>
            
        </div>
        
    )
}

export default Card;