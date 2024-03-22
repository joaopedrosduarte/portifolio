interface tool {
  id: string;
  name: string;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  image: string;
  tools: tool[];
}

