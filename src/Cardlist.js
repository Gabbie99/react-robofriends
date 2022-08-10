
import Card from './Card'
import './Card.css'

function CardList(props){
    console.log(props)
    return(
        <div className='card-wrapper'>
        {
          props.clients.map((item) => (
            <Card 
              key={item.id.toString()}
              name={item.name} 
              email={item.email}
              username={item.username}
            />
            
          ))
        }
      </div>
    )
}
export default CardList;