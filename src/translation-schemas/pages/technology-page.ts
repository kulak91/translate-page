import { PageTemplateId } from "../../enums/enums";
import { servicesSection, welcomeSection } from "../sections";
import { generateTranslationSchema } from "./helpers/helpers";

const technologyPage = generateTranslationSchema({
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
