import { Basic } from '../BaseSigma'

export default {
  extends: Basic,
  mounted () {
    var i
    var N = 100
    var E = 500
    var exampleNodes = []
    var exampleEdges = []

    // Generate a random graph:
    for (i = 0; i < N; i++) {
      exampleNodes.push({
        id: 'n' + i,
        label: 'Node ' + i,
        x: Math.random(),
        y: Math.random(),
        size: Math.random(),
        color: '#666'
      })
    }

    for (i = 0; i < E; i++) {
      exampleEdges.push({
        id: 'e' + i,
        source: 'n' + (Math.random() * N | 0),
        target: 'n' + (Math.random() * N | 0),
        size: Math.random(),
        color: '#ccc'
      })
    }

    this.renderSigma({
      nodes: exampleNodes,
      edges: exampleEdges
    })
  }
}
