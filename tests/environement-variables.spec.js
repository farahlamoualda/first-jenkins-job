import { test } from '@playwright/test';

test('@env-test', ({page}) => {


    console.log(`UserName is: ${process.env.PRACTICE_USERNAME}`);
    console.log(`Password is: ${process.env.PRACTICE_PASSWORD}`);

});
test("Bypass authentication by encoding the credentials in base64 format", async ({
  page,
}) => {
  let encodedCredential2 = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`
    
  ).toString("base64");
  await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential2}` });
  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
});