import BestBlock from './BestBlock'
import web3 from './web3';

var React = require('react')

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      nodeInfo: null
    }

    this.getNodeInfo()
  }

  getNodeInfo() {
    web3.eth.getNodeInfo().then(
      function(nodeInfo) {
        this.setState({
          nodeInfo: nodeInfo
        })
      }.bind(this)
    )
  }

  render() {
    return (
      <div className="App">

        <div className="row">
          <span className="col border border-secondary">
            <h3>Best Block</h3>
            <BestBlock/>
          </span>

          <span className="col border border-secondary">
            <h3>Last Block</h3>
          </span>

        </div>

        <div className="row">
          <span className="col border border-secondary rounded">
            <h3>Node Info</h3>
            <p>{this.state.nodeInfo}</p>
          </span>
        </div>
      </div>
    )
  }
}

export default App