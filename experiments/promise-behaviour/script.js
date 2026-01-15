//Building Simple Promise

// 1.
console.log("Start..");
Promise.resolve("Hello World").then((value) => console.log(value));
console.log("End..");

// 2.
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve()
	.then(() => console.log("C"))
	.then(() => console.log("D"));

console.log("E");
