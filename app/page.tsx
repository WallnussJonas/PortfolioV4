import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  MonitorSmartphone,
  PenTool,
  ShoppingCart,
  Search,
  FileText,
  Menu,
  Clock,
  GitBranch,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import JLogo from "@/public/images/j.png";
import Headshot from "@/public/images/headshot.jpg";

export const metadata = {
  title: "Jonas Werner | Web Developer",
  description: "Jonas Werner - Web Developer. Explore my portfolio showcasing web development, mobile apps, and design expertise.",
  icons: {
    icon: "/images/favicon.ico",
  },
}
export default function Portfolio() {
  const skills = [
    { name: "Web Development", level: 90 },
    { name: "UI/UX Design", level: 85 },
    { name: "Mobile App", level: 30 },
  ];
  const services = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-orange-500" />,
      title: "Web Development",
      description: "Custom websites tailored to your needs",
    },
    {
      icon: <PenTool className="w-8 h-8 text-orange-500" />,
      title: "UI/UX Design",
      description: "Intuitive and visually appealing interfaces",
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-orange-500" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-orange-500" />,
      title: "E-commerce Solutions",
      description: "Secure and scalable online stores",
    },
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings",
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "Content Management",
      description: "Easy-to-use CMS for your website",
    },
  ];

  const projects = [
    {
      title: "Schulsync.com",
      image: "/images/schulsync.png",
      link: "https://schulsync.com",
    },
    {
      title: "Sausage Clicker",
      image: "/images/SausageClicker.png",
      link: "https://github.com/WallnussJonas/Sausage-Clicker",
    },
    {
      title: "Logo Quiz App",
      image: "/images/QuizApp.png",
      link: "https://github.com/WallnussJonas/LogoQuizApp",
    },
    {
      title: "AI & ML Projects",
      image: "/images/Ai.jpg",
      link: "#",
      underConstruction: true,
    },
  ];

  const internships = [
    {
      company: "Dealino",
      position: "Intern",
      period: "Sept 2022 - Oct 2022",
      description: "Developed my first portfolio using HTML, CSS and JS.",
    },
    {
      company: "IBYKUS",
      position: "Intern",
      period: "Jan 2022 - Feb 2022",
      description: "Created a python quiz app using Tkinter.",
    },
    {
      company: "InstantDocs",
      position: "Website Manager",
      period: "May 2023 - Now",
      description: "Created and configured websites and sales automations",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Happy Clients",
      value: "23",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Hours Coded",
      value: "2,316",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-green-500" />,
      title: "Git Commits",
      value: "469",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <title>Jonas Werner | Web Developer </title>
        <meta
          name="description"
          content="Jonas Werner - Web Developer. Explore my portfolio showcasing web development, mobile apps, and design expertise."
        />
        <meta
          name="keywords"
          content="Jonas Werner, Web Developer, UI/UX Designer, Portfolio, Web Development, Mobile App, Design"
        />
        <meta name="author" content="Jonas Werner" />
        <meta
          property="og:title"
          content="Jonas Werner | Web Developer"
        />
        <meta
          property="og:description"
          content="Explore Jonas Werner's portfolio with expertise in web development, mobile app development, and UI/UX design."
        />
        <meta property="og:image" content="/images/j.png" />
        <meta property="og:url" content="https://jonaswerner.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jonas Werner | Web Developer"
        />
        <meta
          name="twitter:description"
          content="Explore Jonas Werner's portfolio with expertise in web development, mobile app development, and UI/UX design."
        />
        <meta name="twitter:image" content="/images/j.png" />
        <link rel="icon" type="image/png" href="/images/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">
            Jonas <span className="text-orange-500">Werner</span>
          </h1>
          <nav className="hidden md:flex space-x-6">
            {["About", "Services", "Projects", "Achievements", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {[
                  "About",
                  "Services",
                  "Projects",
                  "Achievements",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600">
            Hire Me!
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-medium">
            Hello There
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Jonas Werner</h2>
          <p className="text-xl text-gray-400">
            A hobby Front-end React Developer based in Thuringia, Germany. 📍
          </p>
          <div className="flex space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Download CV
            </Button>
            <a
              href="https://github.com/wallnussjonas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">My Work</Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src={JLogo}
            alt="Logo"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
            <div className="md:w-1/3">
              <Image
                src={Headshot}
                alt="Jonas Werner"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Who am I?
              </h3>
              <p className="mb-6 text-gray-300">
                Hey, my name is Jonas and I have a passion for programming and I
                am constantly exploring new ways to make an impact on the real
                and the digital world. My current main stack is Vite + React in
                combination with Tailwind and Shadcn.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-orange-500 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      indicatorClassName="bg-orange-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">My Services</h2>
          <p className="text-center mb-12 text-gray-400">
            Offering a comprehensive range of digital solutions to elevate your
            online presence and streamline your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    {service.icon}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Impact Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">My Impact</h2>
          <p className="text-center mb-12 text-gray-400">
            Offering a comprehensive range of digital solutions to elevate your
            online presence and streamline your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600">
                <CardContent className="flex flex-col items-center p-6">
                  {stat.icon}
                  <CardTitle className="text-3xl font-bold mt-4">
                    {stat.value}
                  </CardTitle>
                  <p className="text-gray-400">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* My Work Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">My Work</h2>
          <p className="text-center mb-12 text-gray-400">
            Offering a comprehensive range of digital solutions to elevate your
            online presence and streamline your business operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  {project.underConstruction && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 pt-20">
                      {/* Overlay Image */}
                      <Image
                        src="/images/under-construction.png"
                        alt="Under Construction"
                        width={400}
                        height={300}
                        className="opacity-75"
                      />
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold mb-4">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Website
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="achievements" className="w-full py-12 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">
            My Experience
          </h2>
          <p className="text-center mb-8 md:mb-12 text-gray-400 max-w-2xl mx-auto">
            A chronological journey through my professional development,
            showcasing the diverse skills and experiences gained from various
            internships.
          </p>
          <div className="relative">
            {/* Vertical line - hidden on small screens */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-500 hidden md:block"></div>

            {internships.map((internship, index) => (
              <div
                key={index}
                className={`mb-8 flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } items-center w-full`}
              >
                <Card
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  } bg-gray-800 border-gray-700`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-orange-500">
                      {internship.company}
                    </CardTitle>
                    <p className="text-sm font-medium text-white">
                      {internship.position}
                    </p>
                    <p className="text-sm text-gray-400">{internship.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      {internship.description}
                    </p>
                  </CardContent>
                </Card>
                {/* Timeline dot - hidden on small screens, visible on md and above */}
                <div
                  className={`w-4 h-4 rounded-full bg-orange-500 border-4 border-white hidden md:block md:absolute md:left-1/2 md:transform md:-translate-x-1/2 ${
                    index % 2 === 0 ? "md:mt-5" : "md:mb-5"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-20 bg-[#0c0e1a]">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <p className="text-center mb-12 text-gray-400">
            Let&#39;s turn your ideas into reality
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="text"
                placeholder="Name"
                className="bg-white text-black placeholder-gray-500 rounded-md"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-white text-black placeholder-gray-500 rounded-md"
              />
            </div>
            <Input
              type="text"
              placeholder="Subject"
              className="bg-white text-black placeholder-gray-500 rounded-md"
            />
            <Textarea
              placeholder="Message"
              className="min-h-[150px] bg-white text-black placeholder-gray-500 rounded-md"
            />
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-md">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-6 bg-gray-800 border-t border-gray-700">
        <p className="text-gray-400">
          © 2024 Jonas Werner. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
