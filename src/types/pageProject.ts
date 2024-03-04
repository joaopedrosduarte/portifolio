interface InfoPageType {
  type: string;
  content: string;
}

export interface PageProjectType {
  id: string;
  title: string;
  description: string;
  info_page: InfoPageType[];
  github_link: string;
  demo_link: string;
  image: string;
  background_color: string;
}