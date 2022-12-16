import React from 'react'
import { GET_POSTS, GET_POSTS_BY_TOPIC } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import {SubmitHandler, useForm} from 'react-hook-form'
import toast from 'react-hot-toast';
import {useRouter} from 'next/router';


type Props = {
    topic?: string;
  }
  
function Search({topic}: Props) {

    const router = useRouter();

    const{loading, data, error} = !topic? useQuery(GET_POSTS): useQuery(GET_POSTS_BY_TOPIC,{
        variables:{
          topic:topic,
        }
      });

      const post: Post = data?.getPostListById;
      const {
       register,
       setValue,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm<FormData>()
  
     const onSubmit : SubmitHandler<FormData> = async (data) =>{
     }
      
    const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic

    const notification  = toast.loading('Posting comment.... ')

  return (
    <div>

  
    </div>
  )
}

export default Search