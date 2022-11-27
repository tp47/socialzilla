import Story from "../story/Story";

const Stories = ({ stories }) => {
  return (
    <section className="flex flex-row items-center justify-start my-4 mx-2 overflow-scroll gap-2 sm:mb-10 flex-nowrap">
      <div className="relative flex-initial w-12 h-12 overflow-hidden rounded-full sm:rounded-xl sm:h-52 sm:w-36 shrink-0">
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600"
          className="object-cover w-full h-full blur-sm"
          alt="John Doe"
        />
        <button className="rounded-full w-12 h-12 bg-cyan-700 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white">+</button>
        <span className="absolute hidden font-bold text-white sm:block bottom-3 left-2">
          John Doe 
        </span>
      </div>
      {stories.map((story) => (
        <Story story={story} />
      ))}
    </section>
  );
};

export default Stories;
