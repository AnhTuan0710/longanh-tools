import { client } from './apiConfig';
export default {
  async getAllCustomer() {
    const url = '/customers';
    const res = await client.get(url)
    return res
  },
  async getInfoCustomer(id: number) {
    const url = `/customers?${id}`;
    const res = await client.get(url)
    return res
  },
  
}