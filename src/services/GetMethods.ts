import axios from "axios";

class Get {
  GetProjects() {
    return axios.get("http://localhost:3000/projects");
  }
}

const GetMethods = new Get();
export default GetMethods;
