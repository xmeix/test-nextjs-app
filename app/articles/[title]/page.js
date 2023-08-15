const ArticlePage = (props) => {
  console.log(props);
  return (
    <div className="articlePage">
      <h1>{props.params.title}</h1>
      <div>this is an article</div>
      elit. Aliquam, vitae! Fugit voluptatibus, excepturi voluptatem aspernatur
      veniam consequatur aliquid similique animi placeat quis alias molestiae
      modi minus reiciendis nulla eligendi repellendus?
    </div>
  );
};

export default ArticlePage;
