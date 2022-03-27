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
        const isIncorrect = typeof newBrand !== 'string' || newBrand === '' || newBrand.length > 50;
        
        if (isIncorrect) {
            return;
        }

        this.brand = newBrand;
    }

    get model() {
        return this.model;
    }
    
    set model(newModel) {
        const isIncorrect = typeof newModel !== 'string' || newModel === '' || newModel.length > 50;

        if (isIncorrect) {
            return;
        }

        this.model = newModel;
    }

    get yearOfManufacturing() {
        return this.yearOfManufacturing;
    }

    set yearOfManufacturing(newYearOfManufacturing) {
        const now = new Date();
        const currentYear = now.getFullYear();
        const isIncorrect = !checkValid(newYearOfManufacturing) || newYearOfManufacturing > currentYear || newYearOfManufacturing < 1900;

        if (isIncorrect) {
            return;
        };

        this.yearOfManufacturing = newYearOfManufacturing;
    }

    get maxSpeed() {
        return this.maxSpeed;
    }

    set maxSpeed(newMaxSpeed) {
        const isIncorrect = newMaxSpeed <= 100 || newMaxSpeed >= 300 || !checkValid(newMaxSpeed);

        if (isIncorrect) {
            return;
        };

        this.maxSpeed = newMaxSpeed;
    }

    get maxFuelVolume() {
        return this.maxFuelVolume;
    }

    set maxFuelVolume(newMaxFuelVolume) {
        const isIncorrect = newMaxFuelVolume <= 5 || newMaxFuelVolume >= 20 || !checkValid(newMaxFuelVolume);

        if (!isIncorrect) {
            return;
        };

        this.maxFuelVolume = newMaxFuelVolume;
    }

    get fuelConsumption() {
        return this.fuelConsumption;
    }

    set fuelConsumption(newFuelConsumption) {
        const isIncorrect = newFuelConsumption >= 10 || newFuelConsumption <= 25 || checkValid(newFuelConsumption);

        if (isIncorrect) {
            return;
        };

        this.fuelConsumption = newFuelConsumption;
    }

    get currentFuelVolume() {
        return this.currentFuelVolume;
    }

    get isStarted() {
        return this.isStarted;
    }

    get mileage() {
        return this.mileage;
    }
}

