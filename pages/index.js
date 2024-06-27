import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Features from "@/components/templates/index/Features";
import Story from "@/components/templates/index/Story";
import Homes from "@/components/templates/index/Homes";
import Gallery from "@/components/templates/index/Gallery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Features />
      <Story />
      <Homes />
      <Gallery />
    </>
  );
}
