import { Term } from "../elements/elements";

type ServicesSection = {
  id: number;
  title: string;
  priority?: number;
  block?: string;
  sectionType?: string;
  hasIcons?: boolean;
  terms: Term[];
};

export { ServicesSection };
