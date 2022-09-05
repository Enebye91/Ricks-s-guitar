import Inventory from "../utils/inventoryClass.js";

export default class Model {
    constructor() {
        this.guitarList = new Inventory;
        // this.guitarList.addGuitar("34-343",  3129,75, "Gibson", "Les Paul", "Electric", "Maple", "Walnut");
        // this.guitarList.addGuitar("72-323",  4129,75, "Fender", "Stratocaster","Electric", "Ceder", "Mahogany");
        console.log("model")
    }
 
    
    /* Json */

    initialize(guitars) {

        for (const guitar of guitars) {
        this.guitarList.addGuitar(guitar.serialNumber, guitar.price, guitar.builder,
        guitar.model, guitar.type, guitar.backwood, guitar.topwood); 
        }    
    }
}