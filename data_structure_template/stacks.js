/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "freeCodeCamp"

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop();
}

if (rword === word) {
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}



// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}


//this.push adds a value to the stack
//this.pop removes and returns the top value of a stack
//this.peek shows the value at the end of the stack


var stock = new Stack();
stock.push(1);
stock.push(2);
stock.push(3);
stock.push(4);
stock.push(5);
stock.push(6);

console.log(stock.peek());
console.log(stock.pop());
console.log(stock.peek());
console.log(stock.size());







// var myStack = new Stack();
//
// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// myStack.push("freeCodeCamp");
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
