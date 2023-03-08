import Head from "next/head";
import Header from "@/components/organisms/Header";
import HomeIntroduction from "@/components/organisms/HomeIntroduction";
import AboutMe from "@/components/organisms/AboutMe";
import Skills from "@/components/organisms/Skills";
import ParticlesBackground from "@/components/particles/ParticlesBackground";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bala | Portfolio | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ParticlesBackground />
      <Header />
      <HomeIntroduction />
    </>
  );
}
