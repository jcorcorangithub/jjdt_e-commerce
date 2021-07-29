const { AuthenticationError } = require('apollo-server-express');
const { Profile, product } = require('../models');
const { signToken } = require('../utils/auth'); // need to make utils folder with auth file

const resolvers = {
    Query: {

      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (_parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
      },
      // By adding context to our query, we can retrieve the logged in user without specifically searching for them
      me: async (_parent, _args, context) => {
        if (context.user) {
          return Profile.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
      },

    },


    Mutation: {

       addProfile: async (parent,{ firstName,lastName, email, password }) => {
          const profile = await Profile.create({ firstName,lastName, email, password });
          const token = signToken(profile);
    
          return { token, profile };
        },
        login: async (_parent, { email, password }) => {
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
    }

module.exports = resolvers;