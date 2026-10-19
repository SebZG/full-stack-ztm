import "./App.css";
import { Component } from "react";
import SearchBox from "../components/SearchBox.jsx";
import CardList from "../components/CardList.jsx";
import Scroll from "../components/Scroll.jsx";
// import { robots } from "./robots.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    // this.setState({ robots });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        // console.log(users);
        this.setState({ robots: users });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robots, searchField } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    {
      return !robots.length ? (
        <h1 className="tc f1">Loading...</h1>
      ) : (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
