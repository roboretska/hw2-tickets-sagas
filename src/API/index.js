export const getTicketsList = () => {
    return fetch('http://localhost:2000/tickets').then((responce) => responce.json());
};

export const getCart = () => {
    return fetch('http://localhost:2000/cart').then((responce) => responce.json());
};