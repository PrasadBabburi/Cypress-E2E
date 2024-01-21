
import { registerPage } from "../../pages/registerPage"
import registerData from '../../fixtures/registerData.json'

const registerobj = new registerPage()

describe(' test automation', ()=>{


    it('registration flow', ()=>{


        registerobj.openURL()
        registerobj.enterFistName(registerData.FName)
        registerobj.enterLastName(registerData.LName)
        registerobj.enterEmail(registerData.Email)
        registerobj.entertelPhone(registerData.telPhone)
        registerobj.enterPassword(registerData.password)
        registerobj.selectCheckbox()
        registerobj.clickOnContinueButton()

    })
})