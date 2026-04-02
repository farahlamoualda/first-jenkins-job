import { test } from '@playwright/test';

test("Google Test", async ({ page }) => {
  // navigate to google homepage
  await page.goto("https://www.google.com/");
  // wait for 3 seconds
  await page.waitForTimeout(3000);
});

       
test('Youtube test', async ({page}) => { 
    await page.goto("https://www.youtube.com/");
    await page.waitForTimeout(3000);

});