import Link from "next/link";


const ArticlesPage = () => {
  return (
    <div className="articlePage">
      articles page
      <Link href="/posts">
        <button>take me to posts page</button>
      </Link>
    </div>
  );
};

export default ArticlesPage;
