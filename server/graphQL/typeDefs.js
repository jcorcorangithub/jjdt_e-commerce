const { gql } = require('apollo-server-express');

// case sensitivity  
// what needs to match with resolvers

const typeDefs = gql`
    type Account {
        name: String
        userName: String
        password: String
    }

    type Product {
        sku: Int
        name: String
        description: String
        price: Float
    }

    type Query {
        accounts: [Account]
        account(userName: String): Account
        me: Account

        products: [Product]
        product(sku: Int): Product

    }
`;

module.exports = typeDefs;