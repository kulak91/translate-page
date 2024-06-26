import { PageTemplateId } from "../../enums/enums";
import { servicePage } from "./service-page";
import { developersPage } from "./developers-page";

const pageIdToTranslationKeys = {
  [PageTemplateId.SERVICE_PAGE]: servicePage,
  [PageTemplateId.DEVELOPERS_PAGE]: developersPage,
};

export { pageIdToTranslationKeys };
