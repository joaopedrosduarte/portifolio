import axios from "axios";
import { useEffect, useState } from "react";
import type { ProjectProps } from "../types/project";

export default function useProjects() {
  const [data, setData] = useState<ProjectProps[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/projects`);
      setData(response.data);
    }
    
    fetchData();
  },[])

  return data as ProjectProps[];
}
