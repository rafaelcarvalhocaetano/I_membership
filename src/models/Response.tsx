export interface User {
  url_img: string;
  user_name:string;
  end_date:string;
  profits:string;
  losses:string;
  phone:string;
}

export interface IResponse {
  next: Page;
  previous?: Page;
  peyloader: User[],
  total_page: number;
}
interface Page {
  page: number;
  limit: number;
}