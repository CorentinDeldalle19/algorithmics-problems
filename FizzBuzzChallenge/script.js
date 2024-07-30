// FizzBuzz Challenge
// On récupère la liste des 100 premiers nombres, et on vérifie si chaque nombre est multiple de 5 ou de 3
// Si c'est un multiple de 3, on le met dans un dictionnaire avec pour clé ce nombre et pour valeur "Fizz"
// Si c'est un multiple de 5, on l'ajoute au dictionnaire avec pour clé ce nombre, et pour valeur "Buzz"
// Sinon la clé et la valeur sont ce nombre

function fizzbuzz(){
    result = {};
  
    for (let i=1; i<101; i++){
      if (i%3 === 0){
        result[i] = "Fizz";
      } else if (i%5 === 0) {
        result[i] = "Buzz"
      } else {
        result[i] = i;
      }
    }
    console.log(result);
  }
  
  fizzbuzz()
  
  // Version simplifiée avec l'opérateur ternaire
  
  function fizzbuzzV2(){
    result = {}
  
    for (let i = 1; i<101; i++){
      result[i] = (i%3 === 0 ? "Fizz" : "") + (i%5 === 0 ? "Buzz" : "") || i;
    }
  
    console.log(result);
  }
  
  fizzbuzzV2()