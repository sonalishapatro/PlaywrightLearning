import {test,expect} from "@playwright/test";
const testdata=JSON.parse(JSON.stringify(require("../TestData/DataDrivenTestData.json")))

test.describe("Data Driven Testing",function(){
    for(let data of testdata){
        test(`User Login according to available data ${data.id}`,async function ({page}) {
            await page.goto("https://freelance-learn-automation.vercel.app/login");
            await page.getByPlaceholder("Enter Email").type(data.email);
            await page.getByPlaceholder("Enter Password").type(data.password);
        })
    }
})