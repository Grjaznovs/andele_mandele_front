import axios from "axios";

const defaultEl = {
  id: null,
  name: null,
  status: null,
  species: null,
  type: null,
  gender: null,
  image: null,
  location: {
    name: null
  }
}

export default {
  name: 'RickAndMortyShow',

  data() {
    return {
      editEl: defaultEl,
      loading: true,
      path: `${this.BASE_API_URL}rickandmorty/show`,
    }
  },

  methods: {
    async populateData() {
      const { data } = await this.getCharacter(this.path + '/' + this.$route.params.characterId);
      if (data.data) {
        this.editEl = this.cloneObject(data.data);
      } else {
        this.editEl = this.cloneObject(defaultEl);
      }
    },

    async getCharacter(url) {
      return await axios.get(url)
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false);
    },

    cloneObject (object) {
      return JSON.parse(JSON.stringify(object));
    }
  },

  beforeMount() {
    this.populateData().then(() => null);
  }
}

