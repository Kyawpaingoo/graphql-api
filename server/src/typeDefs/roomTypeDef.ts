import gql from "graphql-tag";

export const roomTypeDef = gql `
  type Room {
    id: ID!
    roomNumber: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
  }

  type Query {
    getAllRooms: String
  }


`;
