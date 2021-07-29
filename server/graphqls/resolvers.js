const { AuthenticationError } = require('apollo-server-express');
const { Profile, product } = require('../models');
const { signToken } = require('../utils/auth'); // need to make utils folder with auth file

const resolvers = {
    Query: {

       me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
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
    Mutation: {
        addProfile: async (parent,{ firstName,lastName, email, password }) => {
            console.log({ firstName,lastName, email, password })
          const profile = await Profile.create({ firstName,lastName, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
        login: async (parent, { email, password }) => {
          console.log("got in ");
          const profile = await Profile.findOne({ email });
          console.log(profile);
          if (!profile) {
            throw new AuthenticationError('No profile with this email found!');
          }
          
          const correctPw = await profile.isCorrectPassword(password);
          console.log(correctPw);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect password!');
          }
    
          const token = signToken(profile);
          console.log(token);
          return { token, profile };
        }

    }
};

module.exports = resolvers;