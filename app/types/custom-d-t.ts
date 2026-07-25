
interface FunFactImage {
  src: string;
  delay?: number;
}

export interface Panel {
  id: number;
  style: string;
  subtitle: string;
  title: string;
  images: FunFactImage[];
  secondaryImages?: FunFactImage[];
  bigImage?: FunFactImage;
  number: string;
}
