const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Account {
        _id: ID
        userName: String
        password: String
        email: String
    }

    type Product {
        _id: ID
        name: String
        description: String
        ratings: Float
    }

    type Orders {
        _id: ID

    }

    type Query {
        accounts: [Account]
        account(userName: String): Account
        me: Account

        products: [Product]
        product(_id: ID): Product

    }
`;

module.exports = typeDefs;