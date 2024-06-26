import { PageTemplateId } from "../../enums/enums";

type PageContent = { [k: string]: boolean | PageTemplateId | PageContent | PageContent[] };

export { PageContent };
