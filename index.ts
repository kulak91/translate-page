import { mockServicePage, mockDevelopersPage } from "./src/mocks/mocks";
import { PageTranslationService } from "./src/services/page-translation.service";
import { PageData } from "./src/types";

const landingArgId = process.argv[2];

const landing =
  landingArgId === "--service" ? mockServicePage : mockDevelopersPage;

const pageTranslationService = new PageTranslationService();

pageTranslationService.generateTranslation(landing as unknown as PageData);
