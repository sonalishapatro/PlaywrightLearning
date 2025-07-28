// @ts-check
import { test, expect } from '@playwright/test';

test('My First Test',async function({page}) {
  expect(100).toBe(100);
})

test('My Second test',async function ({page}) {
  expect("Sonalisha Patro").toContain("Sona");
})

test.skip('My third test',async function ({page}) {
  expect(false).toBeTruthy();
})
test('My Fourth test',async function ({page}) {
  expect(true).toBeTruthy();
})
test('My Fifth test',async function ({page}) {
  expect(("sonalis").includes("s")).toBeTruthy();
})
