var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Object.defineProperty(Person.prototype, "fullname", {
        // the 'get' keyword makes this function as a readable variable
        // must return a value
        // must be a no-arg method
        get: function () {
            return "".concat(this.firstname || '', " ").concat(this.lastname || '');
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    Person.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    Person.prototype.print = function () {
        console.log("firstname is ".concat(this.firstname, " and lastname is ").concat(this.lastname));
    };
    return Person;
}());
var p1, p2, p3, p4;
p1 = new Person();
p2 = new Person('Vinod', 'Kumar');
p3 = new Person('Ramesh');
p4 = new Person(undefined, 'Rao');
console.log({ p1: p1, p2: p2, p3: p3, p4: p4 });
p1.print();
p2.print();
p3.print();
p4.print();
p3.firstname = 'Kishore';
p3.setLastname('Iyer');
p4.setFirstname('Venugopal');
console.log('p1.fullname', p1.fullname);
console.log('p2.fullname', p2.fullname);
console.log('p3.fullname', p3.fullname);
console.log('p4.fullname', p4.fullname);
