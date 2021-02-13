import React from "./react";
import HijoComponent from "./components/HijoOne";
import { IChildren } from "./react/types";

class SecondComponentTest extends React.Component {
  render() {
    return {
      tag: "div",
      father: this.fatherId,
      id: "app2",
      children: "Soy un nuevo componente 2",
    };
  }
}

class ComponentTest extends React.Component {
  render(): IChildren {
    return {
      tag: "div",
      father: this.fatherId,
      id: "app",
      children: "Hola soy el ComponentTest",
    };
  }
}

class ComponentTest3 extends React.Component {
  render(): IChildren {
    return {
      tag: "div",
      father: this.fatherId,
      id: "app3",
      children: "Hola soy el app3",
    };
  }
}
class ComponentTest4 extends React.Component {
  render(): IChildren {
    return {
      tag: "div",
      father: this.fatherId,
      id: "app5",
      children: "texto random",
    };
  }
}

export default class App extends React.Component {
  state = {
    data: {},
  };
  async getData() {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    this.setState({ data: response });
  }

  render() {
    const { data } = this.state;
    if (!this.state.data) {
      return {
        attrs: {
          style: `
          color: red;
          font-size: 5rem;
        `,
        },
        onClick: event => this.getData(),
        tag: "button",
        father: "root",
        id: "app4",
        children: "Hola soy un botón",
      };
    }
    // return this.state.data.map((item, i) => ({
    //   tag: "p",
    //   father: "root",
    //   id: `item_${i}`,
    //   children: item.name,
    // }));

    return {
      tag: "p",
      father: "root",
      id: "app",
      children: (data as any).map((item: any, i: string) => ({
        tag: "p",
        father: "root",
        id: `item_${i}`,
        children: item.name,
      })),
    };
  }
}
