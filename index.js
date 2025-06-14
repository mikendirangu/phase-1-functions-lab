// Code your solution in this file!
// Scuber's HQ is on 42nd Street
const hqStreet = 42;

// 1️⃣ Returns the number of blocks from Scuber's headquarters
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - hqStreet);
}

// 2️⃣ Returns the number of feet from Scuber's headquarters
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

// 3️⃣ Calculates the number of feet traveled between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// 4️⃣ Calculates the fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
