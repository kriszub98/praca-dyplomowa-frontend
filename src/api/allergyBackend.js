import axios from 'axios';

export default axios.create({
	baseURL: 'http://192.168.100.36:3000/api/v1'
});
