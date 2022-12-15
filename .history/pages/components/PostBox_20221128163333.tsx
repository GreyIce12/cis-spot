import React, { useEffect ,useState } from "react";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InsertCommentIcon from '@mui/icons-material/InsertCommentRounded';
 import TimeAgo from "react-time-ago"
//import TimeAgo from "timeago-react";
import Avatar from "./Avatar";
import Link from "next/link"

import {DotPulse} from '@uiball/loaders'
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { GET_VOTES_BY_POSTID } from "../../graphql/queries";
import {useQuery, useMutation} from '@apollo/client'
import { ADD_VOTE } from "../../graphql/mutations";

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
    if(vote === false && !isUpvote) return

    await addVote(
      {variables:{
        post_id: post.id,
        username: session.user?.name,
        upvote: isUpvote,
      },
      } )

  }

  useEffect(() =>{
    const votes: Vote[] = data?.getVotesUsingPost_id

    const vote = votes?.find(
     (vote) => vote.username = session?.user?.name)?.upvote

      setVote(vote)

  },[data])

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
        <ArrowUpwardIcon onClick={() => upVote(true)} className={`voteButtons hover:text-green-400${vote && 'text-green-400'}`} />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownwardIcon onClick={() => upVote(false)} className={`voteButtons hover:text-red-400${vote == false && 'text-red-400'}`} />
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
            . Posted by {post.username} 
           

           </p>
        </div>

        <div className="py-4">
            <h2 className="text-xl font-semibold "> {post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>
        {/* Body */}

        {/* Image */}

        <img className=" w-200 m-h-200 h-200" src={post.image} alt="" />



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
