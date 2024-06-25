import { PageTemplateId } from "../../enums/enums";
import { servicesSection } from "../sections/services-section";

const servicePage = {
  id: PageTemplateId.SERVICE_PAGE,
  meta: {
    title: true,
    description: true,
  },
  servicesSection,

} as const;

export { servicePage };
