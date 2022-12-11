import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";

const Home = () => {
  const stories = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600",
      userName: "Johnasdf Doeasdfasdfa",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600",
      userName: "John Doe",
    },
    {
      id: 3,
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
      comments: [
        {
          id: 1,
          userId: 1,
          text: "Lorem repellendus in fugit accusamus molestias. Veniam alias cumque voluptate!",
          time: "a minute ago",
          user: {
            id: 1,
            name: "John Doe",
            image:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        },
        {
          id: 2,
          userId: 1,
          text: "Lorem repellendus in fugit accusamus molestias. Veniam alias cumque voluptate!",
          user: {
            id: 1,
            name: "John Doe",
            image:
              "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
          },
        },
      ],
    },
    {
      id: 2,
      userId: 2,
      description:
        "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
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
    <section className="w-full sm:w-3/6 bg-secondary-bg-light dark:bg-secondary-bg-dark flex flex-col sm:p-3 gap-3">
      <Stories stories={stories} />
      <Posts posts={posts} />
    </section>
  );
};

export default Home;
