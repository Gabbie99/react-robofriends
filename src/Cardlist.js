import users from './users.json'
import Card from './Card'

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