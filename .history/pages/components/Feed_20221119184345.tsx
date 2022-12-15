import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS } from '../../graphql/queries'
import PostBox from './PostBox';

type Props = {
  topic?: string;
}


function Feed({topic}: Props) {

    const{loading, data, error} = !topic? useQuery(GET_POSTS): useQuery();

    const posts: Post[] = data?.getPostList
  return (
    <div className='mt-5 space-y-4' >
        {posts?.map((post) =>(

            <PostBox key={post.id} post={post} />
        ))}

    </div>
  )
}

export default Feed