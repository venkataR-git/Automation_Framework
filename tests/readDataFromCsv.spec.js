import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Read and parse the CSV file before the tests
const filePath = path.resolve('testdata/testdata.csv');
const rawCsv = fs.readFileSync(filePath, 'utf-8'); // Ensure it's read as a string
const records = parse(rawCsv, {
  columns: true,
  skip_empty_lines: true,
});

test.describe('CSV Data Test Suite', () => {
  // Iterate over each record and generate a test
  records.forEach((record) => {
    test(`Read data from CSV - ${record.id}`, async ({ page }) => {
      await page.goto('https://demoqa.com/automation-practice-form');

      // Fill out the form with the CSV data
      await page.locator('#firstName').fill(record.firstName);
      await page.locator('#lastName').fill(record.lastName);

      // Optionally, wait for a few seconds (can be adjusted or removed)
      await page.waitForTimeout(5000);
    });
  });
});
