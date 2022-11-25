import Story from "../story/Story";

const Stories = ({ stories }) => {
  return (
    <section className="flex flex-row items-center justify-start gap-2 mb-10 flex-nowrap overflow-scroll">
      <div className="flex-initial rounded-xl overflow-hidden h-52 relative shrink-0">
        <img
          src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinyrgb&w=1600"
          className="w-full h-full object-cover blur-sm"
          alt="John Doe"
        />
        <button className="rounded-full w-11 h-11 bg-cyan-700 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] font-bold text-2xl text-white">+</button>
        <span className="absolute bottom-3 left-2 text-white font-bold">
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
