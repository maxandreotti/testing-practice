import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./progetto";

test ("funzione capitalize", () => {
  expect(capitalize("mela")).toBe("Mela")
})

test ("Stringa invertita", ()=> {
  expect(reverseString("itopinonavevanonipoti")).toBe("itopinonavevanonipoti")
})

test ("addizione 5 e 10", () => {
  expect(calculator.add(5, 10)).toBe(15)
})

test ("sottrazione 5 e 10", () => {
  expect(calculator.subtract(5, 10)).toBe(-5)
})

test ("divisione 5 e 10", () => {
  expect(calculator.divide(5, 10)).toBe(0.5)
})

test ("moltiplicazione 5 e 10", () => {
  expect(calculator.multiply(5, 10)).toBe(50)
})

test ("criptaggio di Cesare di Buongiorno!", () => {
  expect(caesarCipher("Buongiorno!", 8)).toBe("Jcwvoqwzvw!")
})

test('caesarCipher torna da z ad a', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher conserva maiuscole e minuscole', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('caesarCipher lascia invariati punteggiatura e spazi', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('caesarCipher lascia invariati cifre e accenti', () => {
  expect(caesarCipher('a1é', 3)).toBe('d1é');
});

test('analyzeArray esempio della consegna', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test('analyzeArray con un solo elemento', () => {
  expect(analyzeArray([5])).toEqual({ average: 5, min: 5, max: 5, length: 1 });
});

test('analyzeArray con negativi', () => {
  expect(analyzeArray([-2, -8, 4])).toEqual({ average: -2, min: -8, max: 4, length: 3 });
});
