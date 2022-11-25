import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const Home = () => {
  const stories = [
    {
      image:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600",
      userName: "Johnasdf Doeasdfasdfa",
    },
    {
      image:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600",
      userName: "John Doe",
    },
    {
      image:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600",
      userName: "John Doe",
    },
  ];
  const posts = [
    {
      id: 1,
      userId: 1,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      time: "a few seconds ago",
      image:
        "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      user: {
        id: 1,
        name: "John Doe",
        image:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    },
    {
      id: 2,
      userId: 2,
      description: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      time: "a few seconds ago",
      user: {
        id: 2,
        name: "Jane Doe",
        image:
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    },
  ];
  return (
    <section className="w-3/6 bg-neutral-100 dark:bg-neutral-700 flex flex-col p-3 gap-3">
      <Stories stories={stories} />
      <Posts posts={posts} />
    </section>
  );
};

export default Home;
