import {expect,test} from '@playwright/test'
import { log } from 'console';
test('SignUp Form Testing',async function ({page}) {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator('#state').selectOption({label:'Assam'});  //By label attribute
    await page.waitForTimeout(1000);
    await page.locator('#state').selectOption({value:'Chhattisgarh'});  //By Value attribute 
    await page.waitForTimeout(1000);
    await page.locator('#state').selectOption({index:2});  //By index
    await page.waitForTimeout(1000);

    const States=await page.locator('#state').textContent();
    console.log('Dropdown val for state',States);
    expect(States.includes('Odisha')).toBeTruthy();

    var DropdownStatus=false;
    const stateElements=await page.$('#state');
    const OptionElements=await stateElements.$$('option')
    for(let i=0;i<OptionElements.length;i++){
        let val=await OptionElements[i].textContent();
        console.log("option value is ",val);
        if(val==="Rajasthan"){
            DropdownStatus=true;
            break;
        }
    }
    expect(DropdownStatus).toBeTruthy();

    page.locator('#hobbies').selectOption(['Swimming','Playing']);
    await page.waitForTimeout(1000);

})