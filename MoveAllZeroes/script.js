// On a une liste non triée et on doit placé les éros au debut de la liste
// Premier execution, on utilise un second tableau

function moveAllZeroes(tab){
    const result = [];
  
    for (let i=0; i < tab.length; i++){
      if (tab[i] === 0){
        result.push(0)
      }
    }

    for (let i=0; i < tab.length; i++){
        if (tab[i] !== 0){
          result.push(tab[i])
        }
      }
    console.log(result)
} 
  
moveAllZeroes([0, 1, 0, 3, 12]);

// Deuxieme version avec un seul tableau

function moveAllZeroesV2(tab){
    let start = tab.length - 1;
    let readIndex = start // Patron
    let writeIndex = start // Assistant

    while (readIndex >= 0){
        if (tab[readIndex] !== 0){
            tab[writeIndex] = tab[readIndex];
            writeIndex--;
        }
        readIndex--;    
    }

    for (let k=0; k <= writeIndex; k++){
        tab[k] = 0;
    }

    console.log(tab);
}

moveAllZeroesV2([0, 6, 9, 0, 0, 0, 5, 4, 3])