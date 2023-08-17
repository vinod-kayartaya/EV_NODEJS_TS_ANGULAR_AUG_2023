var Person = /** @class */ (function () {
    function Person() {
        this.city = 'Bangalore';
        console.log('Person instantiated!');
    }
    return Person;
}());
var p1, p2;
p1 = new Person();
p1.firstname = 'Vinod';
p1.lastname = 'Kumar';
// p1.email = 'vinod@vinod.co';
p2 = new Person();
console.log({ p1: p1, p2: p2 });
