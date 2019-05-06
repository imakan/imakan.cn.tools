let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = '/api/';
} else {
  baseURL = '/api/';
}
export default baseURL;
