import { PageTemplateId } from "../../enums/enums";
import {
  servicesSection,
  questionsSection,
  whyBinarianSection,
  welcomeFormSection,
  tableSection,
  CallToActionSection,
  caseStudiesSection,
  industriesSction,
  targetSection,
  technologyLinksSection,
  customTextSection,
  awardsSection,
  meta,
  bottomFormSection,
  otherServicesSection,
  videosSection,
} from "../sections";
import { generateTranslationSchema } from "./helpers/helpers";

const servicePage = generateTranslationSchema({
  id: PageTemplateId.SERVICE_PAGE,
  meta,
  welcomeFormSection,
  whyBinarianSection,
  questionsSection,
  servicesSection,
  tableSection,
  caseStudiesSection,
  industriesSction,
  callToActionTop: CallToActionSection,
  callToActionBottom: CallToActionSection,
  technologyLinksSection,
  videosSection,
  customTextSection,
  targetSection,
  bottomFormSection,
  otherServicesSection,
  awardsSection,
});

export { servicePage };
