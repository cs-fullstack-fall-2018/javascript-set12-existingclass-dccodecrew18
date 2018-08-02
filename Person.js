class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var person1 = new Person( "Sally", 23, 132, 5 );
    var person2 = new Person( "Huey", 21, 156, 6);
    alert(person1.bodyMassIndex());
    var newArray = [];
    newArray.push(person1);
    newArray.push(person2);
    alert(newArray);

    person1.printPerson();

}

main();
