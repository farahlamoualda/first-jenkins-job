import {test } from "@playwright/test";

test.describe("Groups ", () => {  
    test.beforeAll(async () => { 
        console.log("before all  test case ");

    });
    test.beforeEach(async () => {
        console.log("before each test case");
    }); 

    test.afterEach(async () => {
        console.log("after each test case");
    });


    test("Test Case 1", async ({ page }) => { 
        console.log("Test Case 1 is executed");
    }); 

      test("Test Case 2", async ({ page }) =>  { 

    
        console.log("Test Case 2 is executed"); 
    });

       test("Test Case 3", async ({ page }) => { 
        console.log("Test Case 3 is executed");
       });
        
       test("Test Case 4", async ({ page }) => {
         console.log("Test Case 4 is executed");
       });

       test.afterAll(async () => {
        console.log("after all test case");
       });





});
