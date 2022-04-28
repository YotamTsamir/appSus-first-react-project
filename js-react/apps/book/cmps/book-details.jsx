import { LongText } from "./long-text.jsx"
import { ReviewAdd } from "./review-add.jsx"
import { BookService } from "../services/books-service.js"
import { ReviewList } from "./reviews-list.jsx"
const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {
    state = {
        book: null
    }

    componentDidMount() {
        this.loadBook()
    }


    componentDidUpdate(prevProps){
       
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        BookService.getBookById(bookId)
            .then(book => {
                this.setState({ book })
            })
    }

    onRemoveReview = (reviewId,bookId) => {
        BookService.removeReview(reviewId,bookId)
        .then(()=> this.loadBook())
    }

    onSaveReview = (review) => {
        const { bookId } = this.props.match.params
        BookService.addReview(review, bookId)
            .then(() => this.loadBook())
    }


    render() {
        const { book } = this.state
        if (!book) return <h1>Loading...</h1>
        const nextBookId = BookService.getNextBookId(book.id,1)
        const prevBookId = BookService.getNextBookId(book.id,-1)
        return <section className="book-details">
            <div className={(book.listPrice.amount > 150) ? 'red' :
                (book.listPrice.amount < 20) ? 'green' : ''}>
                <h1>Book title: {book.title}</h1>
                <img src={book.thumbnail} />
                <h3>Description:</h3>
                <LongText text={book.description} />
                <p>Books Length: {book.pageCount}{
                    (book.pageCount > 500) ? ' - Long reading' :
                        (book.pageCount > 200) ? ' - Decent reading' :
                            (book.pageCount < 100) ? ' - Light reading' : ''
                }</p>
                <p>Subtitles: {book.subtilte}</p>
                <p>Author/s: {book.authors}</p>
                <p>Published at: {book.publishedDate}</p>
                <p>Categories: {book.categories.map(cat => cat + ' ')}</p>
                <p>Language: {book.language}</p>
                <p>{(2022 - book.publishDate > 10) ? 'Veteran book' :
                    (2022 - book.publishedDate < 1) ? 'New' : ''}</p>
                <h1>{(book.listPrice.isOnSale) ? 'This book is now on sale!' : ''}</h1>
                <Link to={`/home/${prevBookId}`}><button>Previus book</button></Link>
                <Link to={`/home/${nextBookId}`}><button>Next book</button></Link>
                <ReviewList reviews={book.reviews} bookId={book.id} onRemove={this.onRemoveReview} />
                <ReviewAdd onSaveReview={this.onSaveReview} />
               
            </div>
        </section>
    }
}