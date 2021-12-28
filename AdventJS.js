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

console.log(ovejasFiltradas)

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

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false