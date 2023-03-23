// Code your solution in this file!

function distanceFromHqInBlocks(pickupSt, headquartersSt = 42) {
  let numberOfBlocks;
  if (headquartersSt >= pickupSt) {
    return numberOfBlocks = headquartersSt - pickupSt;
  }
  else {
    return numberOfBlocks = pickupSt - headquartersSt;
  }
}


function distanceFromHqInFeet(pickupSt, headquartersSt = 42) {
  let differenceInFeet = distanceFromHqInBlocks(pickupSt) * 264
  return differenceInFeet;
}


function distanceTravelledInFeet(start, destination) {
  let numberOfBlocks = start - destination
  if (numberOfBlocks <= 0) {
    numberOfBlocks = numberOfBlocks * -1;
  }
  return numberOfBlocks * 264
}


function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  let fare;
  if (distance <= 400) {
    return fare = 0
  }
  else if (distance >= 401 && distance <= 2000) {
    return fare = (distance - 400) * .02
  }
  else if (distance > 2000 && distance <= 2500) {
    return fare = 25
  }
  else {
    return fare = "cannot travel that far";
  }
}

// distanceFromHqInBlocks(50);

// distanceFromHqInFeet(50)

// console.log(`\n distanceTravelledInFeet(43, 48)`, distanceTravelledInFeet(43, 48))
// console.log(`\n distanceTravelledInFeet(50, 60)`, distanceTravelledInFeet(50, 60))
// console.log(`\n distanceTravelledInFeet(34, 28)`, distanceTravelledInFeet(34, 28))

// function calculatesFarePrice(start, destination) {
//   let distance = distanceTravelledInFeet(start, destination)
//   let fare;
//   if (distance <= 400) {
//     console.log(distance)
//     fare = 0
//     console.log(fare)
//     return fare
//   }
//   else if (distance >= 401 && distance <= 2000) {
//     fare = (distance - 400) * .02
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
//   else if (distance > 2000 && distance <= 2500) {
//     fare = 25
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
//   else {
//     fare = "cannot travel that far";
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
// }

// function calculatesFarePrice(start, destination) {
//   let distance = distanceTravelledInFeet(start, destination)
//   let fare;
//   if (distance <= 400) {
//     console.log(distance)
//     fare = 0
//     console.log(fare)
//     return fare
//   }
//   else if (distance >= 401 && distance <= 2000) {
//     fare = (distance - 400) * .02
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
//   else if (distance > 2000 && distance <= 2500) {
//     fare = 25
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
//   else {
//     fare = "cannot travel that far";
//     console.log(distance)
//     console.log(fare)
//     return fare
//   }
// }

// console.log(`\n calculatesFarePrice(43, 44)`, calculatesFarePrice(43, 44))
// console.log(`\n calculatesFarePrice(34, 32)`, calculatesFarePrice(34, 32))
// console.log(`\n calculatesFarePrice(50, 58)`, calculatesFarePrice(50, 58))
// console.log(`\n calculatesFarePrice(34, 27)`, calculatesFarePrice(34, 27))
// console.log(`\n calculatesFarePrice(3, 88)`, calculatesFarePrice(3, 88))
