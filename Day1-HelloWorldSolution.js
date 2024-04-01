
var createHelloWorld = function () {
    console.log("Button clicked");
    return function (...args) {
        // return ("Hello World");
        console.log('Hello World');
    }
};
// console.log(createHelloWorld);


// function createHelloWorld(){
// 	console.log("Hello World");
// }

// createHelloWorld();