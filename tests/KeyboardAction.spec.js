const {test,expect}=require('@playwright/test')
test("Keyboard Action Automation",async function ({page}) {
    await page.goto("https://www.google.com/");
    // await page.locator("//textarea[@name='q']").type("Playwright");
    // await page.keyboard.press("Control+A");
    // await page.keyboard.press("Control+C");
    // await page.keyboard.press("Backspace");
    // await page.waitForTimeout(1000)
    // await page.locator("//textarea[@name='q']").focus();
    // await page.keyboard.press("Control+V");
    // await page.keyboard.press("Enter");

    await page.locator("//textarea[@name='q']").focus();
    await page.keyboard.type("playwright automation!");
    await page.waitForTimeout(1000);
    await page.keyboard.press("ArrowLeft");
    await page.waitForTimeout(1000);

    await page.keyboard.down("Shift");
    for(let i=0;i<10;i++){
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.press('Backspace');
    await page.keyboard.up('Shift');
    await page.waitForTimeout(1000);
    
    await page.keyboard.press("Enter");
})