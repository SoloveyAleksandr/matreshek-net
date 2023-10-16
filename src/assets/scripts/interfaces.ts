export interface IProducItem {
  images: string[];
  price: string;
  lastPrice?: string;
  discount?: string;
  name: string;
  stars: number;
  rating: string;
  slidesPreview?: string[];
}

export interface IAdvItem {
  img: string;
  name: string;
  price: string;
}
