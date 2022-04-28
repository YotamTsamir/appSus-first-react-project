

export class BookFilter extends React.Component{
    state = {
        filterBy:{
            name:'',
            maxPrice:''
        }
    }

    handleChange = ({target}) => {
        const value = (target.type === 'number') ? +target.value : target.value
        const filter = target.name
        this.setState((prevState)=>({filterBy: {...prevState.filterBy,[filter]:value}}),() =>{
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render () {
        const {name,maxPrice} = this.state.filterBy
       return <section className="filter">
           <form onSubmit={this.onFilter}>
               <label htmlFor="by-name">
               Name: <input name="name" id="by-name" type="text" onChange={this.handleChange} 
               value={name}/>
               </label>
               <label htmlFor="by-max-price">
               Max price: <input name="maxPrice" id="by-max-price" type="number" onChange={this.handleChange}
               value={maxPrice}/>
               <button>Filter!</button>
               </label>
           </form>
       </section>

    }
}