// const distanceFromHqInBlocks = (a) => {
//   return a - 42
// };

// function distanceFromHqInBlocks(location) {
//   console.log(location);
//   return 42 - location;
// }
// function distanceFromHqInBlocks(blockNumber) {
//   if (blockNumber > 42) {
//     return blockNumber - 42;
//   } else {
//     return 42 - blockNumber;
//   }
// }
// //
// function distanceFromHqInFeet(someValue) {
//   distanceFromHqInBlocks(someValue);
// calls distanceFromHqInBlocks from inside the distanceFromHqInFeet
//function,passing the argument from distanceFromHqInFeet into
//distanceFromHqInBlocks
//the return value of distanceFromHqInBlocks can
//then be used to calculate feet
//}

//  takes in a pickuplocation --> 50
//returns the number of blocks from its headquarters --> 42

//distanceTravelledInFeet`
//  take in the beginning and destination blocks
//returns the number of feet travelled.
///block = 264

function distanceFromHqInBlocks(destination) {
  if (destination > 42) {
    return destination - 42;
  } else {
    return 42 - destination;
  }
}
function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}
function distanceTravelledInFeet(beginning, destination) {
  if (beginning < destination) {
    return (destination - beginning) * 264;
  } else {
    return (beginning - destination) * 264;
  }
}
function calculatesFarePrice(beginning, destination) {
  const distance = distanceTravelledInFeet(beginning, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
