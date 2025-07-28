const {test,expect}=require('@playwright/test')
test("AutoSuggestion Handeller1",async function ({page}) {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@name='q']").type("gukesh");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");
})

test("AutoSuggestion Handeller2",async function ({page}) {
    await page.goto("https://www.google.com/");
    await page.locator("//textarea[@name='q']").type("Mukesh otwani");
    const lists=await page.$$("li");
    for(let i=0;i<lists.length;i++){
        const val=await lists[i].textContent();
        if(val.includes("playwright")){
            await lists[i].click();
            break;
        }
    }
})