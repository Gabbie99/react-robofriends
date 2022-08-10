import SearchBox from './SearchBox';
import Cardlist from './Cardlist';
import users from './users.json';
import "./App.css";
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  updateSearchInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchInput: event.target.value })
  }



  render() {

    const filteredRobots = users.filter(item => (
      item.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    ))

    console.log("Filtered Robots: ", filteredRobots);

    return (
      <div className="back">
        <h1 style={{ textAlign: 'center'}}>[G-kittens]</h1>
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <Cardlist clients={filteredRobots}/>
      </div>
    );     
  }
}

export default App;
