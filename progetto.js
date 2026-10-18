function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1);
}

function reverseString(string) {
  let invertito = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertito = invertito + string[i];
  }
  return invertito;
}

const calculator = {
  add (a, b) {
    return a + b
  },
  subtract (a, b) {
    return a - b
  },
  divide (a, b) {
    return a / b
  },
  multiply (a, b) {
    return a * b
  }
}

const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function caesarCipher(string, shift) {
  let messaggioCriptato = "";
  for (let i = 0; i < string.length; i++) {
    if (alfabeto.includes(string[i])) {
      if (string[i].toUpperCase() !== string[i]){
      let a = string[i].charCodeAt(0)
      let b = a - 97 + shift;
      let c = b % 26;
      let d = c + 97;
      let letteraCriptata = String.fromCharCode(d);
      messaggioCriptato += letteraCriptata;
      } else {
      let a = string[i].charCodeAt(0)
      let b = a - 65 + shift;
      let c = b % 26;
      let d = c + 65;
      let letteraCriptata = String.fromCharCode(d);
      messaggioCriptato += letteraCriptata;
      }
    } else {
      messaggioCriptato += string[i];
    }
  }
  return messaggioCriptato;
}

function analyzeArray (array) {
  let sum = 0
  array.forEach(element => {
    sum += element
  });
  
  return { 
    average: sum / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}


export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }