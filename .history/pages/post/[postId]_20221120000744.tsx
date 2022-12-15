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

      <div className='-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16' >

      <p className='text-sm'>
        Comment as <span className='text-blue-600' >{session?.user?.name}</span>
      </p>

      <form >
        <textarea disabled={!session} className='h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50'
        placeholder={session? 'Drop your thoughts here':'Please sign in to comment'}
        />
        <button type='submit' className='rounded-full bg-blue-600 p-3 font-semibold text-white disabled:bg-gray-200' >Comment</button>
      </form>
      </div>

    </div>
  )
}

export default PostPage
