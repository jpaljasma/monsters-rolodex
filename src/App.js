import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/seach-box.component';

import "./App.scss";

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

    // bind event context to self (not neeeded when using arrow functions myFunc = (e) => { ... })
    // this.handleSearchBoxChange = this.handleSearchBoxChange.bind(this);
  }


  // Lifecycle method
  // Mount = React puts a component on a page
  componentDidMount() {
    // fetch returns a promise
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // arrow functions automatically allow to set [this] scope
  handleSearchBoxChange = (e) => {
    this.setState({searchField: e.target.value.trim()})
  }

  render() {

    // destructuring - pulling properties off of an object and set them to constants
    // quicker way
    const { monsters, searchField } = this.state;
    const _s = searchField.toLowerCase();
    const filteredMonsters = monsters.filter( monster => {
      if('' === _s) return true;
      return monster.name.toLowerCase().includes(_s);
    });
    
    return (
      <div className="App">
      <img
        style={{ maxWidth: "160px", position: "fixed", top: '-48px', right: '-24px' }}
        className="App-logo"
        src={logo}
        alt="React logo"
      ></img>
      <h1>Monsters Rolodex</h1>
        <div style={{ margin: "0 auto 40px", textAlign: "center" }}>
          <SearchBox
            minLength={1}
            delayTimeout={150}
            placeholder='Search for a monster'
            handleChange={this.handleSearchBoxChange} />
        </div>
        <CardList monsters={filteredMonsters} searchField={_s} />
      </div>
    );
  }
}

export default App;
