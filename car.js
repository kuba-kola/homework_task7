class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        const isCorrectBrand = typeof newBrand === 'string' || newBrand !== '' || newBrand.length <= 50 || newBrand.length >= 1;
        
        if (!isCorrectBrand) {
            return;
        }

        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }
    
    set model(newModel) {
        const isCorrectModel = typeof newModel === 'string' || newModel !== '' || newModel.length <= 50 || newModel.length >= 1;

        if (!isCorrectModel) {
            return;
        }

        this.#model = newModel;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(newYear) {
        const currentYear = new Date().getFullYear();
        const isCorrectYear = Number.isFinite(newYear) || newYear >= 1900 || newYear <= currentYear;

        if (!isCorrectYear) {
            return;
        };

        this.#yearOfManufacturing = newYear;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(newMaxSpeed) {
        const isCorrectSpeed = Number.isFinite(newMaxSpeed) || newMaxSpeed >= 100 || newMaxSpeed <= 300;

        if (!isCorrectSpeed) {
            return;
        };

        this.#maxSpeed = newMaxSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(newMaxFuelVolume) {
        const isCorrectVolume = Number.isFinite(newMaxFuelVolume) || newMaxFuelVolume >= 5 || newMaxFuelVolume <= 20;

        if (!isCorrectVolume) {
            return;
        };

        this.#maxFuelVolume = newMaxFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(newFuelConsumption) {
        if (!Number.isFinite(newFuelConsumption)) {
            return;
        };

        this.#fuelConsumption = newFuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.isStarted) {
            throw new Error(`Машина уже заведена`);
        }
      
        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.isStarted) {
            throw new Error (`Машина ещё не заведена`);
        }

        this.#isStarted = false;
    }

    fillUpGasTank(fuelVolume) {
        if (!Number.isFinite(fuelVolume) || fuelVolume <= 0) {
            throw new Error (`Неверное количество топлива для заправки`);
        }

        const isFull = (this.#currentFuelVolume + fuelVolume) > this.#maxFuelVolume;

        if (isFull) {
            throw new Error (`Топливный бак переполнен`);
        }

        this.#currentFuelVolume += fuelVolume;
    }

    drive(speed, hours) {
        const distance = speed * hours;
        const requiredFuel = this.#fuelConsumption * distance / 100;
        const isCorrectSpeed = Number.isFinite(speed) || speed > 0;
        const isCorrectHours = Number.isFinite(hours) || hours > 0;

        if (!isCorrectSpeed) {
            throw new Error (`Неверная скорость`);
        }

        if (!isCorrectHours) {
            throw new Error (`Неверное количество часов`);
        }

        if (speed > this.#maxSpeed) {
            throw new Error(`Машина не может ехать так быстро`);
        }

        if (!this.#isStarted) {
            throw new Error(`Машина должна быть заведена, чтобы ехать`);
        }

        if (requiredFuel > this.#currentFuelVolume) {
            throw new Error(`Недостаточно топлива`);
        }

        this.#currentFuelVolume -= requiredFuel;
        this.#mileage += distance;
    }
}