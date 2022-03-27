class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume;
    #isStarted;
    #mileage;

    get brand() {
        return this.#brand;
    }

    set brand(newBrand) {
        const isIncorrect = typeof newBrand !== 'string' || newBrand === '' || newBrand.length >= 50 || newBrand.length <= 1;
        
        if (isIncorrect) {
            return;
        }

        this.#brand = newBrand;
    }

    get model() {
        return this.#model;
    }
    
    set model(newModel) {
        const isIncorrect = typeof newModel !== 'string' || newModel === '' || newModel.length >= 50 || newModel.length <= 1;

        if (isIncorrect) {
            return;
        }

        this.#model = newModel;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(newYear) {
        const currentYear = new Date().getFullYear();
        const isIncorrect = !Number.isFinite(newYear) || newYear > currentYear || newYear <= 1900;

        if (isIncorrect) {
            return;
        };

        this.#yearOfManufacturing = newYear;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(newMaxSpeed) {
        const isIncorrect = newMaxSpeed <= 100 || newMaxSpeed >= 300 || !Number.isFinite(newMaxSpeed);

        if (isIncorrect) {
            return;
        };

        this.#maxSpeed = newMaxSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(newMaxFuelVolume) {
        const isIncorrect = newMaxFuelVolume <= 5 || newMaxFuelVolume >= 20 || !Number.isFinite(newMaxFuelVolume);

        if (isIncorrect) {
            return;
        };

        this.#maxFuelVolume = newMaxFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(newFuelConsumption) {
        const isIncorrect = newFuelConsumption >= 10 || newFuelConsumption <= 25 || !Number.isFinite(newFuelConsumption);

        if (isIncorrect) {
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
            throw new Error (`Машина ещё не заведена`)
        }

        this.#isStarted = false;
    }

    fillUpGasTank(fuelVolume) {
        if (!Number.isFinite(fuelVolume) || fuelVolume <= 0) {
            throw new Error (`Неверное количество топлива для заправки`);
        }

        const isFuel = (this.#currentFuelVolume + fuelVolume) > this.#maxFuelVolume;

        if (isFuel) {
            throw new Error (`Топливный бак переполнен`);
        }

        this.#currentFuelVolume += fuelVolume;
    }

    drive(speed, hours) {
        const distance = speed * hours;
        const requiredFuel = this.#fuelConsumption * distance / 100;
        const isIncorrectSpeed = !Number.isFinite(speed) || speed <= 0;
        const isIncorrectHours = !Number.isFinite(hours) || hours <= 0;

        if (isIncorrectSpeed) {
            throw new Error (`Неверная скорость`);
        }

        if (isIncorrectHours) {
            throw new Error (`Неверное количество часов`)
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

