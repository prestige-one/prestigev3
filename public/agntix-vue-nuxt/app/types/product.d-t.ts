

export interface ProductDT {
  id: number;
  title: string;
  price: number;
  image: string;
  delay?: string;
  quantity: number;
}

// product modal image data type
export interface ProductImage {
  id: string;
  main: string;
  thumbnail: string;
  alt: string;
}