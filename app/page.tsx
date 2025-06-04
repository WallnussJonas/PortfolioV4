"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { ContactCard, ContactCardContent } from "@/components/ui/contactcard";

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
      image: "/images/Schulsync.png",
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
      value: "23+",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Hours Coded",
      value: "316+",
    },
    {
      icon: <GitBranch className="w-8 h-8 text-green-500" />,
      title: "Git Commits",
      value: "469+",
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
        <meta property="og:title" content="Jonas Werner | Web Developer" />
        <meta
          property="og:description"
          content="Explore Jonas Werner's portfolio with expertise in web development, mobile app development, and UI/UX design."
        />
        <meta property="og:image" content="/images/j.png" />
        <meta property="og:url" content="https://jonaswerner.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jonas Werner | Web Developer" />
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
            {["About", "Services", "Projects", "Experience", "Contact"].map(
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
              <Button variant="ghost" size="icon" className="ml-auto md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-gray-900 text-white">
              <nav className="flex flex-col space-y-4 mt-8">
                {["About", "Services", "Projects", "Experience", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-lg hover:text-orange-500 transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="#contact">
            <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600">
              Hire Me!
            </Button>
          </Link>
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
      <section id="experience" className="w-full py-12 md:py-20 bg-gray-900">
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
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Contact Me
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <ContactCard className="bg-gray-800 border-gray-700">
              <ContactCardContent className="flex flex-col items-center p-6">
                <Image
                  src="/icons/envelope-regular.svg"
                  alt="Email"
                  width={34}
                  height={34}
                />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400 text-center">
                  contact@jonaswerner.com
                </p>
              </ContactCardContent>
            </ContactCard>
            <ContactCard className="bg-gray-800 border-gray-700">
              <ContactCardContent className="flex flex-col items-center p-6">
                <Image
                  src="/icons/discord-brands-solid.svg"
                  alt="Discord"
                  width={34}
                  height={34}
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Discord
                </h3>
                <p className="text-gray-400 text-center">JonasDieNuss</p>
              </ContactCardContent>
            </ContactCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            <Link
              href="https://www.instagram.com/wallnussjonas/"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/instagram-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCn8Q7vcAnqcU8tVeQcIOQug"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/youtube-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              href="https://twitter.com/wallnussjonas"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/x-twitter-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.twitch.tv/wallnussjonas"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/twitch-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">Twitch</span>
            </Link>
            <Link
              href="https://github.com/WallnussJonas"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/github-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jonas-werner-73b531223/"
              target="_blank"
              className="hover:text-gray-400 transition-colors"
            >
              <Image
                src="/icons/linkedin-brands-solid.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="flex justify-center space-x-4 mb-4">
            {/* Datenschutz Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-sm text-gray-400 hover:text-white underline">
                  Datenschutz
                </button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="max-h-[80vh] overflow-y-auto bg-gray-900 text-white"
              >
                <h2 className="text-xl font-bold mb-4">Datenschutzerklärung</h2>
                <div className="text-gray-300 space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      1. Datenschutz auf einen Blick
                    </h3>
                    <p className="mb-3">
                      <strong>Allgemeine Hinweise:</strong> Die folgenden
                      Hinweise geben einen einfachen Überblick darüber, was mit
                      Ihren personenbezogenen Daten passiert, wenn Sie unsere
                      Website besuchen. Personenbezogene Daten sind alle Daten,
                      mit denen Sie persönlich identifiziert werden können.
                    </p>
                    <p className="mb-3">
                      <strong>Datenerfassung auf unserer Website:</strong> Die
                      Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Impressum dieser Website entnehmen.
                    </p>
                    <p className="mb-3">
                      <strong>Wie erfassen wir Ihre Daten?</strong> Ihre Daten
                      werden zum einen dadurch erhoben, dass Sie uns diese
                      mitteilen. Hierbei kann es sich z. B. um Daten handeln,
                      die Sie in ein Kontaktformular eingeben. Andere Daten
                      werden automatisch beim Besuch der Website durch unsere
                      IT-Systeme erfasst. Das sind vor allem technische Daten
                      (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                      Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                      automatisch, sobald Sie unsere Website betreten.
                    </p>
                    <p className="mb-3">
                      <strong>Wofür nutzen wir Ihre Daten?</strong> Ein Teil der
                      Daten wird erhoben, um eine fehlerfreie Bereitstellung der
                      Website zu gewährleisten. Andere Daten können zur Analyse
                      Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      2. Hosting
                    </h3>
                    <p className="mb-3">
                      <strong>Externes Hosting:</strong> Diese Website wird bei
                      einem externen Dienstleister gehostet (Vercel Inc.). Die
                      personenbezogenen Daten, die auf dieser Website erfasst
                      werden, werden auf den Servern des Hosters gespeichert.
                      Hierbei kann es sich v. a. um IP-Adressen, Meta- und
                      Kommunikationsdaten, Websitezugriffe und sonstige Daten
                      handeln, die über eine Website generiert werden.
                    </p>
                    <p className="mb-3">
                      <strong>
                        Abschluss eines Vertrages über Auftragsverarbeitung:
                      </strong>{" "}
                      Wir haben mit Vercel einen Vertrag zur
                      Auftragsverarbeitung abgeschlossen, in dem wir Vercel
                      verpflichten, die Daten unserer Kunden zu schützen und sie
                      nicht an Dritte weiterzugeben.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      3. Datenerfassung auf unserer Website
                    </h3>
                    <p className="mb-3">
                      <strong>Server-Log-Dateien:</strong> Der Provider der
                      Seiten erhebt und speichert automatisch Informationen in
                      sogenannten Server-Log-Dateien, die Ihr Browser
                      automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc pl-6 mb-3 space-y-1">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p className="mb-3">
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen
                      wird nicht vorgenommen.
                    </p>
                    <p className="mb-3">
                      <strong>Grundlage für die Datenverarbeitung:</strong> Die
                      Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                      Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                      berechtigtes Interesse an der technisch fehlerfreien
                      Darstellung und der Optimierung seiner Website – hierzu
                      müssen die Server-Log-Files erfasst werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      4. Analyse-Tools und Tools von Drittanbietern
                    </h3>
                    <p className="mb-3">
                      <strong>Vercel Analytics:</strong> Diese Website nutzt
                      Vercel Analytics, einen Webanalysedienst der Vercel Inc.
                      Vercel Analytics verwendet keine Cookies und speichert
                      keine personenbezogenen Daten. Die Analyse erfolgt
                      anonymisiert.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      5. Plugins und Tools
                    </h3>
                    <p className="mb-3">
                      <strong>Google Fonts:</strong> Diese Seite nutzt zur
                      einheitlichen Darstellung von Schriftarten sogenannte
                      Google Fonts, die von Google bereitgestellt werden. Beim
                      Aufruf einer Seite lädt Ihr Browser die benötigten Fonts
                      in ihren Browsercache, um Texte und Schriftarten korrekt
                      anzuzeigen.
                    </p>
                    <p className="mb-3">
                      <strong>Hinweis:</strong> Beim Laden der Google Fonts wird
                      eine Verbindung zu Servern von Google hergestellt. Dabei
                      kann Google ermitteln, welche Website Sie besucht haben.
                      Auch wird die IP-Adresse des Browsers des Endgeräts des
                      Besuchers dieser Internetseiten von Google gespeichert.
                    </p>
                    <p className="mb-3">
                      <strong>Grundlage für die Datenverarbeitung:</strong> Die
                      Nutzung von Google Fonts erfolgt im Interesse einer
                      einheitlichen und ansprechenden Darstellung unserer
                      Online-Angebote. Dies stellt ein berechtigtes Interesse im
                      Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      6. Ihre Rechte
                    </h3>
                    <p className="mb-3">
                      Sie haben jederzeit das Recht auf unentgeltliche Auskunft
                      über Ihre gespeicherten personenbezogenen Daten, deren
                      Herkunft und Empfänger und den Zweck der Datenverarbeitung
                      sowie ein Recht auf Berichtigung oder Löschung dieser
                      Daten. Hierzu sowie zu weiteren Fragen zum Thema
                      Datenschutz können Sie sich jederzeit unter der im
                      Impressum angegebenen Adresse an uns wenden.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      7. Widerspruch gegen Werbe-Mails
                    </h3>
                    <p className="mb-3">
                      Der Nutzung von im Rahmen der Impressumspflicht
                      veröffentlichten Kontaktdaten zur Übersendung von nicht
                      ausdrücklich angeforderter Werbung und
                      Informationsmaterialien wird hiermit widersprochen. Der
                      Betreiber der Seiten behält sich ausdrücklich rechtliche
                      Schritte im Falle der unverlangten Zusendung von
                      Werbeinformationen, etwa durch Spam-E-Mails, vor.
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Impressum Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-sm text-gray-400 hover:text-white underline">
                  Impressum
                </button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="max-h-[80vh] overflow-y-auto bg-gray-900 text-white"
              >
                <h2 className="text-xl font-bold mb-4">Impressum</h2>
                <div className="text-gray-300 space-y-4">
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Angaben gemäß § 5 TMG:
                    </h3>
                    <div className="space-y-1">
                      <p>Jonas Werner</p>
                      <p>Pförtchenstraße 4</p>
                      <p>99096 Erfurt</p>
                      <p>Deutschland</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">Kontakt:</h3>
                    <p>E-Mail: contact@jonaswerner.com</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                    </h3>
                    <div className="space-y-1">
                      <p>Jonas Werner</p>
                      <p>Pförtchenstraße 4</p>
                      <p>99096 Erfurt</p>
                      <p>Deutschland</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="text-center text-sm text-gray-400">
            <p>© 2025 Jonas Werner. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
