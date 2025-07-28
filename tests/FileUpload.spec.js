const {test,expect}=require('@playwright/test')
test("File Upload Automation",async function ({page}) {
    page.goto("https://testpages.herokuapp.com/styled/file-upload-test.html");
    page.locator("#fileinput").setInputFiles("./FileUpload/Image1.jpg");
    page.locator("//*[@name='upload']").click();
    await expect(await page.locator("//*[contains(text(),'Uploaded File')]")).toBeVisible();
})