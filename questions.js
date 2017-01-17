var selectElementsStartingWithA = function(array) {
	var tab = new Array;
	for(i=0; i<array.length; i++){
		if(array[i][0]=="a") {
			tab.push(array[i]);
		}
	}
    return tab ;

}

var selectElementsStartingWithVowel = function(array) {
	var vowel = ["a","e","i","o","u","y"];
    var tab = new Array;
	for(i=0; i<array.length; i++){
		for(x=0; x<vowel.length; x++)
		if(array[i][0]==vowel[x]) {
			tab.push(array[i]);

		}
		
	}
    return tab ;

}


var removeNullElements = function(array) {
    var tab = new Array;
    for (i=0; i < array.length; i++) {
    	if (array[i]!= null){
    	tab.push(array[i]);
    }
    }


    return tab;
}

var removeNullAndFalseElements = function(array) {
    var tab = new Array;
    for (i=0; i < array.length; i++) {
    	if (parseInt(array[i]) == 0){
    		tab.push(array[i]);

    	}
    	if (array[i]!= null && array[i] != false) {
    	tab.push(array[i]);
    }
    }


    return tab;
}

var reverseWordsInArray = function(array) {
	var tab = new Array;
	var word ='';

    for (i=0; i < array.length; i++) {
    	word='';
    	for (x=array[i].length-1; x>=0; x--){
    		word+=(array[i][x]);
    	}
    		
    	tab.push(word);
    }

    return tab;
    

}

var everyPossiblePair = function(array) {
	var tab = new Array;
	for(i=0;i<array.length;i++){
		for(j=array.length-1;j>=0;j--){
		
			if(array[i]>array[j]){
				tab.push([array[j],array[i]]);
			}
		}
	}	
    return tab;
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
var allElementsExceptFirstThree = function(array) {
    /*Je localise le 4eme élément
    j'affiche a partir du 4eme élément
    */
    var tab = new Array;
    //boucle for pour lire tout le tableau
    for (i = 3; i <= array.length-1; i++) { //localisation du 4eme éléments à l'index 3
        tab.push(array[i]);                 //insertion de l'élement dans la var
    }
    return tab;
}

var addElementToBeginning = function(array, element) {
    //"return array" pour voir le tableau
    //"return element" pour voir
    //enregistrer le tableau précédent
    //créer un tableau = element
    //ajouter le premier tableau a la suite
    
    var tab = array;
    tab.unshift(element);   
    return tab;


   //déplacer les élements du tableau d'un index+1 en commençant par le dernier
   //puis ajouter le 1er
   //afficher
/*
   var tab = new Array;
   for (i = array.length; i>0; i--) {
       tab[i+1]+=array[i];
   }
   return tab;*/
}
var sortByLastLetter = function(array) {
    //inverser l'ordre des lettres dans les mots
    //comparer l'index[0] , trier avec sort()
    //remettre les lettres dans l'ordres
    
    var tab= new Array;
    var tab1=new Array;
    //variable de stockage
    var l='';
//boucle pour inverser l'ordre des lettres
    for (i = 0; i <array.length; i++) {
        l='';//reset de la variable
        for (j = array[i].length-1; j >= 0; j--) {//boucle
            l+=array[i][j];
        }
        tab1.push(l);//insertion des entrées dans la var
    }
//trie par ordre alphabetique (avec le 'Unicode' des premières lettres)
   tab1.sort();
//boucle pour remettre dans l'ordre les lettres
    for (i = 0; i <tab1.length; i++) {
        l='';//reset variable
        for (j = tab1[i].length-1; j >= 0; j--) {//boucle
            l+=tab1[i][j];
        }
        tab.push(l);//insertion des entrées dans la var
    }
    return tab;
}
/*
for (i=0; i < array.length; i++) {
        word='';
        for (x=array[i].length-1; x>=0; x--){
            word+=(array[i][x]);
*/
var getFirstHalf = function(string) {
    //return string==> pour voir le mot
    //calcul de la longueur du mot
    //divise pas 2 la longueur
    //affiche le nombre d'index calculé juste avant

    var word='';
    var demi='';
    demi=parseInt(string.length)/2;
    for (i = 0; i < demi; i++) {
        word+=string[i];
    }
    return word;
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
