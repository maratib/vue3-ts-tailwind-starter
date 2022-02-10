import api from "@/api";

/* eslint-disable */
class SampleService {
  getAll(): Promise<any> {
    return api.get("/tutorials");
  }

  get(id: any): Promise<any> {
    return api.get(`/tutorials/${id}`);
  }

  create(data: any): Promise<any> {
    return api.post("/tutorials", data);
  }

  update(id: any, data: any): Promise<any> {
    return api.put(`/tutorials/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return api.delete(`/tutorials/${id}`);
  }

  deleteAll(): Promise<any> {
    return api.delete(`/tutorials`);
  }

  findByTitle(title: string): Promise<any> {
    return api.get(`/tutorials?title=${title}`);
  }
}

export default new SampleService();
