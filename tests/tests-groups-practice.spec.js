import{test} from '@playwright/test'; 
test.describe("Practice.cydeo",() => {
    
    test.beforeEach(async ({page}) => {
        await page.goto("https://the-internet-5chk.onrender.com/");
    }); 
    test.afterEach(async ({page}) => {
       await page.waitForTimeout(3000);
    } );    
     

    test("Verify the title of the page", async ({page}) => { 
        
        let actualTitle = await page.title();
        console.log("Actual Title: " + actualTitle);

    });
    test("Verify the URL of the page", async ({page}) => {
       
        let pageUrl = page.url();
        console.log("Page URL: " + pageUrl);
    });

    
    });