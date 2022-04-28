
import {BookService} from '../services/books-service.js'
import { GoogleSearch } from '../cmps/google-search.jsx'

import {BookList} from '../cmps/book-list.jsx'
import {BookFilter} from '../cmps/book-filter.jsx'
import {BookDetails} from '../cmps/book-details.jsx'

export class Books extends React.Component {
    state = {
        books:[],
        filterBy:null,
        selectedBook:null
    }

    componentDidMount() {
        this.getBooks()
   
    }

    onSetFilter = (filterBy) => {
        this.setState({filterBy},() => {
            this.getBooks()
        })
    }

    getBooks = () => {
        BookService.query(this.state.filterBy)
        .then(books =>{
            console.log('here')
             this.setState({books})
            })

    }

    onSelectBook = (book) => {
       this.setState({selectedBook:book})
    }

    render() {
        const {books,selectedBook} = this.state
        return (
            <section className = "book-app">
            {!selectedBook && <React.Fragment>
                <GoogleSearch getBooks={this.getBooks}/>
                <BookFilter onSetFilter={this.onSetFilter}/>
                <BookList onSelectBook={this.onSelectBook} books={books}/>
                </React.Fragment>
                }
            
            {selectedBook && <BookDetails book={selectedBook} 
            onGoBack={()=>{this.onSelectBook(null)}}
            />}
                </section>
        )
    }
}