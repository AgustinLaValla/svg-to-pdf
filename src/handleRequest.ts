import { Request, Response } from "express";
import { svg } from './constants';
import puppeteer from 'puppeteer';
import { writeFile } from 'fs/promises';

export const handleRequest = async (req: Request, res: Response) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(svg);

  const buffer = await page.pdf({width: 1080, height: 1080});

  await writeFile("sample.pdf", buffer);
  await writeFile('sample.svg', svg);

  await browser.close();


  return res.json({ok: true});
};