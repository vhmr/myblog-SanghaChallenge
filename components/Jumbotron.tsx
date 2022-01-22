const Jumbotron = () => {
  return (
      <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
          <div className="px-10 space-y-5">
            <h1 className="text-6xl max-w-xl font-serif">
                <span className="underline decoration-black decoration-4">Medium</span> is a place to write, read, and connect
            </h1>
            <h2>
                It's easy and free to post your thinking on any topic and connect with millions of readers.
            </h2>
          </div>
          <img className="hidden md:inline-flex h-32 lg:h-full max-w-2xl" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.apemockups.com%2Fwp-content%2Fuploads%2Fedd%2F2017%2F09%2Fmedium-logo-black-transparent.png&f=1&nofb=1" alt="" />
      </div>
  )
}

export default Jumbotron;
