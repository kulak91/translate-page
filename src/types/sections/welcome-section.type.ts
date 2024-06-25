type WelcomeSection = {
  id: number;
  postwelcomeSubtitle: string;
  addWelcomeButton: boolean;
  welcomeImage: {
      data: {
          id: number;
          attributes: {
              name: string;
              url: string;
          };
      };
  };
  webView: {
      id: number;
      firstLine: string;
      secondLine: {
          id: number;
          word: string;
          caseStudies: boolean;
          exceptional: null; // or specify another type if it can have a value
      };
      thirdLine: {
          id: number;
          word: string;
          caseStudies: boolean;
          exceptional: {
              id: number;
              enable: boolean;
              size: 'large' | 'small'; // specify possible sizes if needed
          } | null; // or specify another type if it can have a value
      };
  };
  mobileView: null | any; // adjust 'any' based on actual expected structure for mobile view
};

export { WelcomeSection };
