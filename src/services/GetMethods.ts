import axios from "axios";

class Get {
  GetProjectsPreview() {
    return axios.get("http://localhost:3000/projects_preview");
  }
}

const GetMethods = new Get();
export default GetMethods;
