import axios from "axios";

class Get {
  GetProjects() {
    const headers = {
      "content-type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_HYGRAPH_DEV_AUTH_TOKEN}`
    };
    return axios({
      url: import.meta.env.VITE_HYGRAPH_ENDPOINT,
      headers: headers,
      method: "POST",
      data: {
        query: `query {
        projectPreviews {
          id
          liveUrl
          githubUrl
          description
          title
          tools {
            id
            name
          }
        }
      }`,
      },
    });
  }
}

const GetMethods = new Get();
export default GetMethods;
