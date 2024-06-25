import { pageIdToTranslationKeys } from "../data/pages";
import { PageTemplateId } from "../enums/enums";
import { LandingPage } from "../types";
import { isArray, isObject, isString } from "../utils/utils";
import fs from 'node:fs/promises';

const internalKeys = ['__component', 'id', 'pageTemplateId'];

class PageTranslationService {
 constructor () {
 }

 public generateTranslation(landing: LandingPage) {
  const output = this.parsePage(landing);

  const jsonData = JSON.stringify(output, null, 4);

  const filePath = `./output-${landing.__component}.json`;
  fs.writeFile(filePath, jsonData, { encoding: 'utf-8' });
 }

 private parsePage(landing: LandingPage) {
  switch (landing.__component) {
    case PageTemplateId.SERVICE_PAGE:
      return this.parseObject(landing, pageIdToTranslationKeys[PageTemplateId.SERVICE_PAGE]);
    case PageTemplateId.TECHNOLOGY_PAGE:
      return this.parseObject(landing, pageIdToTranslationKeys[PageTemplateId.TECHNOLOGY_PAGE]);
    default:
      return landing;
  }
 }

 private parseObject = (data: object, translationMap: object) => {
  const result = {};
  for (const key in data) {
    if (internalKeys.includes(key)) {
      result[key] = data[key];
      continue;
    };

    if (isString(data[key]) && translationMap[key]) {
      result[key] = this.translateText(data[key]);
      continue;
    }
    if (isObject(data[key]) && translationMap[key]) {
      result[key] = this.parseObject(data[key], translationMap[key]);
      continue;
    }

    if (isArray(data[key]) && translationMap[key]) {
      result[key] = this.parseArray(data[key], translationMap[key]);
      continue;
    }

    result[key] = data[key];

  }
  return result;
 }

 private parseArray = (data: any[], translationMap: object) => {
  const result = [];
  for (const item of data) {
    if (isString(item)) {
      result.push(this.translateText(item));
      continue;
    }
    if (isObject(item)) {
      result.push(this.parseObject(item, translationMap));
      continue;
    }

    if (isArray(item)) {
      result.push(this.parseArray(item, translationMap));
      continue;
    }
    result.push(item);
  }
  return result;
 };

 private translateText = (text: string) => '[==] Yay! Translated [==]';
}


export { PageTranslationService }
