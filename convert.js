//  ! Convert Inch to Feet
function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feet = Math.floor(feetFraction);
  const inches = Math.round((feetFraction - feet) * 12);
  //   return `${feet}' ${inches}"`;
  if (inches != 0) {
    if (inches === 1) {
      return `${feet} Feet ${inches} Inch`;
    } else {
      return `${feet} Feet ${inches} Inches`;
    }
  } else {
    return `${feet} Feet`;
  }
}

console.log(inchToFeet(38));
