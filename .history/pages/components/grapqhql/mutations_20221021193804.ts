import { gql } from "@apollo/client";

export const ADD_POST = gql`
mutation myMutation(
    $body: String!
    $image: String!
    $channel_id: ID!
    $title: String!
    $username: String!
{
    insertPost(
        body: $body
        image: $image
        channel_id: $channel_id
        title: $title
        username: $username
    ){
    
    body
    channel_id
    username
    image
    title
    created_at
    id
        
}
)
`;