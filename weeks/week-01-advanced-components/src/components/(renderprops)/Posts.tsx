import React, { useEffect, useState } from "react";

import axios from "axios";

const Posts = ({ endpoint, renderPosts }: { endpoint: string; renderPosts: (posts: any) => JSX.Element }) => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      (async function fetchPosts() {
         const response = await axios.get(endpoint);
         setPosts(response?.data?.posts);
      })();
   });

   return renderPosts(posts);
};

export default Posts;
