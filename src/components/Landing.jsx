const Landing = () => {
    return (
      <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: "url('/images/dreamcatcher-bg.jpg')" }} id="landing">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bienvenue dans l'univers de Dreamcatcher
        </h1>
        <button
          onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
          className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded-lg shadow-lg transition-all"
        >
          Explorer le site
        </button>
      </section>
    );
  };
  
  export default Landing;
  