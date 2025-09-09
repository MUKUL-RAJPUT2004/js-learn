function Animal(){
    this.speak =function(){
        return 'Animal speaking';
    };
}

// Animal.prototype.speak = function(){
//     return 'Animal speaking';
// };

function Dog(){

}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(){
    return 'woof!';
}

Dog.prototype.constructor = Dog;

let Dogg = new Dog;
console.log(Dogg.speak);
