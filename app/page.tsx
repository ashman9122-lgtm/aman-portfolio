import Image from "next/image";

export default function Home() {
  return (
    <div className="
min-h-screen
bg-[#040815]
text-white
relative
overflow-hidden
">

{/* 3D Background */}

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[1600px]
h-[1200px]
pointer-events-none
opacity-80
"
>

<div
className="
absolute
top-[250px]
left-1/2
-translate-x-1/2
w-[1000px]
h-[1000px]
rounded-full
bg-cyan-400/15
blur-[260px]
animate-pulse
"
/>

<div
className="
absolute
top-[600px]
left-[5%]
w-[500px]
h-[500px]
blur-[200px]
rounded-full
bg-blue-500/15
"
/>

<div
className="
absolute
top-[700px]
right-[5%]
w-[500px]
h-[500px]
blur-[200px]
bg-cyan-400/12
rounded-full
"
/>

</div>

      {/* BACKGROUND GLOW */}
      <div
        className="
        absolute
        top-0
        right-0
        w-[600px]
        h-[600px]
        bg-cyan-500/10
        blur-[180px]
        "
      />
{/* GLOBAL CAR WATERMARK */}

<div
className="
absolute
inset-0
pointer-events-none
overflow-hidden
z-0
"
>

<img
src="/car2.jpg"
alt="car"

className="
absolute
right-[-0px]
top-[120px]
w-[1800px]
object-contain
rotate-[-0deg]
opacity-[0.18]
blur-[0px]
scale-[1.2]
"
/>

</div>


<div className="relative z-10"></div>
      {/* NAVBAR */}

      <nav
className="
sticky
top-0
z-50
relative z-10
max-w-7xl
mx-auto

px-10
py-8

flex
justify-between

backdrop-blur-xl

bg-[#040815]/60
"
>

        <h1 className="text-cyan-400 text-4xl font-bold">
          Aman.dev
        </h1>

        <div className="flex gap-10 text-gray-300">

          <a
href="#about"

className="
hover:text-cyan-400
duration-300
"
>

About

</a>

<a
href="#projects"

className="
hover:text-cyan-400
duration-300
"
>

Projects

</a>
<a
href="#experience"

className="
hover:text-cyan-400
duration-300
"
>

Experience

</a>
<a
href="#contact"

className="
hover:text-cyan-400
duration-300
"
>

Contact

</a>
          

        </div>

      </nav>


      {/* HERO */}

      <section
        className="
        relative z-10
        max-w-6xl
        mx-auto
        px-6
        "
      >

        <div
          className="
          grid
          lg:grid-cols-[1fr_0.85fr]
          gap-10
          items-center
          min-h-[80vh]
          "
        >

          {/* LEFT */}

          <div>

            <p
              className="
              text-cyan-400
              font-bold
              mb-6
              "
            >
              SOFTWARE ENGINEER
            </p>


            <h1
              className="
              text-[92px]
              leading-[0.88]
              tracking-[-5px]
              font-black
              "
            >

              AMAN

              <br />

              RAJ

            </h1>


            <h2
              className="
              text-4xl
              font-bold
              mt-5
              "
            >

              Software Engineer

            </h2>


            <p
              className="
              mt-8
              text-[18px]
              text-gray-300
              leading-[2]
              max-w-[520px]
              "
            >

              Building high-performance Automotive Embedded
              Systems using Modern C++, Adaptive AUTOSAR,
              Linux, Software Integration and Data Acquisition
              (DAQ).

            </p>


            {/* BUTTONS */}

            <div className="flex gap-5 mt-12">

              

                <a
href="/resume.pdf"

download

className="
px-10
py-5

rounded-full

bg-cyan-400

text-black

font-semibold

shadow-[0_0_60px_rgba(0,255,255,0.4)]

hover:scale-105

duration-300
"
>

Download Resume

</a>



              

                <a
href="#projects"

className="
px-10
py-5

rounded-full

border

border-cyan-400

hover:bg-cyan-400/10

duration-300
"
>

View Projects

</a>


            </div>



            {/* STATS */}

            <div
              className="
              flex
              gap-12
              mt-14
              "
            >

              <div>

                <h1
                  className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  "
                >
                  2+
                </h1>

                <p className="text-gray-400">

                  Years Experience

                </p>

              </div>



              <div>

                <h1
                  className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  "
                >
                  C++

                </h1>

                <p className="text-gray-400">

                  Modern C++

                </p>

              </div>



              <div>

                <h1
                  className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  "
                >
                  DAQ

                </h1>

                <p className="text-gray-400">

                  Automotive

                </p>

              </div>

            </div>

          </div>


          {/* RIGHT PHOTO */}

          <div
            className="
            flex
            justify-center
            "
          >

            <div
              className="
              relative
              w-[430px]
              h-[620px]

              rounded-[44px]

              overflow-hidden

              border

              border-cyan-400/40

              shadow-[0_0_80px_rgba(0,255,255,0.18)]
              "
            >

              {/* inner glow */}

              <div
                className="
                absolute
                inset-0
                rounded-[44px]
                bg-cyan-400/10
                blur-3xl
                scale-110
                "
              />



              <Image
                src="/aman.jpg"
                alt="Aman"
                fill
                priority
                className="
                object-cover
                object-center
                hover:scale-[1.02]
                duration-500
                "
              />

            </div>

          </div>
        
        </div>

      </section>
      <section id="about" className="max-w-6xl mx-auto px-6 py-32">

<h2 className="text-5xl font-bold mb-12">
About
</h2>

<div className="
project-card
bg-[#081220] rounded-[30px] p-10">

<p
className="
relative

text-gray-300

text-[18px]

leading-9

max-w-[1050px]
"
>

Software Engineer at
<span className="text-cyan-400 font-semibold">
 {" "}KPIT Technologies
</span>
 with experience in developing
Automotive Embedded Software solutions
using Modern C++, Adaptive AUTOSAR,
Linux and Data Acquisition (DAQ)
platforms.

<br />
<br />

Currently contributing to a centralized
vehicle Data Acquisition system that
processes configuration-driven event
workflows and enables intelligent
collection and transmission of vehicle
telemetry data.

The platform uses JSON-based
DAQ Specification Format (DSF)
configurations where event definitions
control service activation and service
processing behaviour.

<br />
<br />

Worked across software integration,
embedded validation, debugging,
automation and end-to-end verification
activities while collaborating with
cross-functional teams in Agile
development environments.

Experienced in ECU communication,
system-level analysis and scalable
software architectures for production
vehicle programs.

<br />
<br />

Core areas include Modern C++,
Embedded Systems, Software Integration,
Adaptive AUTOSAR, Linux development,
validation frameworks, automation and
building reliable automotive software
solutions.

</p>

</div>

</section>
<section id="skills" className="max-w-6xl mx-auto px-6 pb-32">

<h2 className="text-5xl font-bold mb-12">
Skills
</h2>

<div
className="
grid

grid-cols-2
md:grid-cols-4

gap-6
"
>

{[
"C++",
"AUTOSAR",
"Linux",
"Python",
"Git",
"Docker",
"CANoe",
"Automation",
].map((skill)=>(

<div

key={skill}

className="
project-card

bg-[#081220]

rounded-[28px]

border

border-cyan-400/10

p-10

text-center
"
>

<h1
className="
text-4xl

font-black

text-cyan-400
"
>

{skill}

</h1>

</div>

))}

</div>

</section>
<section id="experience" className="max-w-6xl mx-auto px-6 pb-32">

<h2 className="text-5xl font-bold mb-12">
Experience
</h2>

<div className="
project-card
bg-[#081220] p-10 rounded-[30px]">

<h1 className="text-3xl font-bold">
KPIT Technologies
</h1>

<p className="text-cyan-400 mt-2">
Software Engineer • Dec 2023 — Present
</p>

<p className="text-gray-500 mt-1">
Bengaluru, India
</p>
<div
className="
mt-10

flex

gap-5

flex-wrap
"
>

<span
className="
px-5

py-3

rounded-full

bg-cyan-400/10

text-cyan-400
"
>
Adaptive AUTOSAR
</span>

<span
className="
px-5

py-3

rounded-full

bg-cyan-400/10

text-cyan-400
"
>
Modern C++
</span>

<span
className="
px-5

py-3

rounded-full

bg-cyan-400/10

text-cyan-400
"
>
DAQ
</span>

<span
className="
px-5

py-3

rounded-full

bg-cyan-400/10

text-cyan-400
"
>
Linux
</span>

</div>

<ul
className="
mt-10
space-y-6

text-gray-300

text-[18px]

leading-9

list-disc

pl-6
"
>

<li>

Working on Automotive Data Acquisition
(DAQ) platform for centralized
vehicle telemetry processing and
event-driven data acquisition.

</li>


<li>

Developing and maintaining software
modules using Modern C++ and Linux
for embedded automotive applications.

</li>


<li>

Implemented configuration-driven
processing using JSON based
DAQ Specification Format (DSF)
files and event configuration
management.

</li>


<li>

Integrated communication with
multiple ECUs including CAN,
ADAS, OBC and related vehicle
subsystems to collect and process
required data.

</li>


<li>

Supported software integration,
debugging, issue analysis,
system validation and end-to-end
verification activities.

</li>


<li>

Collaborated with validation,
software and OEM teams in Agile
development environments to deliver
production-quality releases.

</li>


<li>

Contributed to scalable embedded
architectures with focus on
reliability, maintainability and
performance improvements.

</li>

</ul>
</div>

</section>
<section
id="projects"
className="
max-w-6xl
mx-auto
px-6
pb-32
"
>

<h2
className="
text-6xl
font-black
mb-14
"
>
Projects
</h2>


<div className="grid md:grid-cols-2 gap-8">

{/* PROJECT 1 */}

<div
className="
project-card

bg-[#081220]

rounded-[36px]

p-10

border

border-cyan-400/10
"
>

<div
className="
text-cyan-400
text-sm
mb-4
"
>

AUTOMOTIVE

</div>


<h1 className="text-3xl font-black">

DAQ Platform

</h1>


<p
className="
mt-6
text-gray-300
leading-9
"
>

Event-driven Automotive Data Acquisition
platform processing DSF specifications,
coordinating multiple ECUs and transmitting
telemetry to centralized systems.

</p>


<div
className="
flex
gap-3
mt-8
flex-wrap
"
>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
C++
</span>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
AUTOSAR
</span>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
Linux
</span>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
JSON
</span>

</div>

</div>



{/* PROJECT 2 */}

<div
className="
project-card

bg-[#081220]

rounded-[36px]

p-10

border

border-cyan-400/10
"
>

<div
className="
text-cyan-400
text-sm
mb-4
"
>

IOT

</div>


<h1 className="text-3xl font-black">

IV Drip Monitoring

</h1>


<p
className="
mt-6
text-gray-300
leading-9
"
>

Real-time intravenous monitoring
solution using NodeMCU, sensors
and live dashboard tracking.

</p>


<div
className="
flex
gap-3
mt-8
flex-wrap
"
>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
NodeMCU
</span>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
IoT
</span>

<span className="px-4 py-2 rounded-full bg-cyan-400/10">
Sensors
</span>

</div>

</div>

</div>

</section>
<section
id="contact"
className="
max-w-6xl
mx-auto
px-6
pb-32
"
>

<h2
className="
text-6xl
font-black
mb-14
"
>

Contact

</h2>


<div
className="
project-card

bg-[#081220]

rounded-[36px]

p-12

border

border-cyan-400/10
"
>

<p
className="
text-gray-300

text-xl

leading-10

max-w-3xl
"
>

Interested in Automotive Embedded Systems,
Modern C++, Adaptive AUTOSAR,
Software Integration or collaborating
on innovative engineering solutions.

Feel free to connect.

</p>


<div
className="
mt-12

space-y-8
"
>

<div>

<p className="text-gray-500">
Email
</p>

<a
href="mailto:amanrajvitvellore@gmail.com"

className="
text-cyan-400
text-2xl
"
>

amanrajvitvellore@gmail.com

</a>

</div>


<div>

<p className="text-gray-500">
LinkedIn
</p>

<a
href="https://linkedin.com/in/aman-raj-a772b727a"

target="_blank"

className="
text-cyan-400
text-2xl
"
>

linkedin.com/in/aman-raj-a772b727a

</a>

</div>


<div>

<p className="text-gray-500">
GitHub
</p>

<a
href="https://github.com/amanraj9122"

target="_blank"

className="
text-cyan-400
text-2xl
"
>

github.com/amanraj9122

</a>

</div>

</div>

</div>

</section>
<section className="max-w-6xl mx-auto px-6 pb-32">

<div
className="
rounded-[40px]
project-card
bg-[#081220]
p-20
text-center
border
border-cyan-400/20
"
>

<h1 className="text-6xl font-black">
Let's Build Something
</h1>

<p className="mt-8 text-gray-300 text-xl">

Open for Software Engineering and
Embedded Systems opportunities.

</p>

<div className="mt-12 flex justify-center gap-6">

<a
href="mailto:amanrajvitvellore@gmail.com"
className="
bg-cyan-400
text-black
px-10
py-5
rounded-full
font-semibold
"
>
Email
</a>

<a
href="https://linkedin.com/in/aman-raj-a772b727a"
className="
border
border-cyan-400
px-10
py-5
rounded-full
"
>
LinkedIn
</a>

</div>

</div>

</section>
<footer
className="
max-w-6xl
mx-auto

px-6

pb-14
"
>

<div
className="
border-t

border-cyan-400/10

pt-10

flex

justify-between

text-gray-500
"
>

<p>
© 2026 Aman Raj
</p>

<p>
Built with Next.js + Tailwind
</p>

</div>

</footer>

    </div>
  );
}