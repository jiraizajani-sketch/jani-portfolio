
import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

// ---------------- TOOLS SECTION ----------------
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";

export const listTools = [
  { id: 1, gambar: Tools1, nama: "Visual Studio Code", ket: "Code Editor", dad: "100" },
  { id: 2, gambar: Tools2, nama: "React JS", ket: "Framework", dad: "200" },
  { id: 3, gambar: Tools3, nama: "Next JS", ket: "Framework", dad: "300" },
  { id: 4, gambar: Tools4, nama: "Tailwind CSS", ket: "Framework", dad: "400" },
  { id: 5, gambar: Tools5, nama: "Bootstrap", ket: "Framework", dad: "500" },
  { id: 6, gambar: Tools6, nama: "Javascript", ket: "Language", dad: "600" },
  { id: 7, gambar: Tools7, nama: "Node JS", ket: "Javascript Runtime", dad: "700" },
  { id: 8, gambar: Tools8, nama: "Github", ket: "Repository", dad: "800" },
  { id: 9, gambar: Tools9, nama: "Adobe Illustrator", ket: "Design App", dad: "900" },
  { id: 10, gambar: Tools10, nama: "Canva", ket: "Design App", dad: "1000" },
  { id: 11, gambar: Tools11, nama: "Figma", ket: "Design App", dad: "1100" },
  { id: 12, gambar: Tools12, nama: "Kotlin", ket: "Language", dad: "1200" },
  { id: 13, gambar: Tools13, nama: "Firebase", ket: "Framework", dad: "1300" },
  { id: 14, gambar: Tools14, nama: "HTML", ket: "Language", dad: "1400" },
  { id: 15, gambar: Tools15, nama: "CSS", ket: "Language", dad: "1500" },
  { id: 16, gambar: Tools16, nama: "TypeScript", ket: "Language", dad: "1600" },
  { id: 17, gambar: Tools17, nama: "PHP", ket: "Language", dad: "1700" },
  { id: 18, gambar: Tools18, nama: "Vite", ket: "Framework", dad: "1800" },
  { id: 19, gambar: Tools19, nama: "MySQL", ket: "Database", dad: "1900" },
];

// ---------------- PROJECTS SECTION ----------------
import L1 from "/assets/proyek/L1.png";
import L2 from "/assets/proyek/L2.png";
import L3 from "/assets/proyek/L3.png";
import L4 from "/assets/proyek/L4.png";
import Task from "/assets/proyek/task.png";
import Logo from "/assets/proyek/logo.png";
import Website from "/assets/proyek/website.png";
import IP from "/assets/proyek/ip (2).png";

export const listProyek = [
  {
    id: 1,
    image: L1,
    title: "Hover Card Effect",
    subtitle: "Profile card that reveals hidden text when hovered.",
    url: "https://github.com/jiraizajani-sketch/l1", // source code
    link: "https://github.com/jiraizajani-sketch/l1", // live preview
    openInNewTab: true,
  },
  {
    id: 2,
    image: L2,
    title: "“About Me” Button",
    subtitle: "Adds interactivity using JavaScript toggle.",
    url: "https://github.com/jiraizajani-sketch/l2",
    link: "https://github.com/jiraizajani-sketch/l2",
    openInNewTab: true,
  },
  {
    id: 3,
    image: L3,
    title: "Dark Mode Toggle",
    subtitle: "Dark mode switcher built with JavaScript and CSS.",
    url: "https://github.com/jiraizajani-sketch/l3",
    link: "https://github.com/jiraizajani-sketch/l3",
    openInNewTab: true,
  },
  {
    id: 4,
    image: L4,
    title: "Change Text on Button Click",
    subtitle: "Demonstrates basic DOM text manipulation.",
    url: "https://github.com/jiraizajani-sketch/l4",
    link: "https://github.com/jiraizajani-sketch/l4",
    openInNewTab: true,
  },
  {
    id: 5,
    image: Task,
    title: "TO-DO TASK MANAGER",
    subtitle: "A task list app using HTML, CSS, and JS (DOM manipulation).",
    url: "https://github.com/jiraizajani-sketch/task",
    link: "https://github.com/jiraizajani-sketch/task",
    openInNewTab: true,
  },
  {
  id: 6,
  image: Logo,
  title: "Logo Creation",
  link: Logo, // use the imported variable, not "/assets/..."
  url: null,
  openInNewTab: true,
},
{
  id: 7,
  image: Website,
  title: "Website using Wix",
  link: "https://jiraizajani.wixsite.com/jani",
  url: null,
  openInNewTab: true,
},
{
  id: 8,
  image: IP,
  title: "Promotional Poster For IP 17",
  link: IP, // use the imported variable, not "/assets/..."
  url: null,
  openInNewTab: true,
},
]