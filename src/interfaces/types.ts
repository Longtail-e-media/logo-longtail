export interface Logo {
  id: number;
  name: string;
  title: string;
  content: string;
  img_thumb: string;
  logoFormats: {
    img_jpg: string;
    img_png: string;
    img_svg: string;
  };
  status: boolean;
  sortorder?: number;
  added_date: string;
  modified_date?: string;
}
