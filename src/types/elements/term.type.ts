type Term = {
  id: number;
  title: string;
  link: string | null;
  subTitle: string | null;
  description: string;
  callToAction: string | null;
  heading: boolean;
  icon: {
    data: {
      id: number;
      attributes: {
        name: string;
        url: string;
      }
    }
  }
};

export { Term };
