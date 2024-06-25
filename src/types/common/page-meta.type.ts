type PageMeta = {
  id: number;
  title: string;
  description: string;
  keywords: string | null;
  noindex: string | null;
  nofollow: string | null;
  preloadImage: {
    data: string | null;
  }
};

export { PageMeta };
