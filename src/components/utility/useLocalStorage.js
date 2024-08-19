// localStorageUtils.js
const getStoredBookIds = (params) => {
    let storedBookIds;
    if (params === 'read') storedBookIds = localStorage.getItem('savedReadBookIds');
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
        if (params === 'read') {
            localStorage.setItem('savedReadBookIds', JSON.stringify(storedBookIds));
        }else{
            localStorage.setItem('savedWishlistBookIds', JSON.stringify(storedBookIds));
        }
    }
};

export { getStoredBookIds, saveBookId }