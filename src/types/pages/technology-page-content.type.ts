import { PageTemplateId } from "../../enums/enums";
import { PageMeta } from "../common/common";
import { ServicesSection, WelcomeSection } from "../sections/sections";

type TechnologyPageContent = {
  id: number;
  __component: PageTemplateId.TECHNOLOGY_PAGE;
  meta: PageMeta;
  welcomeSection: WelcomeSection;
  servicesSection: ServicesSection;
};

export { TechnologyPageContent };
