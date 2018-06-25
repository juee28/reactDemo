import axios from 'axios';

// export default axios.create({
//   baseURL: `http://localhost:8082/api/`,
//   headers: {'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhZjk5N2UwYjNiMzVhNDdmMjU1M2U1NyIsImlhdCI6MTUyODcyMDAzOX0.fhHoyfO31g1dNIiREzlUUTW_ZJWj0j1vXP9H-PmNEks'}
// });

export default axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
});