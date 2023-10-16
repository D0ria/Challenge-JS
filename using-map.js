function citiesOnly(myArray) {
    let city = myArray.map((firstIndex) => {
        return firstIndex.city
    })
    return city
}

function upperCasingStates(arr) {
  return arr.map(function (string) {
    let arr = string.split(" ");
    return arr
      .map(function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      })
      .join(" ");
  });
}

console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ]))

  function fahrenheitToCelsius(degrees) {
    return degrees.map(function (str) {
      return Math.floor(((str.split("°F")[0] - 32) * 5) / 9) + "°C";
    });
  }

function trimTemp(states){
  let array = states.map(temp=>{
      const regex = /\s/g
      const resRegex = new RegExp(regex)
      let strin = temp.temperature
      let str = strin.match(resRegex)
      let res = strin.replace(resRegex,'')
      temp.temperature = res
      return temp
  })
  return array
}

console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F']))

function tempForecasts(states){
  let array = states.map(all =>{
      const regex = /\s/g
      const resRegex = new RegExp(regex)
      const regexSpace = /\s\w/g
      const regexSp = new RegExp(regexSpace)
      let strin = all.temperature
      let res2 = all.state.match(regexSp)
      let str = strin.match(resRegex)
      let res = strin.replace(resRegex,'')
      if(res2!== null){
          all.state = all.state.replace(regexSp,res2[0].toUpperCase())
      }
      res = parseInt(res)
      let cel = (res -32)*5/9
      cel = Math.floor(cel)
      let strRes = cel+'°Celsius in '+all.city+', ' + all.state[0].toUpperCase()+all.state.slice(1)
      return strRes
  })  
  return array
}