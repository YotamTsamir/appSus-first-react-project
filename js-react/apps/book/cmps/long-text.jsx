

export class LongText extends React.Component {
    state = {
        isLongTxtShow:true,
        text: this.props.text.substring(0,100),
        btnTxt:'More'
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
        <p>{this.state.text}</p>
        <button onClick={this.toggleTxtLng}>{this.state.btnTxt}</button>
        </section> 
    }
}