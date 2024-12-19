import Image from "next/image";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/myComponents/navBar";
import Footer from "@/components/myComponents/footer";
import { InfiniteMovingCards } from "@/components/myComponents/infinite-moving-cards"
import Link from 'next/link';  // Import Next.js Link component

export default function Home() {
  return (
    <>
      <NavBar items={["About Us", "How it works?", "Become a Tutor", "Book a Class"]} />
      <div className="flex flex-col p-10 space-y-6 justify-center items-center">
        <div className="main flex flex-row p-6 space-x-4 justify-center items-center">
          <div className="head ml-8 mt-10 p-6">
            <h1 className="text-6xl text-blue-950">Premier IB Academy</h1>
            <h4 className="text-2xl text-blue-950">Ready to elevate your studies?</h4>
            <h4 className="text-2xl text-blue-950">Our live tutoring sessions are tailored to help you master tough subjects,</h4>
            <h4 className="text-2xl text-blue-950">clear up doubts, and ace your exams with confidence!</h4>

            {/* Use Link for navigation to BookClass */}

            <Button className="px-4 py-2 bg-blue-950 text-yellow-400 rounded-[4px] hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-100 mr-2 mt-2">
              <Link href="/BookClass">
              Book a Class
              </Link>
            </Button>
            {/* <Button
              as={Link}
              href="/BookClass"
              className="px-4 py-2 bg-blue-950 text-yellow-400 rounded-[4px] hover:bg-yellow-400 hover:text-blue-950 transition-colors duration-100 mr-2 mt-2"
            >
              Book a Class
            </Button> */}

          
          </div>
          <div className="flex justify-center items-center" style={{ 'marginRight': '0px', 'marginTop': '0px' }}>
            <Image src="/girl_stu.png" alt="student" width={950} height={950} />
          </div>
        </div>
      </div>

      <div className="AboutUs flex flex-col p-10 space-y-6 justify-center items-center" style={{ 'marginTop': '160px', 'marginRight': '160px', 'marginLeft': '160px' }}>
        <h2 className="text-4xl text-blue-950">About Us</h2>
        <p className="text-2xl text-blue-950 text-center">At Premiere IB Academy, we are dedicated to providing top-notch education to students preparing for the IGCSE, IB, and A-Level examinations. Our mission is to empower students with the knowledge, skills, and confidence they need to excel in their academic pursuits and beyond.</p>
      </div>

      <div className="Testimonials flex flex-col p-10 space-y-6 justify-center items-center" style={{ 'marginTop': '200px' }}>
        <h2 className="text-4xl text-blue-950">Student Testimonials</h2>
      </div>

      <div className="flex justify-center items-center mt-4 mb-10">
        <InfiniteMovingCards
          className="justify-center items-center"
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>

      <div style={{ 'marginTop': '200px' }}> <Footer></Footer> </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "The personalized approach really helped me grasp difficult IBDP topics. The instructors made everything clear and manageable, even for the most challenging subjects.",
    name: "Ananya Singh",
    title: "IBDP Year 2 Student",
  },
  {
    quote:
      "Thanks to the flexible scheduling, I was able to prepare for my IGCSE exams while staying on top of my extracurricular commitments. It made a world of difference!",
    name: "Rahul Menon",
    title: "IGCSE Student",
  },
  {
    quote:
      "The small class sizes allowed me to ask questions and get the help I needed for my A Levels. I felt confident walking into my exams because of the support I received.",
    name: "Priya Kapoor",
    title: "A Levels Student",
  },
  {
    quote:
      "The instructors were incredibly patient and knowledgeable. They helped me build a strong foundation in MYP that I know will help me in higher grades.",
    name: "Mohammed Ali",
    title: "MYP Year 4 Student",
  },
  {
    quote:
      "This program really stood out because of the continuous feedback I received. It kept me motivated and prepared for my coursework in IGCSE and beyond.",
    name: "Sakshi Mehra",
    title: "IGCSE Student",
  },
];