export const metadata = {
  title: "articles page",
};
export default function ({ children }) {
  return (
    <>
      <h1>Articles</h1>
      <>{children}</>
    </>
  );
}
