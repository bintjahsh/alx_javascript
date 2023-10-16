function addMeMaybe (number, theFunction) {
    number++;
    theFunction();
}

module.exports = {
    addMeMaybe: addMeMaybe
}