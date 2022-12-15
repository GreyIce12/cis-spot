import React from 'react';
import {useRouter} from 'next/router';
import { GET_POSTS_BY_ID } from '../../graphql/queries'
import {useQuery} from '@apollo/client'
import PostBox from '../components/PostBox';

function PostPage() {

   const router = useRouter();
   const {data } = useQuery(GET_POSTS_BY_ID,{
    variables: {
        post_id: router.query.postId,
    },
   })

   const post: Post = data?.getPostListById;
   console.log(post);
  return (
    <div className='mx-auto my-7 max-w-5xl' >

        <PostBox post={post} />

<div></div>

    </div>
  )
}

export default PostPage
