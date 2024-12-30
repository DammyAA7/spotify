import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[80vh] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark"
          src="/full_spotify.svg"
          alt="Spotify logo"
          width={700}
          height={100}
          priority
        />
      </main>
    </div>
  );
}
