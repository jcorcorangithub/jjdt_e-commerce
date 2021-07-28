const { AuthenticationError } = require('apollo-server-express');
const { account, product } = require('../models');
const { signToken } = require('../utils/auth'); // need to make utils folder with auth file

const resolvers = {
    Query: {
        accounts: async () => {
            return account.find();
        },

        account: async (parent, {username} ) => {
            return account.findOne({ username });
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return account.findOne({ username: context.user.username });
            }
            throw new AuthenticationError('you need to be logged in');
        },

        ////////////

        products: async () => {
            return product.find();
        },

        product: async (parent, {_id}) => {
            return product.findOne({ _id });
        },

        byCategory: async (parent, {category} ) => {
            return product.find({ category });
        },

        ////////////

        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
              });
      
              return user.orders.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
          },




    },

    //Mutations: {},
};

module.exports = resolvers;