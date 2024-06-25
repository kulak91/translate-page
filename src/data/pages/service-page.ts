import { PageTemplateId } from "../../enums/enums";
import { servicesSection } from "../sections/services-section";

const servicePage = {
  id: PageTemplateId.SERVICE_PAGE,
  meta: {
    title: true,
    description: true,
  },
  servicesSection,
  bottomFormSection: {
    title: true,
    subTitle: true,
    steps: { item: true},
  },
  otherServicesSection: {
    title: true,
    otherServices: { title: true },
  }

} as const;

export { servicePage };
