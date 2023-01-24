interface IImg {
  data: {
    attributes: {
      formats: {
        thumbnail: {
          url: string;
        };
      };
    };
  }[];
}

export interface IProducts {
  attributes: {
    title: string;
    description: string;
    price: number;
    isNew: boolean;
    createdAt: string;
    updatedAt: string;
    img: IImg;
    publishedAt: string;
  };
  id: string;
}
