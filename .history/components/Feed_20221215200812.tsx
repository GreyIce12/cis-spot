import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS, GET_POSTS_BY_TOPIC } from '../graphql/queries'
import PostBox from './PostBox';
import Sidebar from './Sidebar';

type Props = {
  topic?: string;
}


function Feed({topic}: Props) {

    const{loading, data, error} = !topic? useQuery(GET_POSTS): useQuery(GET_POSTS_BY_TOPIC,{
      variables:{
        topic:topic,
      }
    });

    const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic
  return (
    

    <div className='mt-5 space-y-4' >
        {posts?.map((post) =>(

            <PostBox key={post.id} post={post} />
        ))}

    </div>
    
  )
}

export default Feed