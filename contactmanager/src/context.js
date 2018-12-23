import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "David Water",
        email: "dwater@gamil.com",
        phone: "1234-1234-1234"
      },
      {
        id: 2,
        name: "John Nelson",
        email: "Jnelson@gamil.com",
        phone: "3333-3333-3333"
      },
      {
        id: 3,
        name: "Jack Lawson",
        email: "Jlawson@gamil.com",
        phone: "777-777-777"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;