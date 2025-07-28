const {test,expect}=require('@playwright/test')
test("Mouse Hover Automation",async function ({page}) {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator('#email1').fill('admin@email.com');
    await page.locator('#password1').fill('admin@123');
    await page.getByRole("button",{name:'Sign in'}).click();
    await page.locator("//*[text()='Manage']").hover();
    await page.locator("//a[normalize-space()='Manage Courses']").click();
})