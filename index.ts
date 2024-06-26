import dotenv from "dotenv";
import { mockServicePage, mockDevelopersPage } from "./src/mocks/mocks";
import { PageTranslationService } from "./src/services/page-translation.service";
import { PageData } from "./src/types";

dotenv.config();
const landingArgId = process.argv[2];
const deeplApiKey = process.env.DEEPL_API_KEY;

const landing =
  landingArgId === "--service" ? mockServicePage : mockDevelopersPage;

const pageTranslationService = new PageTranslationService(deeplApiKey);

pageTranslationService.generateTranslation(landing as unknown as PageData);
