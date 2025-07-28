import { expect,test } from "@playwright/test";
class LoginPage{
    constructor(page){
        this.page=page;
        this.email="#email1"
        this.password="//input[@id='password1']"
        this.signinBtn="//button[normalize-space()='Sign in']"
        this.signinLbl="//h2[normalize-space()='Sign In']"
    }
    async LoginToApplication(email,pswrd){
        await this.page.fill(this.email,email);
        await this.page.fill(this.password,pswrd);
        await this.page.click(this.signinBtn);
    }
    async VerifyLogin(){
        await expect(this.page.locator(this.signinLbl)).toBeVisible();
    }
}
module.exports=LoginPage