class Car {
    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption, currentFuelVolume, isStarted, mileage) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.maxSpeed = maxSpeed;
        this.maxFuelVolume = maxFuelVolume;
        this.fuelConsumption = fuelConsumption;
        this.currentFuelVolume = currentFuelVolume;
        this.isStarted = isStarted;
        this.mileage = mileage;
    }

    get brand() {
        return this.brand;
      }
    
      set brand(newBrand) {
        if (typeof newBrand !== 'string' || newBrand === '' || newBrand.length > 50) {
          return;
        }
    
        this.brand = newBrand;
      }
}

