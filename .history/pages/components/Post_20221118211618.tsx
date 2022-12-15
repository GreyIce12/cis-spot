import React from "react";
import { useState } from "react";

import { useSession } from "next-auth/react";
import Avatar from "./Avatar";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import InsertLink from "@mui/icons-material/InsertLink";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { ADD_CHANNEL, ADD_POST } from "../../graphql/mutations";

import toast from "react-hot-toast";
import client from "../../apollo-client";
import { GET_CHANNEL_BY_TOPIC, GET_POSTS } from "../../graphql/queries"

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  channels: string;
}

type Props = {
  channels?: string
}

function Post({channels}: Props) {
  const [addPost] = useMutation(ADD_POST,{
    refetchQueries:[GET_POSTS, 'getPostList']});



  const [addChannel] = useMutation(ADD_CHANNEL);

  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("creating new post...");

    try {
      const {
        data: { getChannelsListByTopic }, 
      } = await client.query({
        query: GET_CHANNEL_BY_TOPIC,
        variables: { 
          topic: channels || formData.channels,
        },
      });

      const channelExist = getChannelsListByTopic.length > 0;

      if (!channelExist) {
        const {
          data: { insertChannelsByTopic: newChannel }
        } = await addChannel({
          variables: {
            topic: formData.channels,
          },
        })

        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            channel_id: newChannel.id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        })

        console.log(newPost);
      } 
       else {
        const image = formData.postImage || "";

        const {
          data: { insertPost: newPost },
        } = await addPost({
          variables: {
            body: formData.postBody,
            image: image,
            channel_id: getChannelsListByTopic[0].id,
            title: formData.postTitle,
            username: session?.user?.name,
          },
        });

        console.log(newPost);
      }
      setValue("postBody", "");
      setValue("postImage", "");
      setValue("postTitle", "");
      setValue("channels", "");

      toast.success("New post created !", { id: notification });
    } catch (error) {
      toast.error("Something went wrong ", { id: notification });
    }
  });
  return (
    <form
      onSubmit={onSubmit}
      className=" basis-1/2 sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2"
    >
      <div className="flex flex-initial  items-center space-x-3 mt-5">
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          className=" flex-1 bg-gray-50 p-2 pl-5 outline-none rounded-md "
          disabled={!session}
          type="text"
          placeholder={session ? channels? `Create a post in r/${channels}`:"Create a post (Title)" : "Sign In !"}
          id=""
        />

        <IconButton onClick={() => setImageBoxOpen(!imageBoxOpen)}>
          <AddPhotoAlternateIcon className="text-gray-500" />
        </IconButton>

        <IconButton>
          <InsertLink className="text-gray-500" />
        </IconButton>
      </div>
      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body</p>
            <input
              className=" 
          m-2
          flex-1 bg-blue-50 p-2 outline-none"
              {...register("postBody")}
              type="text"
              placeholder="Optional"
            />
          </div>
          
        {!channels &&(
        
        <div className="flex items-center px-2">
            <p className="min-w-[90px]">Channel</p>
            <input
              className=" 
          m-2
          flex-1 bg-blue-50 p-2 outline-none"
              {...register("channels", { required: true })}
              type="text"
              placeholder="ie. Web Development"
            />
          </div>
          )}
          
          

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image</p>
              <input
                className=" 
        m-2
        flex-1 bg-blue-50 p-2 outline-none"
                {...register("postImage", { required: true })}
                type="text"
                placeholder="Paste the Image URL... (Optional)"
              />
            </div>
          )}

          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>Post Title is required</p>
              )}

              {errors.channels?.type === "required" && (
                <p>Channel Name is required!</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-500 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default Post;
