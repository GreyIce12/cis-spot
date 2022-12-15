import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_POSTS } from '../../graphql/queries'
import PostBox from './PostBox';

function Feed() {

    const{loading, data, error} = useQuery(GET_POSTS);

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