class BasicHelper {
  cloneObject (object) {
    return JSON.parse(JSON.stringify(object));
  }

  getRequestUrl (path) {
    const url = import.meta.env.VITE_BASE_API_URL
    return url + path;
  }
}
export default new BasicHelper()
