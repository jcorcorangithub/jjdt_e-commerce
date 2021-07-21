const { AuthenticationError } = require('apollo-server-express');
const { account } = require('../models');
const { signToken } = require('../utils/auth'); // need to make utils folder with auth file

const resolvers = {
    Query: {
        accounts: async () => {
            return account.find();
        },
                // do i need the parent argument/parameter
        account: async (parent, {userName} ) => {
            return account.findOne({ userName });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return account.findOne({ userName: context.user.userName });
            }
            throw new AuthenticationError('you need to be logged in');
        },
    },

    //Mutations: {},
};

module.exports = resolvers;