import { expect, browser, $ } from '@wdio/globals'

describe('To-do List', () => {
    it('can add and remove a task', async () => {
      await browser.url('http://localhost:5173');
  
      const taskInput = await $('input[placeholder="Enter a task"]');
      const addButton = await $('button');
  
      await taskInput.setValue('Write WebDriverIO test');
      await addButton.click();
  
      const taskText = await $('li*=Write WebDriverIO test');
      await expect(taskText).toBeDisplayed();
  
      const deleteButton = await taskText.$('button');
      await deleteButton.click();
  
      await expect(taskText).not.toBeDisplayed();
    });
  });
  

