import { gql } from "@apollo/client";

export const GET_POSTS = gql`

query MyQuery{
    getPostList {
    body
    channel_id
    created_at
    id
    image
    title
    username
    channels {
      id
      topic
    }
    commentsList {
      comment
      username
      post_id
      created_at
      id
    }
    votesList {
      created_at
      id
      upvote
      username
      post_id
    }
  }
}
`
export const GET_CHANNEL_BY_TOPIC = gql`

    query MyQuery($topic: String!){

        getChannelsListByTopic(topic: $topic){
            id
            topic
            created_at

        }
    }

` 