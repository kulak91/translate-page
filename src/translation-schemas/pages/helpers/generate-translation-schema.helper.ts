import { PageContent } from "../../../types";

const generateTranslationSchema  = (content: PageContent) => ({
  attributes: {
    title: true,
    slug: true,
    content,
  }
});

export { generateTranslationSchema };
