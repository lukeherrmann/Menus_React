import React, { Component } from 'react';
import MenuList from "./components/MenuList";
import MenuForm from "./components/MenuForm";
import { Container, } from "semantic-ui-react";
import axios from "axios";

class App extends Component {
  state = { menus: [] }

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ menus: res.data })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addMenu = (name) => {
    axios.post("/api/menus", {name})
    .then( res => {
      const { menus, } = this.state
      this.setState({ menus: [...menus, res.data] })
    })
  }

  updateMenu = (id) => {

  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const { menus, } = this.state
      this.setState({ menus: menus.filter( t => t.id !==id), })
    })
  }

  render() {
    return (
      <Container>
        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
}

export default App;
