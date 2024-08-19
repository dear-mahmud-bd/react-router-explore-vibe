
const getStoredBookIds = (params) => {
    let storedBookIds;
    if (params === "Read") storedBookIds = localStorage.getItem('savedReadBookIds');
    else storedBookIds = localStorage.getItem('savedWishlistBookIds');
    if (storedBookIds) {
        return JSON.parse(storedBookIds);
    }
    return [];
};

const saveBookId = (id, params) => {
    const storedBookIds = getStoredBookIds(params);
    const exists = storedBookIds.find(bookId => bookId === id);
    if (!exists) {
        storedBookIds.push(id);
        if (params === "Read") {
            localStorage.setItem('savedReadBookIds', JSON.stringify(storedBookIds));
        }else{
            localStorage.setItem('savedWishlistBookIds', JSON.stringify(storedBookIds));
        }
    }
};

const getMatchedBooks = (books, params) => {
    const storedReadBookIds = getStoredBookIds(params);
    const matchedBooks = [];
    storedReadBookIds.forEach(bookId => {
        const book = books.find(book => book.bookId === bookId);
        if (book) {
            matchedBooks.push(book);
        }
    });
    return matchedBooks;
};


export { getStoredBookIds, saveBookId, getMatchedBooks }