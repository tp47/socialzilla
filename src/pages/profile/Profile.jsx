import Button from "../../components/button/Button";
import Posts from "../../components/posts/Posts";

const Profile = () => {
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
    <section className="flex flex-col w-3/6 p-3 bg-neutral-100 dark:bg-secondary-bg-dark gap-3">
      <section>
        <div className="relative flex flex-col w-full h-72 mb-4">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
          />
          <img
            className="absolute left-0 right-0 object-cover rounded-full h-36 w-36 m-auto top-52 border-4 border-white"
            src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="User"
          />
        </div>
        <article className="flex flex-col items-center bg-primary-bg-light dark:bg-primary-bg-dark rounded-xl p-3 pt-12 gap-3">
          <h2 className="text-2xl dark:text-white">Jane Doe</h2>
          <div></div>
          <Button text="Подписаться" />
        </article>
      </section>
      <Posts posts={posts} />
    </section>
  );
};

export default Profile;
