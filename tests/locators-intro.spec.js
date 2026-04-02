import {test} from "@playwright/test"; 


test("simple google test",async({page})=>{
 await page.goto("https://www.google.com/");
  await page.waitForTimeout(3000); 
 let searchBox = page.locator("//textarea[@id='APjFqb']");

 // await searchBox.type("CYDEO");
 await searchBox.fill("CYDEO");

 await page.waitForTimeout(3000);

 await searchBox.press("Enter");

 await page.waitForTimeout(3000);
});  
/*
<input class="b_searchbox ctxt no-outline rewgoo" id="uaseabox" name="query"
 data-ae="1" data-fsb="1" data-clonly="" aria-label="search"
  box="" submit="" button="" data-apl="1" data-fol="1" 
  maxlength="1000" autocapitalize="off" autocomplete="off" 
  autocorrect="off" spellcheck="false" role="combobox" 
  aria-autocomplete="both" aria-haspopup="true" 
  aria-expanded="true" aria-controls="xsw_as" aria-owns="xsw_as">
*/
//input[@id='uaseabox']

