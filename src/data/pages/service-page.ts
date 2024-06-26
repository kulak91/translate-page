import { PageTemplateId } from "../../enums/enums";
import { servicesSection } from "../sections/services-section";
import { generatePageTemplate } from './helpers/helpers';

const servicePage = generatePageTemplate({
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

});

export { servicePage };
