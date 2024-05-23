// Define the Uber class
class Uber {
    // Constructor to initialize base fare and per kilometer rate
    constructor(baseFare, ratePerKm) {
        this.baseFare = baseFare;
        this.ratePerKm = ratePerKm;
    }

    // Method to calculate the price
    calculatePrice(distance) {
        return this.baseFare + (this.ratePerKm * distance);
    }
}

// Create an instance of the Uber class
const uber1 = new Uber(50, 10); // Base fare: 50, Rate per km: 10

// Calculate the price for a given distance
const distance = 15; // Distance in kilometers
const price = uber1.calculatePrice(distance);

console.log(`The Uber price for ${distance} km is: $${price}`);
