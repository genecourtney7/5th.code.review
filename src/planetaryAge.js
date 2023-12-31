export default class SpaceAge {
  constructor(age) {
    this.age = age;
    this.planetYears = {
      'Earth': 1,
      'Mercury': 0.24,
      'Venus': 0.62,
      'Mars': 1.88,
      'Jupiter': 11.86,
    };
  }

  onPlanet(planet) {
    return Number((this.age / this.planetYears[planet]).toFixed(2));
  }

  yearsPassed(planet, pastBirthday) {
    return Number(((this.age - pastBirthday) / this.planetYears[planet]).toFixed(2));
  }

  yearsToCome(planet, futureBirthday) {
    return Number(((futureBirthday - this.age) / this.planetYears[planet]).toFixed(2));
  }
}
