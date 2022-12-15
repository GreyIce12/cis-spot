import { gql } from "@apollo/client";

export const GET_POSTS = gql`

query MyQuery{
    getPostList{
        body
        created_at
        id
        image
        title
        channel_id
        username
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