/* Queues */

function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}

// this.enqueue will add an element to the end of the array.
// this.dequeue will remove and element from the front of the array.
// this.front will return the element at [0] index.
// this.size will return the amount of elements in the array.
// this.isEmpty will ask if there are any elements in the collection (array).
// this.print with console.log(); in a function will print the queue.

var ball = new Queue();

ball.enqueue('1');
ball.enqueue('2');
ball.enqueue('3');
ball.enqueue('4');
ball.enqueue('5');
ball.print();
ball.dequeue();
ball.dequeue();
ball.print();
console.log(ball.front());
console.log(ball.size());
console.log(ball.isEmpty());




// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();


function PriorityQueue () {
    var collection = [];
    this.printCollection = function() {
      (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){
            collection.push(element);
        } else {
            var added = false;
            for (var i=0; i<collection.length; i++){
                 if (element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
            if (!added){
                collection.push(element);
            }
        }
    };
    this.dequeue = function() {
        var value = collection.shift();
        return value[0];
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0);
    };
}








// var pq = new PriorityQueue();
// pq.enqueue(['Beau Carnes', 2]);
// pq.enqueue(['Quincy Larson', 3]);
// pq.enqueue(['Ewa Mitulska-Wójcik', 1])
// pq.enqueue(['Briana Swift', 2])
// pq.printCollection();
// pq.dequeue();
// console.log(pq.front());
// pq.printCollection();
