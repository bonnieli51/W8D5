Function.prototype.inherits = function(superClass) {
    function Surrogate() {
        
    }

    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

function MovingObject () {}

function Ship() {
}

Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

MovingObject.prototype.test = function() {
    console.log("Hello");
}

let ship = new Ship();

Asteroid.prototype.test = function() {
    console.log("World");
}

let asteroid = new Asteroid();

ship.test();
asteroid.test();
