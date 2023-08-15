import PostDetails from "@/app/components/post";
import { Suspense } from "react";

const Post = async ({ params }) => {
  const postId = params.postId;
  console.log(postId);

  const loadingJSX = <div>loading post</div>;

  return (
    <div>
      <h1>Post details</h1>
      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
};

export default Post;
