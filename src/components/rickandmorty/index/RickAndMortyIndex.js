import axios from "axios";

export default {
  name: 'RickAndMortyIndex',

  data() {
    return {
      list: [],
      loading: true,
      info: null
    }
  },

  methods: {
    init: async function () {
      // const url = process.env.VUE_APP_API_URL;
      // console.log(import.meta.env.VITE_APP_BASE_URL);
      const { data } = await this.getCharacters('http://127.0.0.1:8000/api/rickandmorty/list');
      this.list = data;
      console.log(data);
    },

    async getCharacters(url) {
      return await axios.get(url)
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false);
    },

  },

  beforeMount() {
    this.init().then(() => null);
  }
}
