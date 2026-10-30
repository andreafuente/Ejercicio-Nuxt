export interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  comment: string;
}

export interface House {
  id: number;
  name: string;
  description: string;
  address: string;
  image: string;
  price: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
}