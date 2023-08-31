const scheme = 'http';
const host = 'localhost';
const port = 8080;

const baseUrl = `${scheme}://${host}:${port}`;

export const productsUrl = `${baseUrl}/products`;
export const categoriesUrl = `${baseUrl}/categories`;
export const brandsUrl = `${baseUrl}/brands`;
export const ordersUrl = `${baseUrl}/orders`;
