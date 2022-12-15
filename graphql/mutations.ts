import { gql } from "@apollo/client";

export const ADD_POST = gql`
mutation myMutation(
    $body: String!
    $image: String!
    $channel_id: ID!
    $title: String!
    $username: String!
)
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
        
}
 
`;

export const ADD_CHANNEL = gql`
mutation myMutation($topic: String!){
    insertChannelsByTopic(topic: $topic){
   
        id
        topic
        created_at
        
    }
        
}

`;

export const ADD_COMMENT = gql`
mutation myMutation($post_id: ID!, $comment: String!,$username: String!){
    insertComments(post_id: $post_id, comment: $comment,username: $username){
   
        id
        post_id
        comment
        username
        created_at
        
    }
        
}

`;

export const ADD_VOTE = gql`
mutation myMutation($post_id: ID!, $upvote: Boolean!,$username: String!){
    insertVotes(post_id: $post_id, upvote: $upvote ,username: $username){
   
        id
        post_id
        upvote
        username
        created_at
        
    }
        
}

`;