const {test,expect}=require('@playwright/test')
test("Multiple Tab Automation",async function ({browser}) {
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const [newPage]=await Promise.all(
        [
            context.waitForEvent('page'),
            page.locator("//*[text()='Connect with us']/..//a[@href='https://www.facebook.com/groups/256655817858291']").click()
        ]
    )
    await newPage.locator("//*[text()='Email address or phone number']/..//input").type("abc@gmail.com");
    await newPage.waitForTimeout(2000);
    await newPage.close();
    await page.waitForTimeout(2000);
    await page.locator('#email1').fill('admin@email.com');
    await page.waitForTimeout(1000);
})