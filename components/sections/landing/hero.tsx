export const HeroSection = () => {
  return (
    <section
      className="flex w-full h-full drop-shadow-lg"
      style={{
        backgroundImage:
          "url('https://assets.beanbox.com/blog_images/qBa69brqTgezQP8An5wQ.jpeg')",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div className="container flex flex-col items-start justify-center w-full h-full">
        <p className="mb-2 text-lg text-white font-bold">
          Welcome!
        </p>
        <h2 className="text-4xl font-bold text-white">
          We serve the Richest Coffee in the City!
        </h2>
        <a
          href=""
          className="mt-4 px-6 py-2 bg-amber-100 text-slate-950 rounded-lg"
        >
          Order now
        </a>
      </div>

    </section>
  );
};
