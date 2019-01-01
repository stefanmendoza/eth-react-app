import web3 from './web3'

const React = require('react')

class BestBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentBlock: null
        }

        web3.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
            if (error) return console.error(error);
            console.log(blockHeader);
        }).on('data', (blockHeader) => {
            this.updateState(blockHeader.number)
          }
        );
    }

    componentDidMount() {
        web3.eth.getBlock("latest").then(
            function(latestBlock) {
                this.setState({
                    currentBlock: latestBlock.number
                })
            }.bind(this)
        )
    }

    async updateState(blockNumber) {
        console.log(blockNumber)
        web3.eth.getBlock(blockNumber).then(
            function(result) {
                if(result) {
                    console.log(result)

                    this.setState({
                        currentBlock: result.number
                    })
                } else {
                    // Continue polling every 500ms until the block is confirmed
                    setTimeout(() => { this.updateState(blockNumber) }, 500)
                }
            }.bind(this)
        )
    }
    
    render() {
        if(this.state.currentBlock == null) {
            return(
                <></>
            )
        } else {
            return (
                <>#{Number(this.state.currentBlock).toLocaleString()}</>
            )
        }
    }
}

export default BestBlock