import { useRouter } from "next/router";
import React from "react";
import Avatar from "../components/Avatar";
import Feed from "../components/Feed";
import Post from "../components/Post";

function Channel() {
  const {
    query: { topic },
  } = useRouter();

  return (
    <div className="h-24 bg-blue-600 p-8">
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items space-x-4 pb-3">
          <div className="-mt-5">
            <Avatar seed={topic as string} large />
          </div>
        

        <div className="py-2">
        <h1 className="text-3xl font-semibold" >Welcome to the r/{topic} channel</h1>
        <p className="text-sm text-gray-400" >r/{topic}</p>
        </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl mt-5 pb-5" >
        <Post/>
        <Feed/>
      </div>
    </div>
  );
}

export default Channel;
