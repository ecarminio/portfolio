import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 h-fit my-20 px-6 md:px-12 lg:px-20">
      <Image
        className="rounded-3xl shadow-lg shadow-zinc-950/10 w-3/4 sm:w-1/2 md:w-1/3 lg:w-[300px] h-auto"
        aria-hidden="true"
        src="/eric.jpg"
        alt="Eric's profile picture"
        width={300}
        height={200}
      />
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl font-mono pb-4 md:pb-6">Hi, I'm Eric.</h1>
        <p className="font-mono pt-2 md:pt-4">
          {/* Your text here */}
        </p>
      </div>
    </section>
  );
}
