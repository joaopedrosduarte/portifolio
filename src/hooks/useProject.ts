import { ProjectType } from "../types/Project";
import GetMethods from "../services/GetMethods";
import { useQuery } from "react-query";

export default function useProjects() {
  return useQuery({
    queryFn: async () => {
      const { data } = await GetMethods.GetProjects();
      return data as ProjectType[];
    },
  });
}
