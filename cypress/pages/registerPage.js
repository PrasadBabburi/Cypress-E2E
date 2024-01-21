export class registerPage{


    weblocators = {

        firstname: '#input-firstname',
        lastname: '#input-lastname',
        email: '#input-email',
        telphone: '#input-telephone',
        passwd: '#input-password',
        cnfpasswd: '#input-confirm',
        policycheckbox: 'input[type="checkbox"]',
        continuebutton: 'input[class="btn btn-primary"]' //.btn.btn-primary

    }

    openURL(URL){

        cy.visit(Cypress.env('URL'))
    }

    enterFistName(FName){


        cy.get(this.weblocators.firstname).type(FName)
    
    }

    enterLastName(LName){


        cy.get(this.weblocators.lastname).type(LName)
    
    }

    enterEmail(Email){


        cy.get(this.weblocators.email).type(Email)
    
    }

    entertelPhone(TelPhone){


        cy.get(this.weblocators.telphone).type(TelPhone)
    
    }

    enterPassword(password){


        cy.get(this.weblocators.passwd).type(password)
        cy.get(this.weblocators.cnfpasswd).type(password)
    
    }

    // entercnfPassword(cnfpassword){


        
    //     cy.get(this.weblocators.cnfpasswd).type(cnfpassword)
    
    // }

    selectCheckbox(){

        cy.get(this.weblocators.policycheckbox).check()
    }

    clickOnContinueButton(){

        cy.get(this.weblocators.continuebutton).click()
    }

}