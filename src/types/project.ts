interface InfoPageProps {
  type: string;
  content: string;
}

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  info_page: InfoPageProps[];
  github_link: string;
  demo_link: string;
  image: string;
  background_color: string;
}