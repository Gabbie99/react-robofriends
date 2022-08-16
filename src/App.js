import SearchBox from './SearchBox';
import Cardlist from './Cardlist';
// import users from './users.json';
import "./App.css";
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      kittens:[],
      loading: false
    }
  }

  updateSearchInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchInput: event.target.value })
  }

  componentDidMount(){
    this.setState({loading:true})

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({kittens:json,loading:false}))
  .catch((error)=>console.log(error))
  }

  render() {

    const filteredKittens = this.state.kittens.filter(item => (
      item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    ))

    // console.log("Filtered Kittens: ", filteredKittens);

    return (
      <div className="back">
        <h1 style={{ textAlign: 'center'}}>[G-kittens]</h1>
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <Cardlist clients={filteredKittens}/>
        {this.state.loading && <h1 style={{textAlign:'center'}}>Loadiing...</h1>}
        {!filteredKittens.length && !this.state.loading && <h3 style={{textAlign:'center'}}>No Kittens available!</h3>}
      </div>
    );     
  }
}

export default App;
