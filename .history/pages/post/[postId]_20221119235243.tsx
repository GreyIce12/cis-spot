import React from 'react';
import {useRouter} from 'next/router';
import { GET_POSTS_BY_ID } from '../../graphql/queries'
import {useQuery} from '@apollo/client'
import PostBox from '../components/PostBox';
import { useSession } from 'next-auth/react';

function PostPage() {

  const {data: session} = useSession();
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

      <div className='-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pt-16' >

      <p className='text-sm'>
        Comment as <span>{session?.user?.name}</span>
      </p>
      </div>

    </div>
  )
}

export default PostPage
