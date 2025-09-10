const user = {
    firstName: 'Alice',
    lastName: 'Wonderland',

    get fullName(){
        console.log('...running the getter!');
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value){
        console.log('...running the setter!');

        //validate the input
        if(typeof value !== 'string' || value.split(' ').length < 2){
            console.error('provide full name');
            return;
        }
        const [first, last] = value.split(' ');
        this.firstName = first;
        this.lastName = last;
        
    }
};

user.fullName = 'Bob Builder'; 


console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);


