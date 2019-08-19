import React, { Component } from "react";

// import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner/spiner";
import "./random-planet.css";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    // id: null,
    // planet: {},
    // loading: true,
    // name: null,
    // population: null,
    // rotationPeriod: null,
    // diameter: null,
    planet: {},
    loading: true,
    error: false
  };

  constructor() {
    super();
    console.log("Вызов constructor()");
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 4500);
  }

  componentDidMount() {
    console.log("Вызов componentDidMount()");
  }

  onError = err => {
    this.setState({
      error: true,
      // т.к ошибка появится когда компонент уже загружен error и loading
      // не будут никогда одного значения
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(planet => {
        this.setState({
          // id,
          // name: planet.name,
          // population: planet.population,
          // rotationPeriod: planet.rotation_period,
          // diameter: planet.diameter,
          planet,
          loading: false
        });
      })
      .catch(this.onError);
  };

  render() {
    console.log("Вызов render()");
    const {
      // id,
      // name,
      // population,
      // rotationPeriod,
      // diameter,
      planet,
      loading,
      error
    } = this.state;

    const hasData = !(error || loading);
    const errorMassage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    // console.log(planet)
    return (
      <div className="random-planet jumbotron rounded">
        {errorMassage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter, loading } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt="planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
