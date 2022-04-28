import { BookPreview } from "./book-preview.jsx";

export function BookList({books,onSelectBook}){
    return <section className="books">
        {books.map(book => <BookPreview book={book} key={book.id} onSelectBook={onSelectBook}/>)}
    </section>
}