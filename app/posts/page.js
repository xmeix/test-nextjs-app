import Link from "next/link";
import Todo from "../components/todo";

const PostsPage = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await result.json();
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div>
          <h1>{post.id}</h1>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      </Link>
    );
  });
  return (
    <div className="postsPage">
      <h1>Posts</h1>
      {postsJSX}
    </div>
  );
};

export default PostsPage;
