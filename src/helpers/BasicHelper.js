class BasicHelper {
  cloneObject (object) {
    return JSON.parse(JSON.stringify(object));
  }
}
export default new BasicHelper()
