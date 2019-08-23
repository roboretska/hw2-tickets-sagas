export const ticketsList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([11111, 5555, 99999]);
        }, 2000)
    });
};

export const cartList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['ggg', 44, '0000000000000000']);
        }, 2000)
    });
};
