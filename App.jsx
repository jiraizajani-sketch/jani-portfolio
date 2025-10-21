import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import ChatRoom from "./components/ChatRoom";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10 ">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
              <img src="./assets/jani.jfif" className="w-10 rounded-md" />
              <q>Avoid or just undertake it</q>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <ShinyText
                text="Hi I'm Jir aiza Jani"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h1>
            <BlurText
              text="This web portfolio presents a professional overview of my skills, education, experience, and projects. It features a responsive design, interactive elements, and showcases my achievements through clear sections including Home, Resume/CV, Education, Experience, Projects, and Laboratory Activities."
              delay={150}
              animateBy="words"
              direction="top"
              className=" mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Jir aiza Jani"
              title="Web Developer"
              handle="aizajani"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/aiza.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>

        {/* About Section */}
<div
  className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
  id="about"
>
  <div
    className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    {/* Text Section */}
    <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
      <div className="flex-1 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          About Me
        </h2>

        <BlurText
          text="Hi! I’m Jir Aiza Jani, a 20-year-old third-year BS Information Technology student at Davao del Sur State College. I’m passionate about web development, programming, and creating interactive digital experiences. I enjoy learning new technologies, building projects that solve real problems, and continuously improving my skills. My goal is to contribute to innovative tech solutions while growing as a professional in the IT field."
          animateBy="words"
          direction="top"
          className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
        />

        <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
          <div>
            <h1 className="text-3xl md:text-4xl mb-1">
              5<span className="text-violet-500">+</span>
            </h1>
            <p>Project Finished</p>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl mb-1">
              3<span className="text-violet-500">+</span>
            </h1>
            <p>Years of Experience</p>
          </div>
        </div>

        <ShinyText
          text="Working with heart, creating with mind."
          disabled={false}
          speed={3}
          className="text-sm md:text-base text-violet-400"
        />
      </div>
    </div>

    {/* Image Section */}
    <div className="basis-full md:basis-5/12 flex justify-center">
      <img
        src="./assets/jir.jfif"
        alt="Jir Aiza Jani"
        className="rounded-3xl shadow-lg max-w-full h-auto"
      />
    </div>
  </div>
</div>


        {/* Resume/CV Section */}
        <div
          className="resume mt-16 p-6 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
            Resume/CV
          </h2>

          <div className="mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <h3 className="text-xl font-semibold text-violet-400 mb-2">Career Summary</h3>
            <p className="text-gray-300 text-base md:text-lg">
              I am Jir Aiza Jani, a third-year BS Information Technology student at Davao del Sur State College. Passionate about web development and creating interactive digital experiences, I enjoy building projects that solve real problems and continuously improving my skills. I aim to contribute to innovative IT solutions while growing as a professional.
            </p>
          </div>

          <div className="mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <h3 className="text-xl font-semibold text-violet-400 mb-2">Skills & Links</h3>
            <ul className="text-gray-300 text-base md:text-lg list-disc list-inside">
              <li>Web Development (HTML, CSS, JavaScript, React, Tailwind CSS)</li>
              <li>Programming & Algorithms</li>
              <li>Problem Solving & Project Management</li>
              <li>GitHub: <a href="https://github.com/jiraizajani-sketch" className="text-violet-400 underline">github.com/aizajani</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/aizajani" className="text-violet-400 underline">linkedin.com/in/aizajani</a></li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">Education</h3>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-zinc-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg text-white">Malinaon National High School of Arts and Trade</h4>
                <p className="text-gray-400 text-sm mb-1">High School Diploma (4 years)</p>
                <p className="text-gray-300 text-sm">Awards: Consistent Merit Award, Attendance Award</p>
                <p className="text-gray-500 text-xs mt-1">2016 - 2020</p>
              </div>
              <div className="flex-1 bg-zinc-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-lg text-white">Saint Michael School of Padada</h4>
                <p className="text-gray-400 text-sm mb-1">Senior High School (2 years)</p>
                <p className="text-gray-500 text-xs mt-1">2020 - 2022</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
<div
  className="proyek mt-32 py-10"
  id="project"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-once="true"
></div>
<h1
  className="text-center text-4xl font-bold mb-2"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-once="true"
>
  Laboratory Activities and Projects
</h1>
<p
  className="text-base/loose text-center opacity-50"
  data-aos="fade-up"
  data-aos-duration="1000"
  data-aos-delay="300"
  data-aos-once="true"
>
  Showcasing a selection of activities and projects that reflect my skills, creativity, and passion for building meaningful digital experiences.
</p>
<div className="proyek-box mt-14">
  <div
    style={{ height: "auto", position: "relative" }}
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="400"
    data-aos-once="true"
  >
    <ChromaGrid
      items={listProyek}
      onItemClick={(project) => {
        if (project.link) {
          if (project.openInNewTab) {
            window.open(project.link, "_blank"); // open in new tab
          } else {
            window.location.href = project.link; // open in same tab
          }
        }
      }}
      radius={500}
      damping={0.45}
      fadeOut={0.6}
      ease="power3.out"
    />
  </div>
</div>

        

        {/* Contact Section */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="flex-1 bg-zinc-800 p-6 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <ChatRoom />
            </div>

            <div className="flex-1">
              <form
                action="https://formsubmit.co/jiraizajani@gmail.com"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText
                        text="Send"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
