export default function AboutMe() {
  return (
      <div className="flex flex-col items-center justify-center gap-8 min-h-screen px-4 sm:px-8 bg-white w-full pt-20">
          <p className="text-7xl  font-mono text-[#252527]">
              Let's talk about your project.
          </p>
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto mt-10 p-5 rounded-lg">
              <form className="pb-16 sm:pb-24 md:pb-32">
                  <div className="mb-4">
                      <label className="block text-sm text-black font-mono font-medium">Name</label>
                      <input required type="text" name="name" className="mt-1 w-full p-2 border border-gray-300 rounded text-black" />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm text-black font-mono font-medium">Email</label>
                      <input required type="email" name="email" className="mt-1 w-full p-2 border border-gray-300 rounded bg-white" />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm text-black font-mono font-medium">Message</label>
                      <textarea required name="message" className="mt-1 w-full p-2 border border-gray-300 rounded bg-white" rows="4"></textarea>
                  </div>
                  <button type="submit" className="w-full p-2 font-mono bg-sky-500 bg-opacity-60 hover:bg-opacity-100 text-white rounded transition duration-200">
                      Submit
                  </button>
              </form>
          </div>
      </div>
  );
}
