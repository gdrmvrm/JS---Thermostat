const Thermostat = require("./thermostat");

describe("Thermostat class", () => {
  it("starts with an initial temperature", () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("increases temperature when up method is called", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(22);
  });

  it("decreases temperature when down method is called", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("does not decrease the temperature below the minimum temperature", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 12; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("does not increase the temperature above the maximum temperature", () => {
    const thermostat = new Thermostat();
    for (let i = 0; i < 7; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("when power saving mode is on", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    expect(thermostat.getMaxTemperature()).toBe(25);
  });

  it("when power saving mode is off", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.getMaxTemperature()).toBe(32);
  });

  it("resets temperature", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("returns current energy usage as low", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.currentEnergyUsage()).toBe("low-usage");
  });

  it("returns current energy usage as medium", () => {
    const thermostat = new Thermostat();
    expect(thermostat.currentEnergyUsage()).toBe("medium-usage");
  });

  it("returns current energy usage as high", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 7; i++) {
      thermostat.up();
    }
    expect(thermostat.currentEnergyUsage()).toBe("high-usage");
  });
});
