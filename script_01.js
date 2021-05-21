
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: check!
3. Fkt. Grundrechenarten :: check!
4. Ausgabe in Konsole :: check!
*/

//ausgabe(rechner(getOp(),getZahl1(),4));

// Modul: Zahl eingeben | Test:
ausgabe(getZahl("1"));
ausgabe(getZahl("2"));
function getZahl(numStr) {
    let zahl = parseInt(prompt("Bitte Zahl " + numStr + " eingeben."))
    while (isNaN(zahl)){
        zahl = parseInt(prompt("Das ist keine Zahl. Bitte nochmal:"));
    }
    return zahl;     
}


// Modul: Operand eingeben | Test:
//ausgabe(getOp());
function getOp() {
  let op = prompt("Bitte + | - | * | / eingeben.")
  while (!isOpValid(op)) { // solange falsche eingabe --> schleife
      op = prompt("Bitte einen korrekten Operator eingeben!")
  }
    return op ; 
}

// Modul: Operand überprüfen | Test:
// ausgabe(isOpValid("+"));
// ausgabe(isOpValid("-"));
// ausgabe(isOpValid("*"));
// ausgabe(isOpValid("/"));
// ausgabe(isOpValid("#"));
// ausgabe(isOpValid(""));
// ausgabe(isOpValid());
function isOpValid(op) {
    
    /*
    switch (op) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
    */

    return op == "+" || op == "-" || op == "*" || op == "/";
    
}

// Modul: Rechenart auswählen | Tests:
// ausgabe(rechner("+",10,4));
// ausgabe(rechner("-",10,4));
// ausgabe(rechner("*",10,4));
// ausgabe(rechner("/",10,4));
// ausgabe(rechner("/",10,0));
// ausgabe(rechner("#?!",10,0));
function rechner(op,a,b) {
    switch (op) {
        case "+":
            return addieren(a,b);
        case "-":
            return subtrahieren(a,b);
        case "*":
            return multiplizieren(a,b);
        case "/":
            return dividieren(a,b);
        default:
            return "Irgendwas ging schief!"
    }
}

// Modul: Division a / b |  Test:
// ausgabe(dividieren(2,2));
// ausgabe(dividieren(0,5));
// ausgabe(dividieren(5,0));
function dividieren(a,b) {
    if(b!=0){
        return a / b;
    } 
    return "Divison durch 0 nicht OK!";
}

// Modul: Multiplikation a * b |  Test:
// ausgabe(multiplizieren(2,2));
// ausgabe(multiplizieren(0,2));
function multiplizieren(a,b) {
    return a * b;
}

// Modul: Subtraktion a - b |  Test:
// ausgabe(subtrahieren(2,1));
// ausgabe(subtrahieren(2,10));
function subtrahieren(a,b) {
   return a - b; 
}

// Modul: Addition a + b |  Test:
//ausgabe(addieren(2,1));
function addieren(a,b) {
   return a + b; 
}

// Modul: Konsolenausgabe |  Test:
//ausgabe("Hallo Welt");
function ausgabe(outputStr) {
    console.log(outputStr);
}