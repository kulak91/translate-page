import { PageTemplateId } from "../../enums/enums";
import { servicesSection, welcomeSection } from "../sections";

const technologyPage = {
  id: PageTemplateId.TECHNOLOGY_PAGE,
  meta: {
    title: true,
    description: true,
    keywords: true,
  },
  welcomeSection,
  servicesSection,
};

export { technologyPage };
