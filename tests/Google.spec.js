const {test,expect}=require('@playwright/test')
test("Verify Application Title",async function ({page}) {
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.goto('https://www.google.com/');
    const url =await page.url();
    expect(page).toHaveURL('https://www.google.com/');
    const title=await page.title();
    expect(page).toHaveTitle('Google');
})