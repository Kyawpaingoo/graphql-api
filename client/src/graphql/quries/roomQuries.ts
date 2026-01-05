import { gql } from "@apollo/client";

export const getAll = gql`
query getAll {
  getAllRooms {
    id
    title
    images {
      url
    }
    capacity
    location
    pricePerNight
    reviews
  }
}
`;

export const getRoomById = gql`
  query getRoom($id: ID!) {
    getRoomById(id: $id) {
      id
      title
      roomNumber
      type
      description
      pricePerNight
      capacity
      isAvailable
      location
      images {
        url, public_id
      }
      reviews
      createdAt
      updatedAt
    }
  }
`;