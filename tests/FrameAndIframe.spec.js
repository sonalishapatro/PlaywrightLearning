const {test,expect}=require('@playwright/test')
test("Handelling Fram and Iframe",async function ({page}) {
    await page.goto('https://practice-automation.com/iframes/');
    const frame1=await page.frameLocator("#iframe-1");
    await frame1.locator("//a[text()='Docs']").click();
    await expect(await frame1.locator("//h1[text()='Installation']")).toBeVisible();
})