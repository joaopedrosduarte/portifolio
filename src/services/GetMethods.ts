import axios from "axios";

class Get {
  GetShortProjects() {
    return axios.get("http://localhost:3000/short_projects");
  }
}

const GetMethods = new Get();
export default GetMethods;
