import { PageTemplateId } from "../../enums/enums";
import { PageMeta } from "../common/common";
import { ServicesSection } from "../sections/sections";

type ServicePage = {
  id: number;
  __component: PageTemplateId.SERVICE_PAGE;
  meta: PageMeta;
  servicesSection: ServicesSection;
}

export { ServicePage };
