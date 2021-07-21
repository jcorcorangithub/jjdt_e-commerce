const { gql } = require('apollo-server-express');

// case sensitivity ????? /////////

const typeDefs = gql`
    type Account {
        name: String
        userName: String
        password: String
    }

    type Item {
        name: String
        keywords: String
        description: String
    }

    type Auth {

    }

    type Query {
        accounts: [Account]
        account(userName: String): Account
    }
`;