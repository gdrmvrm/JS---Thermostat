class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minTemperature = 10;
    this.maxTemperature = 25;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature < this.maxTemperature) {
      this.temperature += 1;
    }
  }

  down() {
    if (this.temperature > this.minTemperature) {
      this.temperature -= 1;
    }
  }

  setPowerSavingMode(boolean) {
    if (boolean === true) {
      this.maxTemperature = 25;
    } else {
      this.maxTemperature = 32;
    }
  }

  getMaxTemperature() {
    return this.maxTemperature;
  }

  reset() {
    this.temperature = 20;
  }

  currentEnergyUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else if (this.temperature > 25) {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
