import axios from "axios";

export default {
  name: 'RickAndMortyIndex',

  data() {
    return {
      list: [],
      loading: true,
      page: 1,
      path: `${this.BASE_API_URL}rickandmorty/list`
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    async populateData() {
      const { data } = await this.getCharacters(this.path);
      this.list = data.data;
    },

    async getCharacters(url) {
      return await axios.get(url)
        .catch(error => {
          this.errored = true
        })
        .finally(() => this.loading = false);
    },

    async handleScroll() {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.page++;
        const { data } = await this.getCharacters(this.path + '/' + this.page);
        if (data.data.length) {
          this.list = this.list.concat(data.data);
        } else {
          this.page--;
        }
      }
    },

    showCharacter(id) {
      this.$router.push(`/show/${id}`);
    }
  },

  beforeMount() {
    this.populateData().then(() => null);
  }
}
