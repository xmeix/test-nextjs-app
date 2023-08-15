const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await result.json();
  return (
    <div className="post">
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </div>
  );
};

export default PostDetails;
