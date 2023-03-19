import axios from 'axios';

const baseUrl = 'http://localhost:3000'; 

export const productService = {
  getAll: async () => {
    const response = await axios.get(`${baseUrl}/products`);
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axios.get(`${baseUrl}/products/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await axios.post(`${baseUrl}/product`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await axios.put(`${baseUrl}/products/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axios.delete(`${baseUrl}/products/${id}`);
    return response.data;
  },
};