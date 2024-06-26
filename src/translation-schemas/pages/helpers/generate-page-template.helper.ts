import { PageContent } from "../../../types";

const generatePageTemplate  = (content: PageContent) => ({
  attributes: {
    title: true,
    slug: true,
    content,
  }
});

export { generatePageTemplate };
