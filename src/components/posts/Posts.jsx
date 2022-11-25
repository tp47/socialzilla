import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <section className="flex flex-col items-center justify-start gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default Posts;
