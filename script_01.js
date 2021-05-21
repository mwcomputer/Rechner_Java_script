
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c
1. Dateneingabe + -überprüfung :: 
2. Auswahl Rechenart :: 
3. Fkt. Grundrechenarten :: 
4. Ausgabe in Konsole :: check!
*/


// Modul: Division a / b |  Test:
ausgabe(dividieren(2,2));
ausgabe(dividieren(0,5));
ausgabe(dividieren(5,0));
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