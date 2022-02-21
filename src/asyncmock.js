const products = [
    {
        id:1, 
        name:'Esquís Faction 080',
        stock:3, 
        price:'300',
        category:'esquis',
        description: 'Lorem ipsum dolor consecuter',
        img:'https://www.grartwork.com/react/img-p-1.jpg'
    },
    {
        id:2, 
        name:'Botas Salomón',
        stock:10, 
        price:'230',
        category:'botas',
        description: 'Lorem ipsum dolor consecuter',
        img:'https://www.grartwork.com/react/img-p-4.jpg'
    },
    {
        id:3, 
        name:'Tabla Snowboard Fill',
        stock:3, 
        price:'600',
        category:'tablas',
        description: 'Lorem ipsum dolor consecuter',
        img:'https://www.grartwork.com/react/img-p-3.jpg'
    }
]

const categories = [
    {id: 'esquis', description: 'Esquís'},
    {id: 'botas', description: 'Botas'},
    {id: 'tablas', description: 'Tablas'}
]

export const getProducts = (idCategory) => {
    return new Promise ((resolve) => {
        const productsToResolve = idCategory ? products.filter(item => item.category === idCategory) : products
        setTimeout(() => {
            resolve(productsToResolve);
        },2000);
    });
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}