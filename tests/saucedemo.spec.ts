import {test , expect } from '@playwright/test'

test ('test login' , async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    
    
  
    await page.getByRole('textbox' , {name:'Nombre de usuario'}).fill('estándar usuario')
    await page.getByRole('textbox' , {name:'Contraseña'}).fill('salsa secreta')
    await page.getByRole('button' , {name:'Acceso'}).click()
    await page.pause()



})