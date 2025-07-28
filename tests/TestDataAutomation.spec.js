import {test,expect} from "@playwright/test"
const testdata=JSON.parse(JSON.stringify(require("../TestData/SignUpData.json")))
test("TestData Automation Example",async function ({page}) {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.getByPlaceholder("Name").fill(testdata.name);
    await page.getByPlaceholder("Email").fill(testdata.email);
    await page.getByPlaceholder("Password").fill(testdata.password);
    await page.getByText(testdata.skill[1]).click();
    await page.locator(`//*[text()='${testdata.skill[2]}']`).click();
    await page.getByPlaceholder("Name").fill(testdata.place.City);
    await page.getByPlaceholder("Name").fill(testdata.place.pin);
})