import axios from "axios";

const defaultEl = {
  id: null,
  name: null,
  status: null,
  species: null,
  gender: null,
  image: null,
  location: {
    name: null,
    url: null
  },
  url: null
}

export default {
  name: 'RickAndMortyShow',

  data() {
    return {
      editEl: defaultEl,
      loading: true,
      path: 'rickandmorty/show',
    }
  },

  methods: {
    async populateData() {
      const path = this.path + '/' + this.$route.params.characterId;
      const { data } = await this.getCharacter(this.BasicHelper.getRequestUrl(path));
      if (data) {
        this.editEl = this.BasicHelper.cloneObject(data);
      } else {
        this.editEl = this.BasicHelper.cloneObject(defaultEl);
      }
    },

    async getCharacter(url) {
      return new Promise((resolve, reject) => {
        axios.get(url)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error.status);
          })
          .finally(() => this.loading = false);
      });
    },
  },

  beforeMount() {
    this.populateData().then(() => null);
  }
}

