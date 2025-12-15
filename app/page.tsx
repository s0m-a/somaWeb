import Navbar from "./components/navbar";
import { FiDollarSign } from "react-icons/fi";
import TypingText from "./components/typingText";
import { stacks, bio, weatherBio, weatherItems, frontendSkill, backendSkill, databaseSkill } from "./utils/data";
import DownloadButton from "./components/buttons";
import Card from "./components/card";
import Image from "next/image";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FiDatabase } from "react-icons/fi";
import { CiCloud } from "react-icons/ci";
import SecondCard from "./components/secondCard";
import ProjectCard from "./components/projectCard";
import SkillCard from "./components/skillCard";
import ContactCard from "./components/contactCard";
export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="w-[80%] m-[auto] mx-auto mt-8 " id="home">
        <div className="flex gap-2 items-center justify-center">
          <FiDollarSign className="text-accent" size={12} />
          <p className="text-center text-accent text-sm font-bold">whoami</p>
        </div>
        <p className="justify-center text-center md:text-6xl text-4xl font-bold text-secondary-foreground">
          Nmesoma Anita
        </p>
        <div className="flex gap-2 items-center justify-center h-10 m-4">
          <TypingText
            texts={stacks}
            speed={100}
            deleteSpeed={50}
            pauseDuration={2000}
            className="justify-center text-center md:text-2xl font-bold text-primary"
          />
        </div>
        <div className="mt-4 md:w-[60%] w-full m-[auto] mx-auto ">
          <p className="text-center text-sm md:text-lg font-bold text-gray-400">
            Passionate full-stack developer who loves crafting elegant solutions
            to complex problems.Specialized in modern web technologies and
            always excited about the next challenge.
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <DownloadButton className="w-[200px]" />
        </div>

        {/*--------------------- about me section ---------------------*/}
        <section className="w-[80%] m-[auto] mx-auto my-8 " id="about">
          <h1 className="md:text-3xl text-2xl font-bold justify-center text-center md:mt-48 mt-28 mb-4">
            About Me
          </h1>
          <p className="text-center text-sm md:text-md font-bold text-gray-400">
            Get to know the developer behind the code
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-center items-center  md:gap-6">
          <Image
            src="/somaimg.png"
            alt="soma's image"
            width={250}
            height={250}
            className="rounded-lg m-4 shadow-lg shadow-glow-accent"
            style={{ boxShadow: "0 0 20px hsl(140 100% 60% / 0.5)" }}
          />

          <Card
            titleOne="about"
            titleTwo="me"
            subtitle="Cat intro.txt"
            description={bio}
            width=""
            widthLg="500px"
          />
        </section>

        {/*--------------------- Expertise section ---------------------*/}
        <section className="mt-16 " id="skills">
          <div className="flex gap-2 items-center justify-center">
            <FiDollarSign className="text-accent" size={16} />
            <p className="text-center text-primary text-lg md:text-xl font-bold mt-4">
              ls expertise /
            </p>
          </div>
          <p className="text-center text-xl md:text-3xl font-bold">
            Areas of Expertise
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <SecondCard
              icon={<HiMiniCodeBracket />}
              header="FRONTEND DEVELOPMENT"
              body="Building responsive, performant web applications with React, TypeScript, and modern CSS frameworks."
            />
            <SecondCard
              icon={<FiDatabase />}
              header="BACKEND AND DATABASE"
              body="Designing scalable APIs and database architectures with Node.js, Python, and PostgreSQL/MongoDB."
            />
            <SecondCard
              icon={<CiCloud />}
              header="CLOUD AND DEPLOYMENT"
              body="Deploying and maintaining cloud infrastructure using AWS, Docker, and CI/CD pipelines."
            />
          </div>
        </section>
        {/*---------------------  projects section ---------------------*/}
        <div className="mt-16 ">
          <div className="flex flex-col gap-2 items-center justify-center my-8">
            <p className="text-center text-lg md:text-3xl text-2xl font-bold mt-4">
              Featured Projects
            </p>
            <p className="text-center text-sm md:text-md font-bold text-gray-400">
              Some of my favorite projects i&apos;ve worked on
            </p>
          </div>
          <ProjectCard
            titleOne="projects"
            titleTwo="weather app"
            titleThree="ls technologies/"
            subtitle="cat README.md"
            description={weatherBio}
            image="/weatherApp.png"
            items={weatherItems}
            width=""
            link="https://weather-app-da8g.vercel.app/"
            widthLg="400px"
          />
        </div>

        {/*---------------------  Technical Skills ---------------------*/}
        <div className="mt-16 ">
          <div className="flex flex-col gap-2 items-center justify-center my-8">
            <p className="text-center text-lg md:text-3xl text-2xl font-bold mt-4">
              Technical Skills
            </p>
            <p className="text-center text-sm md:text-md font-bold text-gray-400">
              Technologies and tools I work with
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <SkillCard
                title="~/frontend"
                skills={frontendSkill}
                header="Frontend"
                width=""
                widthLg="400px"
              />
              <SkillCard
                title="~/backend"
                skills={backendSkill}
                header="Backend"
                width=""
                widthLg="400px"
              />
              <SkillCard
                title="~/database"
                skills={databaseSkill}
                header="Database"
                width=""
                widthLg="400px"
              />
            </div>
          </div>
        </div>

        {/*---------------------  Contact ---------------------*/}
        <section className="flex justify-center items-center my-24" id="contact">
          <ContactCard
            title="~/contact"
            header="./send_message.sh"
            width="100%"
            widthLg="700px"
          />
        </section>
      </section>
    </div>
  );
}
