/*
    CIT 281 Project 1
    Name: Josh Maruyama
*/
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function randomString(){
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = "";
    for (i = 0; i <= getRandomInteger(5, 26); i++){
        string += letters.charAt(getRandomInteger(0, 26));
    }
    return string;
}

