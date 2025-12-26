import gql from "graphql-tag";

export const roomTypeDef = gql `
  type RoomImages {
    url: String!
    public_id: String!
  }

  type Room {
    id: ID!
    roomNumber: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
    images: [RoomImages] 
    reviews: [String]
    createdAt: String
    updatedAt: String
  }

  input RoomInput {
    roomNumber: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
    images: [String] 
    reviews: [String]
  }

  type Query {
    getAllRooms: [Room!]!
    getRoomById(id: ID!):  Room!
    getRoomByNumber(roomNumber: String!): Room!
  }

  type Mutation {
    createRoom(room: RoomInput!): String!
    updateRoom(id: ID!, room: RoomInput!): String!
    deleteRoom(id: ID!): String!
  }
`;
