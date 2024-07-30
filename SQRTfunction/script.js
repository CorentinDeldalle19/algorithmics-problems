// LeetCode project

/*
Étant donné un entier non négatif x, renvoie la racine carrée de xarrondie à l'entier 
inférieur le plus proche . L'entier renvoyé doit également être non négatif.
Vous ne devez utiliser aucune fonction ou opérateur d’exposant intégré.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) return x

    let left = 2;
    let right = Math.floor(x / 2);

    while (left <= right){
        mid = Math.floor((left + right)/2);
        square = mid * mid;

        if (square === x){
            return mid;
        } else if (square < x){
            left = mid + 1;
        } else{
            right = mid - 1;
        }
    }
    return right;
};