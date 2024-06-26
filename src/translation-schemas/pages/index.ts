import { PageTemplateId } from "../../enums/enums";
import { servicePage } from "./service-page";
import { technologyPage } from "./technology-page";
import { developersPage } from "./developers-page";

const pageIdToTranslationKeys = {
  [PageTemplateId.SERVICE_PAGE]: servicePage,
  [PageTemplateId.TECHNOLOGY_PAGE]: technologyPage,
  [PageTemplateId.DEVELOPERS_PAGE]: developersPage,
};

export { pageIdToTranslationKeys };
