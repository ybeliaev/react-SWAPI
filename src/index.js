class SwappiServise {
  _apiBase = "https://swapi.co/api";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error("Error! URL: " + url + "Error status: " + res.status);
    }

    return await res.json();
  }
  async getAllPersons() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }
  async getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }
}
const swapi = new SwappiServise();

swapi.getAllPersons().then(people => {
  people.forEach(el => {
    console.log(el.name);
  });
});
