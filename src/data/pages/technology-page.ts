import { PageTemplateId } from "../../enums/enums";
import { servicesSection, welcomeSection } from "../sections";
import { generatePageTemplate } from "./helpers/helpers";

const technologyPage = generatePageTemplate({
  id: PageTemplateId.TECHNOLOGY_PAGE,
  meta: {
    title: true,
    description: true,
    keywords: true,
  },
  welcomeSection,
  servicesSection,
});

export { technologyPage };
