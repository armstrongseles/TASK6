// Define the Person class
class Person {
    // Constructor to initialize the person details
    constructor(name, age, gender, email, phone) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
    }

    // Method to display person details
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }
}

// Create an instance of the Person class
const person1 = new Person('Armstrong Seles', 30, 'Male', 'armstrongseles.com', '7684764534');

// Display the details of the person
person1.displayDetails();
