
import { test } from '@playwright/test';

test(' Getting the title of the page', async ({ page }) => {  

await page.goto("https://the-internet-5chk.onrender.com/");
// pause for 3 seconds
await page.waitForTimeout(3000);
let actualTitle = await page.title();
console.log(actualTitle);

});


test(' Getting the URL of the page', async ({page}) => {  
  await page.goto("https://the-internet-5chk.onrender.com/");
  let pageUrl = page.url();
  console.log( "Page URL: " + pageUrl);
});



test('Set the window size', async ({page}) => { 
  await page.goto("https://the-internet-5chk.onrender.com/");
  await page.waitForTimeout(3000);
  //await page.setViewportSize({ width: 1800, height: 1600 });
 // await page.waitForTimeout(3000);

});