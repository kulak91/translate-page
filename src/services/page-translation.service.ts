import { pageIdToTranslationKeys } from "../translation-schemas/pages";
import { PageTemplateId } from "../enums/enums";
import { PageData } from "../types";
import { isArray, isObject, isString } from "../utils/utils";
import fs from 'node:fs/promises';

const internalKeys = ['__component', 'id', 'pageTemplateId'];
const keepIdKeys = ['icon', 'image', 'logo'];

class PageTranslationService {
 constructor () {
 }

 public generateTranslation(landing: PageData) {
  const output = this.parsePage(landing);

  const jsonData = JSON.stringify(output, null, 4);

  const content = landing.attributes.content[0];

  const filePath = `./output-${content.__component}.json`;
  fs.writeFile(filePath, jsonData, { encoding: 'utf-8' });
 }

 private parsePage(landing: PageData) {
  const content = landing.attributes.content[0];

  switch (content.__component) {
    case PageTemplateId.SERVICE_PAGE:
      return this.parseObject({ data: landing, translationMap: pageIdToTranslationKeys[PageTemplateId.SERVICE_PAGE] });
    case PageTemplateId.TECHNOLOGY_PAGE:
      return this.parseObject({ data: landing, translationMap: pageIdToTranslationKeys[PageTemplateId.TECHNOLOGY_PAGE] });
    default:
      return landing;
  }
 }

 private parseObject = ({ data, keepId = false, translationMap } : { data: object; translationMap?: object; keepId?: boolean}) => {
  if (!keepId && 'id' in data) {
    delete data.id;
  }

  const result = {};
  for (const key in data) {
    if (internalKeys.includes(key)) {
      result[key] = data[key];
      continue;
    }

    if (isString(data[key]) && translationMap[key]) {
      result[key] = this.translateText(data[key]);
      continue;
    }

    if (isObject(data[key]) && translationMap[key]) {
      result[key] = this.parseObject({ data: data[key], translationMap: translationMap[key], keepId: keepIdKeys.includes(key.toLowerCase())});
      continue;
    }

    if (isArray(data[key]) && translationMap[key]) {
      result[key] = this.parseArray(data[key], translationMap[key]);
      continue;
    }

    result[key] = this.removeIds({ data: data[key], keepId: keepIdKeys.includes(key.toLowerCase()) });
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
      result.push(this.parseObject({ data: item, translationMap }));
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

 private removeIds = ({ data, keepId } : { data: unknown; keepId?: boolean}) => {
    if (keepId) {
      return data;
    }

    if (isArray(data)) {
      return data.map((item) => this.removeIds({ data: item }));
    }

    if (isObject(data)) {
      return this.parseObject({ data, translationMap: {}, keepId });
    }

    return data;
 }

 private translateText = (text: string) => '[==] Yay! Translated [==]';
}


export { PageTranslationService }
