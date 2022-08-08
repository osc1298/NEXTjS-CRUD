const API = 'https://api.escuelajs.co/api/v1'






const endPoints = {
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/products/${id}/`,
    getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/products`,
    updateProducts: (id) => `${API}/products/${id}/`,
    deleteProducts: (id) => `${API}/products/${id}/`,
  },
  categories: {
    getCategoriesList: `${API}/categories/`,
    addCategory: `${API}/categories/`,
    getCategoryItems: (id) => `${API}/categories/${id}/products/`,
    updateCategory: (id) => `${API}/categories/${id}/`,
  },
  files: {
    addImage: `${API}/files/upload/`,
  },
};

export default endPoints;