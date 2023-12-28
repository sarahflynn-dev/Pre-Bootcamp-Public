var childHeight = 42;
function displayIfChildIsAbleToRideTheRollerCoaster() {
    if (childHeight > 52) {
        console.log("Get on that ride, kiddo!");
    }
    else {
        console.log("Sorry kid, better luck next year.");
    }
}
console.log("Let's see how tall you are!");
console.log("Looks like your height is ", childHeight, " inches.");
displayIfChildIsAbleToRideTheRollerCoaster();