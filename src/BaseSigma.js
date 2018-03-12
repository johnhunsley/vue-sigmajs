import Sigma from 'sigma'

function createSigma () {
  return {
    data () {
      return {
        _sigma: null
      }
    },
    methods: {
      renderSigma (g) {
        this.$data._sigma = new Sigma({
          graph: g,
          container: 'graph-container'
        })
      }
    }
  }
}

export const Basic = createSigma()

export default {
  Basic
}
