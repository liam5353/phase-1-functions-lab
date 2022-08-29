// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if(distance > 42) {
        return distance - 42
    } else {
        return 42 - distance
    }
}
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet(starting, ending) {
    const result = (ending - starting) * 264
    if(starting > ending) {
        return result * -1
    } else {
        return result
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet (start, destination)
    if (distance <= 400) {
        return 0
    }
}