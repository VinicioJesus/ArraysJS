'use strict'

/************************************* 
 * MAP
 * Filter
 * Reduce
*/

// arrays no js podem armazenar mais de um tipo de dados... ele n]ao é um array puro.
// pode, string, int, boleano...
const numeros = [20, 131, 70, 279, 320]

// PROBLEMA: Acrescentar 100 a cada elemento

// --------Solução Imperativa--------

// const limite = numeros.length - 1
// let é variavel que vai mudar
// let numeros100 = []
// for (let i=0; i<=limite; i++ ){
//     numeros100[i] = numeros [i] + 100
// }

// -------- Solução declarativa ---------

// se quiser percorrer cada elemento e ca um deles fazer uma modificação, usar o .map
// MAP - Percorre o array podendo modificar ou não e 
// retornando um novo array de mesmo tamanho
// callbackfn é pra passar/chamar uma função
// 1ª Elemento
// 2ª Indice
// 3º Array
                    // elemento, indice, array nos parenteses ali     
const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)

console.log("numeros:", numeros)
console.log("numeros mais 100:", numeros100)



//  PROBLEMA - Criar um novo array com os numeros menores que 100

//  FILTER  Percorre todo o array filtrando dependendo de uma condição
// e retorna um array de mesmo tamanho ou menor.
// 1ª Elemento 
// 2ª Indice
// 3ª Array

const ehmenor100 = (numero) => numero <= 100 
const numerosMenores100 = numeros.filter(ehmenor100)

console.log("Numeros menores que 100:" , numerosMenores100)

/************************************
* somar todos com o for
*************************************/

// const limite = numeros.length - 1
// let total = 0

// for (let i = 0; i <=limite; i++) {
//     total += numeros[1]
    
// }

//somar todos os valores (elementos) 
//
// REDUCE - Percorre todo o array aplicando uma função (callback)
// e retornado um único valor.
//1ª Acumulador
//2ª Elemento
//3ª Índice
//4ª Array

const soma = (a,b) => a + b
const total = numeros.reduce (soma,0)

console.log("Numeros total do array:", total)

/****************************************************************
 *                                                              *
 *  PROBLEMAS:                                                  *    
 *  1= Criar um novo array com os valores ao quadrado           *
 *  2= Criar um novo array com os valores pares                 *
 *  3= calcular as médias dos valores                           *
 *  4= calcular a soma dos valores impares.                     *
 *  5= Calcular o valor total sabendo que cada valor tem        *
 *  20% de desconto.                                            *
 ****************************************************************/

// elemento, indice, array nos parenteses ali     
const quadrado = (numero) => numero * 2
const numerosQuadrado = numeros.map(quadrado)

console.log("Numeros ao quadrado:" , numerosQuadrado)

//******************************************************* */
const pares = (numero) => numero %2 == 0
const numerosPares = numeros.filter(pares)

console.log("Numeros Pares", numerosPares)

const numeroMedia = (a,b) => a + b / numeros.length
const media = numeros.reduce (numeroMedia,0)

console.log("Numeros média:", media)

const impares = (numero) => numero %2 == 1  
const numerosImpares = numeros.filter(impares)


console.log("Numeros Impares: ", numerosImpares)