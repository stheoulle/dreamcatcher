const Landing = () => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-yellow-700"
      style={{ backgroundImage: "url('/images/home.webp')" }}
      id="landing"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_0px_4px_rgba(255,255,255,255)]">
        Welcome to Dreamcatcher&apos;s Universe!
      </h1>
      <button
        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
        className="px-6 py-3 bg-yellow-700 hover:bg-yellow-700 text-white rounded-lg shadow-lg transition-all"
      >
        Explore the Site
      </button>
    </section>
  );
};

export default Landing;
