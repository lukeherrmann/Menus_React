import React from "react";
import { Header, Button, Icon, } from "semantic-ui-react";



const Menu = ({ id, name, updateMenu, deleteMenu, }) => (
  <div>
    <div>
      <Header as="h2">
        {name}
      </Header>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      onClick={() => deleteMenu(id)}
    >
      <Icon name="trash" />
    </Button>
    <Button
      icon
      color="green"
      size="tiny"
      onClick={() => updateMenu}
    >
      <Icon name="edit" />
    </Button>
    <Button
      color="blue"
      size="tiny"
    >
    See Menu
    </Button>
  </div>
)

export default Menu