import { PageTemplateId } from "../../enums/enums";
import {
  servicesSection,
  questionsSection,
  whyBinarianSection,
  welcomeFormSection,
  callToActionSection,
  caseStudiesSection,
  customTextSection,
  meta,
  bottomFormSection,
  videosSection,
  articlesSection,
  techStackSection,
  hiringStepsSection,
  developersLinksSection,
  devSliderSection,
} from "../sections";
import { generateTranslationSchema } from "./helpers/helpers";

const developersPage = generateTranslationSchema({
  id: PageTemplateId.SERVICE_PAGE,
  meta,
  welcomeFormSection,
  whyBinarianSection,
  questionsSection,
  servicesSection,
  caseStudiesSection,
  callToActionTop: callToActionSection,
  callToActionBottom: callToActionSection,
  videosSection,
  customTextSection,
  bottomFormSection,
  articlesSection,
  techStackSection,
  hiringStepsSection,
  developersLinksSection,
  devSliderSection,
});

export { developersPage };
