import { eventBusService } from "../services/bus-service.js";

export class UserPopup extends React.Component {
    state = {
        msg: null
    }
    removeEvent;
    timeoutId;

    componentDidMount() {
        console.log('i have mounted')
        this.removeEvent = eventBusService.on('user-msg', (msg) => {
            console.log('this is the msg',msg)
            this.setState({msg})
            if (this.timeoutId) clearTimeout(this.timeoutId)
            this.timeoutId = setTimeout(this.onCloseMsg, 3000)
        })
    }

    componentWillUnmount(){
        this.removeEvent()
    }

    onCloseMsg = () => {
        this.setState({ msg: null })
        clearTimeout(this.timeoutId)
    }

    render() {
        const { msg } = this.state
        if (!msg) return <React.Fragment></React.Fragment>
        return <div className={`user-msg ${msg.type}`}>
              <a href={`#/home/${this.state.msg.bookId}`}>
            <button onClick={this.onCloseMsg}>x</button>
            {msg.txt}
           Click for book description!</a>
        </div>

    }
}