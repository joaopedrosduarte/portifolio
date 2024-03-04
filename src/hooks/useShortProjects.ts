import type { ProjectType } from "../types/project";
import GetMethods from "../services/GetMethods";
import { useQuery } from "react-query";

export default function useShortProjects() {
  return useQuery({
    queryFn: async () => {
      const { data } = await GetMethods.GetShortProjects();
      return data as ProjectType[];
    },
  })
}
