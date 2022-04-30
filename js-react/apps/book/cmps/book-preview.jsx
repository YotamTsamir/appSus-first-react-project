import { BookService } from "../services/books-service.js";
const {Link,withRouter} = ReactRouterDOM

export function BookPreview({ book,onSelectBook }) {
    let text = ''
    switch (book.listPrice.currencyCode) {
        case 'EUR':
            text = '€'
            break;
        case 'ILS':
            text = '₪'
            break;
        case 'USD':
            text = '$'
            break
    }
    return <Link to={`/books/${book.id}`}>
    <article className="book-preview">
        <h3>{book.title}</h3>
        <img className="books-image" src={`${book.thumbnail}`} />
        <h3>{book.listPrice.amount}
            <span> {text}</span>
        </h3>
    </article>
    </Link>
}