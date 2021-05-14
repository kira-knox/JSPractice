/* Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and 
false otherwise. */

function timeForMilkAndCookies(date) {
    // In JS months are indexed from 0 to 11.
	const month = date.getMonth();
	const day = date.getDate();
	if(month === 11 && day === 24) {
		return true;
	} else {
		return false;
	}
}

console.log(timeForMilkAndCookies(new Date(2012, 11, 24)));
console.log(timeForMilkAndCookies(new Date(1999, 0, 24)));
console.log(timeForMilkAndCookies(new Date(2156, 11, 3)));