import axios from "axios";

export default {
  name: 'RickAndMortyIndex',

  data() {
    return {
      list: [],
      loading: true,
      path: 'rickandmorty/list',
      page: 1
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
      const { data } = await this.getCharacters(this.BasicHelper.getRequestUrl(this.path));
      this.list = data;
    },

    async getCharacters(url) {
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

    async handleScroll() {
      if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.page++;
        const path = this.path + '/' + this.page;
        const { data } = await this.getCharacters(this.BasicHelper.getRequestUrl(path));
        if (data.length) {
          this.list = this.list.concat(data);
        } else {
          this.page--;
        }
      }
    },

    viewEvent (id) {
      const routeData = this.$router.resolve({ name: 'RickAndMortyShow', params: { characterId: id } });
      window.open(routeData.href, '_blank');
    }
  },

  beforeMount() {
    this.populateData().then(() => null);
  }
}
