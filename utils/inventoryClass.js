import Guitar from "./guitarClass.js" 

export default class Inventory {
    constructor() {
        this.guitars = [];
    } 

    addGuitar(serialNumber, price, builder, model, type, backwood, 
    topwood) {
           const newGuitar = new Guitar (serialNumber, price, builder, model, type, backwood, 
            topwood); 
            this.guitars.push(newGuitar);
    }


    // en metode som er i stand til at finde en guitar i listen med serialnumber. Her skal du bruge et for-loop

getGuitar(serialNumber) { 
  for (const guitar of this.guitars) {
    if (serialNumber === guitar.serialNumber) {
        return guitar;
    }
  }


  // The value null represents the intentional absence of an object value. Bruges til at give en besked om at der ikke er fundet en guitar til brugeres. 
  return null; 
} 

// Denne class har også brug for en søgefunktion

search(idealGuitar) {
    // Destructuring
    const {serialNumber, price, builder, model, type, 
    backwood, topwood} = idealGuitar; 

    for (const guitar of this.guitars) {
        if (guitar.price <= price && guitar.builder===builder && guitar.model===model && guitar.type===type && guitar.backwood===backwood && guitar.topwood===topwood) {
                return guitar; 
            }
        }
        return null; 
    }

     allGuitars() {
        return this.guitars; 
     }



     deleteGuitar(sn) {
        const index=this.guitars.map(guitar => guitar.serialNumber).indexOf(sn); 
        this.guitars.splice(index, 1);  // Removes guitar from guitar object list
     }
} 




 
