const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        firstName: String
        lastName: String
        password: String
        email: String

    }

    type Product {
        _id: ID
        price: Int
        description: String
        name: String
        category: String
        stock: Int
        image: String
        seller: String
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Auth {
        token: ID
        profile: Profile
    }

    type Query {
        profiles: [Profile]!
        profile(profileId: ID!): Profile
        # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        me: Profile
      }
    

    type Mutation {
        addProfile(firstName: String, lastName: String, email: String, password: String): Auth
        login(email: String, password: String): Auth
        updateProduct(_id: ID, stock: Int): Product
    }
`;

module.exports = typeDefs;