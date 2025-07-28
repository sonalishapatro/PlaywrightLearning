import { expect,test } from "@playwright/test";
const LoginPage=require("../Pages/LoginPage")
const HomePage=require("../Pages/HomePage")
test("Automation of Login using POM",async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const LoginPageObj=new LoginPage(page);
    await LoginPageObj.LoginToApplication("admin@email.com","admin@123");
    const HomePgObj=new HomePage(page);
    await HomePgObj.VerifyHomePage();
    await HomePgObj.LogoutFromApplication();
    await LoginPageObj.VerifyLogin();
})