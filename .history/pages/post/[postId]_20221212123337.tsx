import React from 'react';
import {useRouter} from 'next/router';
import { GET_POSTS_BY_ID } from '../../graphql/queries'
import {useQuery, useMutation} from '@apollo/client'
import PostBox from '../components/PostBox';
import { useSession } from 'next-auth/react';
import {SubmitHandler, useForm} from 'react-hook-form'
import { ADD_COMMENT } from '../../graphql/mutations';
import toast from 'react-hot-toast';
import { Avatar } from '@mui/material';
import Sidebar from '../components/Sidebar';

type FormData = {
  comment: string
}


function PostPage() {

  const {data: session} = useSession();
   const router = useRouter();
   const [addComment] = useMutation(ADD_COMMENT,{
    refetchQueries :[GET_POSTS_BY_ID, 'getPostListByPostId',]
   })
   const {data } = useQuery(GET_POSTS_BY_ID,{
    variables: {
        post_id: router.query.postId,
    },
   })

   const post: Post = data?.getPostListById;
   const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()


const onSubmit : SubmitHandler<FormData> = async (data) =>{

  const notification  = toast.loading('Posting comment.... ')

await addComment({
  variables:{
    post_id: router.query.postId,
    username: session?.user?.name,
    comment: data.comment
  }

})


setValue('comment', '')

toast.success('Comment created!', {id: notification,
})
} 

  return (
    

    <div className='flex '>
      <Sidebar  />
  <div className=' mx-auto  lg:px-6 lg:basis-3/4 my-7 ' >

        <PostBox post={post} />

        <div className='-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16' >

          <p className='text-sm'>
            Comment as <span className='text-blue-600' >{session?.user?.name}</span>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2' >
            <textarea disabled={!session} className='h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50'
            {...register('comment')}
            placeholder={session? 'Drop your thoughts here':'Please sign in to comment'}
            />
            <button type='submit' className='rounded-full bg-blue-600 p-3 font-semibold text-white disabled:bg-gray-200' >Comment</button>
          </form>
        </div>

    <div className='-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10'>
      
      
          <hr className='py-2' />
          {post?.comments.map(comment =>

              <div key={comment.id} className="relative flex items-center space-x-2 space-y-5" >
                <hr className='absolute top-10 left-7 z-0 h-16 border' />
                <div className='z-50' >
                  <Avatar seed={comment?.username}/>

                </div>
                <div className='flex flex-col'>
                  <p className='py-2 text-xs text-gray-400' >
                  <span className='font-semibold text-gray-600' >{comment.username}</span>
                  </p>
                  
                  <p>
                    {comment.comment}
                    
                  </p>
                </div>


              </div>

          )}
          
      </div>
      
  </div>
  </div>
  )
}

export default PostPage
