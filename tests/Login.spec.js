import {test,expect} from '@playwright/test'

test('Login To OrangeHRM',async function ({page}) {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').type('Admin',{delay:100});
    await page.locator("input[name='password']").type('admin123');
    await page.locator("//*[@type='submit']").click();
    await page.getByAltText('profile picture').first().click();
    await page.getByText('Logout').click();
    //await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/);
})
test.use({viewport:{width:1000,height:550}})
test("Error message validation uon invalid login",async function ({page}) {
    console.log(await page.viewportSize().width);
    console.log(await page.viewportSize().height);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').type('Admin');
    await page.locator("input[name='password']").type("admins");
    await page.locator("//*[@type='submit']").click();

    const ErrMsg = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
    console.log(ErrMsg);
    await expect(page.getByText('Invalid credentials')).toBeVisible(); //checking the xpath is visible or not 
    expect(ErrMsg.includes('Invalid'));
    await expect(ErrMsg==='Invalid credentials').toBeTruthy();
})