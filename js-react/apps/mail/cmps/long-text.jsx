export class LongText extends React.Component {
    state = {
        isLongTxtShow:false,
        text: this.props.text,
        btnTxt:'...'
    }


    componentDidMount(){
        this.setText()
    }


    setText = () => {
        if(this.state.text.length>=60) this.setState({text:this.props.text.substring(0,50)})
        else this.setState({btnTxt:''})
    }


    toggleTxtLng = () => {
     
        if(this.state.isLongTxtShow){
       this.setState({text:this.props.text,isLongTxtShow:false,btnTxt:'Less'})
        }
        else {
            this.setState({text: this.state.text.substring(0,100),isLongTxtShow:true,btnTxt:'More'})
            }

    }

    render() {
        return  <section className="longTxt">
        <p>{this.state.text}<span>{this.state.btnTxt}</span></p>
        </section> 
    }
}