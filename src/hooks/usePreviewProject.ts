import { previewProjectType } from "../types/previewProject";
import GetMethods from "../services/GetMethods";
import { useQuery } from "react-query";

export default function useProjectsPreview() {
  return useQuery({
    queryFn: async () => {
      const { data } = await GetMethods.GetProjectsPreview();
      return data as previewProjectType[];
    },
  });
}
