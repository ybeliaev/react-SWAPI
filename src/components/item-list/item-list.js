import React, { Component } from "react";

import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner/spiner";

export default class ItemList extends Component {
  swapiService = new SwapiService();
  state = {
    peoplList: null
  };
  componentDidMount() {
    this.swapiService.getAllPeople().then(peoplList => {
      this.setState({
        peoplList
      });
    });
  }
  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  }
  render() {
    const { peoplList } = this.state;
    if (!peoplList) {
      return <Spinner />;
    }
    const items = this.renderItems(peoplList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
