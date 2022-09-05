export default class Controller {
    initialize(model, view) {
        this.model = model;
        this.view = view; 
        console.log("controller")
    } 

    buildTemplate(guitar) {
        return ` <tr class="customerrow"> 
        <td>${guitar.getSerialNumber()}</td> 
        <td>${guitar.getBuilder()}</td> 
        <td>${guitar.getModel()}</td> 
        <td>${guitar.getType()}</td> 
        <td>${guitar.getBackwood()}</td> 
        <td>${guitar.getTopwood()}</td> 
        <td>${guitar.getPrice()}</td> 
        <td><button type="button" id="${guitar.getSerialNumber()}">Delete </button></td> 
        </tr> 
        `
    }

    //nedstående kontakter controlleren the model
    snSearch(serialNumber) {
        console.log(serialNumber)
        const guitar = this.model.guitarList.getGuitar(serialNumber); 
        let template = "1";
        // template er controllerens svar til view med et svar 

        if (guitar !== null) {
            template= this.buildTemplate(guitar);
        } else {template = `
        
        <tr class="customerrow">
        <td colspan="8">Nothing to show</td>
        </tr>`; 
      }
       this.view.message(template); 
 
    } 

    search(searchGuitar) {
        const guitar = this.model.guitarList.search(searchGuitar); 
        let template = "";
        console.log(guitar)
        if (guitar !== null) {
            template= this.buildTemplate(guitar);
        } else {template = `
        
        <tr class="customerrow">
        <td colspan="8">Nothing to show</td>
        </tr>`; 
      }
       this.view.message(template); 
 
    } 

       showAllGuitars() {
        let template = "";
    
        for (const guitar of this.model.guitarList.allGuitars()) {
            template += this.buildTemplate(guitar);
          }
          this.view.message(template); 
       }


        newGuitar(guitar) {
            const doesGuitarAlreadyExist = this. model.guitarList.getGuitar(guitar.serialNumber);

            if (doesGuitarAlreadyExist === null) {
                this.model.guitarList.addGuitar(guitar.serialNumber, guitar.price, guitar.builder, guitar.model, guitar.type, guitar.backwood, guitar.topwood);
                this.view.snackbar("The guitar was saved");
                this.showAllGuitars();
            }  else {
                this.view.snackbar("The guitar already exist"); 
             }
        }

            deleteGuitar(sn) {
                this.model.guitarList.deleteGuitar(sn); 
                this.view.snackbar("The Guitar was deleted"); 
            }

}
