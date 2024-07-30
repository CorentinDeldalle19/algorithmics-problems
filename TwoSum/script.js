// Leetcode project

/*
Étant donné un tableau d'entiers nums et un entier target, renvoyez les indices des deux nombres tels qu'ils totalisenttarget .
Vous pouvez supposer que chaque entrée aurait exactement une solution et que vous ne pouvez pas utiliser le même élément deux fois.
Vous pouvez renvoyer la réponse dans n'importe quel ordre.

Exemple 1:

Entrée : nums = [2,7,11,15], cible = 9
 Sortie : [0,1]
 Explication : Étant donné que nums[0] + nums[1] == 9, nous renvoyons [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let listIndex = []

    for (let i=0; i < nums.length; i++){
        for (let k=1; k < nums.length; k++){
            let num1 = nums[i];
            let num2 = nums[k];

            if (num1 + num2 === target){
                listIndex.push(i);
                listIndex.push(k);
                return listIndex;
            }
        }
    }


    return listIndex;
};