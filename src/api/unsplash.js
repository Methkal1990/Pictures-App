import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID iojWEpqStuDsZf2Duy2maubqP3KHagIVXHvpmw88HEM',
  },
});
