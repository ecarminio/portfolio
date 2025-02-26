import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-row items-center justify-center gap-8 h-fit my-20 px-8">
      <Image
        className="rounded-3xl shadow-zinc-950 shadow-opacity-10 shadow-lg"
        aria-hidden="true"
        src="/eric.jpg"
        alt="Eric's profile picture"
        width={300}
        height={200}
      />
      <div className="flex flex-col items-start w-[50%]">
        <h1 className="text-2xl font-mono pb-6">Hi, I'm Eric.</h1>
        <p className="font-mono pt-4 text-left">

        </p>

      </div>
    </section>
  );
}
