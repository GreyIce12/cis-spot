import React, { useEffect ,useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InsertCommentIcon from '@mui/icons-material/InsertCommentRounded';
import Avatar from "./Avatar";
import Link from "next/link"

import {DotPulse} from '@uiball/loaders'
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { GET_VOTES_BY_POSTID } from "../../graphql/queries";
import {useQuery, useMutation} from '@apollo/client'
import { ADD_VOTE } from "../../graphql/mutations";

import TimeAgo from 'react-timeago'

type Props = {
  post: Post
}

function PostBox({ post }: Props) {

const {data: session} = useSession()

const{data, loading} = useQuery(GET_VOTES_BY_POSTID,{
  variables:{
    post_id: post?.id
  }
})

const [addVote ] = useMutation(ADD_VOTE, {
  refetchQueries: [GET_VOTES_BY_POSTID, 'getVotesUsingPost_id'],
})

const [vote, setVote] = useState<boolean>()

  const upVote = async (isUpvote: boolean) =>{

    if(!session){

      return(
      toast("Sign in Please ! ")
    )}

    if(vote && isUpvote) return;
    if(vote === false && !isUpvote) return;

    console.log('voting...', isUpvote)

    await addVote(
      {variables:{
        post_id: post.id,
        username: session.user?.name,
        upvote: isUpvote,
      },
      } )

  }

  useEffect(() =>{
    const votes: Vote[] = data?.getVotesUsingPost_id;

    const vote = votes?.find(
     (vote) => vote.username == session?.user?.name)?.upvote
      
      console.log(vote);

      setVote(vote)

  },[data])
  
  const displayVotes = (data: any) =>{
    const votes: Vote[] = data?.getVotesUsingPost_id
    const displayNumber = votes?.reduce((total, vote) => (vote.upvote ? (total += 1): (total -= 1)), 
      0
      
      )
      if(votes?.length === 0) return 0;

      if(displayNumber === 0){
        return votes[0]?.upvote ? 1 : -1
      }
      return displayNumber
  }

if(!post)
return (
  <div className="flex w-full items-center justify-center p-10 text-xl " >
      <DotPulse size={50} color="blue" />
  </div>
)

  return (

    <Link href={`/post/${post?.id}`} >
    <div
      className="flex cursor-pointer rounded-md border border-gray-300 bg-white
     shadow-lg hover:border-2 m-5 hover:border-gray-400 "
    >
      <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
        <ArrowUpwardIcon onClick={() => upVote(true)} className='voteButtons hover:text-green-400' />
        <p className="text-xs font-bold text-black">{displayVotes(data)}</p>
        <ArrowDownwardIcon onClick={() => upVote(false)} className='voteButtons hover:text-red-400' />
        {/* Votes */}
      </div>

      <div className="p-3 pb-1">
        {/* Header */}

        <div className="flex items-center space-x-2" >
           
            <Avatar seed={post.channels[0]?.topic}/> 

           <p className="text-xs text-gray-400" >

          <Link href={`/channel/${post.channels[0]?.topic}`}>
            <span className="font-bold text-black hover:text-blue-400" >r/{post.channels[0]?.topic}</span> 
            </Link>
            . Posted by {post.username} {''}
            <TimeAgo date={post?.created_at}/>
           

           </p>
        </div>

        <div className="py-4">
            <h2 className="text-xl font-semibold "> {post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>
        {/* Body */}

        {/* Image */}

{post.image &&

<img width="500" height="400" src={post.image} alt="" />
}




        {/* Footer */}

        <div className="flex space-x-4 text-gray-700" >
            <div className="postButtons" >
                <InsertCommentIcon className=" text-grey w-6 h-6" />
                <p>{post.comments.length} Comments</p>
          
            </div>
        </div>
      </div>
    
    </div>
    </Link>     
  );
}

export default PostBox
