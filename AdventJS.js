// Adviento 1
const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]

function contarOvejas(ovejas) {
    const resultado = ovejas.filter(e => e.color == 'rojo' && e.name.toLowerCase().includes('n') && e.name.toLowerCase().includes('a'));
    return resultado
}
  
const ovejasFiltradas = contarOvejas(ovejas)

// console.log(ovejasFiltradas)

// Adviento 20
function pangram(letter) {
   const abecedario = 'abcdefghijklmnñopqrstuvwxyz'
   const tranformacion = letter.toLowerCase();
   for (let i = 0; i < abecedario.length; i++){
     if (!tranformacion.includes(abecedario[i])){
       return false;
     }
   }
   return true;
}

// console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
// console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true
// console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
// console.log(pangram('De la a a la z, nos faltan letras')) // false

// Adviento 18
function fixFiles(files) {
  const filesCount = {}
  return files.map(file => {
    console.log (filesCount)
      const fileCount = filesCount[file]
      console.log (fileCount)
      if (fileCount >= 0){
        filesCount[file] = fileCount + 1
        return `${file}(${filesCount[file]})`
      }
      filesCount[file] = 0
      return file
  })
}

// const files = ['photo', 'postcard', 'photo', 'photo', 'video']
// console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
// const files2 = ['file', 'file', 'file', 'game', 'game']
// console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// Adviento 16
function decodeNumbers(symbols) {
  let misterio = [];
  let solucion = 0;
  const separar = symbols.split('');
 

  for (let i = 0; i < separar.length; i++){
    switch(separar[i]) {
      case ".":
        misterio.push(1);
        break;
      case ",":
        misterio.push(5);
        break;
      case ":":
        misterio.push(10);
        break;
      case ";":
        misterio.push(50);
        break;
      case "!":
        misterio.push(100);
        break;
    }
  }

  for (let i = 0; i < separar.length; i++){
    if (misterio[i + 1] > misterio[i]){
      misterio[i] = - misterio[i]
    }
    solucion += misterio[i];
  }
   return solucion
}

// console.log(decodeNumbers('...')) // 3
// console.log(decodeNumbers('.,')) // 4 (5 - 1)
// console.log(decodeNumbers(';.W')) // NaN

// Adviento 5
function daysToXmas(date) {
  const referencia = new Date('Dec 25, 2021')
  const dia = 1000 * 60 * 60 * 24
  return Math.ceil((referencia - date)/dia)
}

const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5

// Adviento 13
function wrapGifts(gifts) {
  const tamaño = gifts[0].length
  let añadir = ""
  for (let i = 0; i < tamaño + 2; i++){
    añadir += "*"
  }
  const regalitos = gifts.map(e => `*${e}*`)
  regalitos.unshift(añadir)
  regalitos.push(añadir)
  return regalitos
}

console.log(wrapGifts(["📷", "⚽️"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/

// Adviento 2
const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
  const trozos = letter.trim().split(' ')
  const filtrado = trozos.filter(e => !e.includes('_'))
  const acumulacion = filtrado.reduce((acc, ele) => {
    acc[ele] = (acc[ele] || 0) + 1
    // console.log(acc)
    return acc
  }, {})
  return acumulacion
}

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

// Adviento 3

