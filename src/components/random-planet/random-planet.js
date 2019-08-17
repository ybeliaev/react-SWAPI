import React, { Component } from "react";

// import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spiner/spiner";
import "./random-planet.css";

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
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }
  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        // id,
        // name: planet.name,
        // population: planet.population,
        // rotationPeriod: planet.rotation_period,
        // diameter: planet.diameter,
        planet,
        loading: false
      });
    });
  }

  render() {
    const {
      // id,
      // name,
      // population,
      // rotationPeriod,
      // diameter,
      planet,
      loading
    } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;
    return (
      <div className="random-planet jumbotron rounded">
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
