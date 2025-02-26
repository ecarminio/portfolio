

export default function AboutMe() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 h-fit px-8 bg-white w-full pt-40 ">
            <p className="text-7xl  font-mono text-[#252527]">Let's talk about your project.</p>
            <div className="w-[50%] mx-auto mt-10 p-5 rounded-lg ">
        <form className="pb-32">
          <div className="mb-4">
            <label className="block text-sm text-black font-mono font-medium">Name</label>
            <input required type="text" name="name" className="mt-1 text-black  w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black font-mono font-medium">Email</label>
            <input required type="email" name="email" className="mt-1 bg-white bg-opacity-10 w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-black font-mono font-medium">Message</label>
            <textarea required name="message" className="mt-1 w-full p-2 bg-white bg-opacity-10  border border-gray-300 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="w-full p-2 font-mono bg-sky-500 bg-opacity-60 hover:bg-opacity-100 text-white rounded">Submit</button>
        </form>
      </div>
        </div>
    );
}
