const {test,expect}=require('@playwright/test')
test("Wait for load state",async function ({page}) {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.locator("//*[text()='New user? Signup']").click();
    await page.waitForLoadState("networkidle");
    const ChkBoxCount=await page.locator("//*[@type='checkbox']").count();
    expect(ChkBoxCount).toBe(9)
})