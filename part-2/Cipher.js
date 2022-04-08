// broken
// const alphabet = "abcdefghijklmnopqrstuvwxyz!";
// const cipherBet = "";

// const shift = (n) => {
//   for (let i = 0; i < alphabet.length; i++) {
//     let offset = (i + n) % alphabet.length;
//     cipherBet += alphabet[offset];
//   }
// };

// const encode = (message) => {
//   let result = "";
//   message = message.toLowerCase();
//   for (let i = 0; i < message.length; i++) {
//     let index = alphabet.indexOf(message[i]);
//     result += cipherBet[index];
//   }
//   return result;
// };

// const decode = (message) => {
//   let result = "";
//   message = message.toLowerCase();
//   for (let i = 0; i < message.length; i++) {
//     let index = cipherBet.indexOf(message[i]);
//     result += alphabet[index];
//   }
//   return result;
// };

// console.log(encode("hello world"));

//html
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const form = document.forms[0];
const output = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  output.innerHTML = [...form.plaintext.value]
    .map((char) => encrypt(char))
    .join("");
});

const encrypt = (char) => {
  const shift = Number(form.shift.value);
  if (alphabet.includes(char.toUpperCase())) {
    const position = alphabet.indexOf(char.toUpperCase());
    const newPosition = (position + shift) % 26;
    return alphabet[newPosition];
  } else {
    return char;
  }
};
