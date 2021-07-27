const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Account {
        _id: ID
        username: String
        password: String
        email: String
    }

    type Product {
        _id: ID
        price: Number
        description: String
        name: String
        category: String
        stock: Number
        image: String
        seller: String
    }

    type Orders {
        _id: ID
        purchaseDate: Date
        products: [Product]
    }

    type Auth {
        token: ID
        user: Account
    }

    type Query {
        accounts: [Account]
        account(username: String): Account
        me: Account

        products: [Product]
        product(_id: ID): Product
        byCategory(category: String): [Product]

        order(_id: ID): Order
    }

    type Mutation {
        updateAccount(username: String, password: String, email: String): Account
        login(username: String, password: String): Auth
        updateProduct(_id: ID, stock: Number)
        
//////// why these
        addOrder()
        addUser
////////////////
    }
`;

module.exports = typeDefs;