import { mockServicePage, mockTechnologyPage } from './src/mocks/mocks';
import { PageTranslationService } from './src/services/page-translation.service';
import { PageData } from './src/types';

const landingArgId = process.argv[2];

const landing = landingArgId === '--service' ? mockServicePage : mockTechnologyPage;

const pageTranslationService = new PageTranslationService();

pageTranslationService.generateTranslation(landing as unknown as PageData);
