const fs = require('fs');
// 1 - what floor does Santa end up on?
// ( --> should go UP one floor 
// ) --> should go DOWN one floor

function question1() {
	fs.readFile('./santa.txt', (err, data) => {
		console.time('santa-time-q1');
		const directions = data.toString();
		const directionsArray = directions.split("");
		const answer = directionsArray.reduce((accumulator, currentValue) => {
			if (currentValue === "(") {
				return accumulator += 1
			} else if (currentValue === ")") {
				return accumulator -= 1;
			}
		}, 0)
		console.timeEnd('santa-time-q1');
		console.log('floor: ', answer);
	})
}

question1()

// 2 - When does Santa enter the basement?
function question2() {
	fs.readFile('santa.txt', (err, data) => {
		console.time('santa-time-q2');
		const directions = data.toString();
		const directionsArr = directions.split("");
		let accumulator = 0;
		let counter = 0;
		const answer = directionsArr.some((currentItem) => {
			if (currentItem === "(") {
				accumulator += 1
			} else if (currentItem === ")") {
				accumulator -= 1;
			}
			counter++
			return accumulator < 0;
		})
		console.timeEnd('santa-time-q2');
		console.log('basement entered at: ', counter);

	})
}

question2()
