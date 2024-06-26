import { PageTemplateId } from "../../enums/enums";
import { PageMeta } from "../common/common";
import { ServicesSection, WelcomeSection } from "../sections/sections";

type DevelopersPage = {
  id: number;
  __component: PageTemplateId.DEVELOPERS_PAGE;
  meta: PageMeta;
  welcomeSection: WelcomeSection;
  servicesSection: ServicesSection;
};

export { DevelopersPage };
