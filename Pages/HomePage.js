import { expect,test } from "@playwright/test";
class HomePage{
    constructor(page){
        this.page=page
        this.HomeManageLabel="//span[normalize-space()='Manage']"
        this.MenuBtn="//img[@alt='menu']"
        this.LogOutBtn="//button[normalize-space()='Sign out']"
    }
    async VerifyHomePage(){
        await expect(this.page.locator(this.HomeManageLabel)).toBeVisible();
    }
    async LogoutFromApplication(){
        await this.page.click(this.MenuBtn);
        await this.page.click(this.LogOutBtn);
    }
}
module.exports=HomePage