import { PageTemplateId } from '../../enums/enums';
import { servicePage } from './service-page';
import { technologyPage } from './technology-page';

const pageIdToTranslationKeys = {
  [PageTemplateId.SERVICE_PAGE]: servicePage,
  [PageTemplateId.TECHNOLOGY_PAGE]: technologyPage,
}

export { pageIdToTranslationKeys };
