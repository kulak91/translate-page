import { PageContent } from "./page-content.type";

type PageData = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    translatedPages?: {
      data: any[];
    };
    content: PageContent[]
  }
};

export { PageData };
