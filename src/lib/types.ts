export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
}