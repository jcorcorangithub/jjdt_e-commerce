const { gql } = require('apollo-server-express');

// case sensitivity  
// what needs to match with resolvers

const typeDefs = gql`
    type Account {
//maybe an id////////
        name: String
        userName: String
        password: String
    }

    type Item {
        sku: Number
        name: String
        description: String
        price: Decimal128
    }

    type Auth {

    }

    type Query {
        accounts: [Account]
////// why does the type need to be specified when it is determined in the model creation
        account(userName: String): Account
        me: Account

        items: [Item]
        item(sku: Number): Item

    }
`;