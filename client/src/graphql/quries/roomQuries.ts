import { gql } from "@apollo/client";

export const getAll = gql`
query getAll {
  getAllRooms {
    id
    images {
      url
    }
    location
    pricePerNight
    reviews
  }
}
`;