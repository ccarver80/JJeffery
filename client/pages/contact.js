import Image from "next/image";
import styles from "../styles/Home.module.css";

import "animate.css";
import NavBar from "../Components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />

      <div className="flex h-screen">
        <div className="flex flex-col mx-auto my-auto font-bold text-white  animate__animated animate__slow animate__backInLeft bg-slate-900/50 w-1/2 p-5 rounded-xl lg:text-4xl">
          <h1 className="mx-auto">Contact Me!</h1>
        </div>
      </div>
    </>
  );
}
