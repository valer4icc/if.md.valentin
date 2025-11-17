function letterGrade(num) {
  if (num <= 59) {
    return "F"
  } else if (num >= 60 && num <= 62) {
    return "D-"
  } else if (num >= 63 && num <= 66) {
    return "D"
  } else if (num >= 67 && num <= 69) {
    return "D+"
  } else if ( num >= 70 && num <= 72) {
    return "C-"
  } else if (num >= 73 && num <= 76) {
    return "C"
  } else if (num >= 67 && num <= 79) {
    return "C+"
  } else if (num >= 80 && num <= 82) {
    return "B-"
  } else if (num >= 83 && num <= 86) {
    return "B"
  } else if (num >= 87 && num <= 89) {
    return "B+"
  } else if (num >= 90 && num <= 92) {
    return "A-"
  } else if (num >= 93 && num <= 96) {
    return "A"
  } else if (num >= 97 && num <= 100) {
    return "A+"
  }
}

console.log(letterGrade(93))