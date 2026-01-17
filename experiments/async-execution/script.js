// Async Execution

// 1
console.log("Start.."); // sync → call stack
setTimeout(() => {
	console.log("Async Task Completed"); // daftar async → call stack
}, 0);
console.log("Continue.."); // sync → call stack
