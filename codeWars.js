//Primeira Questão
function positiveSum(arr) {
  let soma = 0;
 
  for(let i = 0; i < arr.length; i++) {
   if(arr[i] > 0) {
    soma += arr[i];
  }
 }
return soma;
}

//Segunda Questão
function tribonacci(signature,n){
  
   if(n === 0) {
    return []
  }
  
  if(n === 1) {
    return [1]
  }else{
    for (let i = 3; i <= n; i++) {
      signature[i] = signature[i - 1] + signature[i - 2] + signature[i - 3]
    }
    signature.pop()
    return signature
  }
}

//Terceira Questão
function withoutLast(arr) {
     return arr.slice(0,arr.length-1);
  }

  //Quarta Questão

  function likes(names) {
  
    if(names.length === 0){
      return "no one likes this";
    }
  
    for(let i = 0; i < names.length; i++){
      if(names.length === 1){
        return `${names[0]} likes this`
      }else if(names.length === 2){
       return `${names[0]} and ${names[1]} like this`
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  }
  }

  //Quinta questão
  function squareDigits(num){
    let numero = num.toString();
    let resultado = [];
      for (let i = 0; i < numero.length; i++){
        resultado[i] = numero[i] * numero[i];
      }
      return Number(resultado.join(''));
    }

    //Sexta Questão

    function oddOrEven(array) {
        var resultadoSaida = 0;
       for (var i = 0; i < array.length; i++)
       {resultadoSaida+=array[i];}
       if (resultadoSaida%2 == 0){
         return "even";
       }else{
         return "odd";
       }
       }

       //Sétima questão
       const binaryArrayToNumber = arr => {
      
        return parseInt(arr.join(``), 2)
      };

      //Oitava questão
      function friend(friends){
       
        let amigos = [];
        
        return friends.filter(amigos => amigos.length === 4);
      }

      //Nona questão
      function duplicateEncode(word){
        var resultado = {};
        var letras= word.toLowerCase().split('');
      
       letras.forEach(function(letras) {
          resultado[letras] = (resultado[letras] || 0) + 1;
        });
      
        return letras.map(function(letras) {
          return resultado[letras] === 1 ? '(' : ')';
        }).join('');
      }


        //Décima Questão
        function filter_list(l) {
            return l.filter(e => typeof e !== 'string');
        }

        //Décima primeira questão

        var stringToNumber = function(str){
           return parseInt(str);
          }

        //Décima segunda questão

        function sortByBit(array) {
  
            let validar = 0; 
              for (let i in array){
               validar += 2**array[i]
              }
              return validar;
            }

            //Décima terceira questão

            function getSum(a,b){
  
              let contador = 0;
              if (a == b){
                return a;
              }
              
              if(a < b){
                for (; a <= b; a++){
                  contador += a;
                }
              }else if (a > b){
                  for(; b <= a; b++){
                    contador += b;
                  }
              }
              return contador;
            }

            //Décima quarta questão

            function abbrevName(name){

              let [primeiroNome, segundoNome] = name.toUpperCase().split(' ');
              return primeiroNome[0] + '.' + segundoNome[0];
              
            }

            //Décima quinta questão
            function reverseWords(str) {
              // Go for it
                
                let mudePalavras = '';
                let troqueString = '';
              
                for (let i = 0; i < str.length; i++) {
                if (str[i] !== ' ') {
                 mudePalavras = str[i] + mudePalavras;
                } else {
                  troqueString += mudePalavras + ' ';
                  mudePalavras = '';
                }
              }
              return troqueString  + mudePalavras;
            }

//Décima sétima questão
    const helloWorld = () => {
  // feel free to change this into a function :)
  
   return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33)
 
};

//Décima oitava questão

function parseInt(string) {
  // TODO: it's your task now
  const numerosPorExtenso = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
const mult = { "hundred":100, "thousand":1000, "million": 1000000 };
  return string.split(/ |-/).reduce(function(value, palavra) {
    if (numerosPorExtenso[palavra]) value += numerosPorExtenso[palavra];
    if (mult[palavra]) value += mult[palavra] * (value % mult[palavra]) - (value % mult[palavra]);
    return value;
  },0);
}
