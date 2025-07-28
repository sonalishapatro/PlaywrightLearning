const {test,expect}=require('@playwright/test')
test("Handelling ALert",async function ({page}) {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
    page.on('dialog',async (WindowDialog)=>{
        expect(WindowDialog.type()).toContain('alert');
        expect(WindowDialog.message()).toContain('I am an alert box!');
        WindowDialog.accept();
    })
    await page.locator("//*[@value='Show alert box']").click();
    await expect(await page.locator("//*[text()='You triggered and handled the alert dialog']")).toBeVisible();
})

test("Handelling Confirm Popup",async function ({page}) {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
    page.on('dialog',async (WindowDialog)=>{
        expect(WindowDialog.type()).toContain('confirm');
        expect(WindowDialog.message()).toContain('I am a confirm alert');
        WindowDialog.accept();
        // WindowDialog.dismiss(); //For clicking cancel 
    })
    await page.locator("//*[@value='Show confirm box']").click();
    await expect(await page.locator("//*[text()='You clicked OK, confirm returned true.']")).toBeVisible();
})

test("Handelling Prompt Popup",async function ({page}) {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html");
    page.on('dialog',async (WindowDialog)=>{
        expect(WindowDialog.type()).toContain('prompt');
        expect(WindowDialog.message()).toContain('I prompt you');
        WindowDialog.accept("sona");
        // WindowDialog.dismiss(); //For clicking cancel 
    })
    await page.locator("//*[@value='Show prompt box']").click();
    await expect(await page.locator('//*[contains(text(),"sona")]').first()).toBeVisible();
})
