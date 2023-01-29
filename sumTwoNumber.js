const sumTowNumber = (...value) => {
      let sum = 0
      for(let num of value)
             sum += num
    return sum
}

console.log(sumTowNumber(5,10,12,13));