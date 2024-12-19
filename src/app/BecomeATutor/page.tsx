import NavBar from "@/components/myComponents/navBar";
import Footer from "@/components/myComponents/footer";
import { Button } from "@/components/ui/button";

export default function BecomeATutor() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar items={["About Us", "How It Works?", "Become a Tutor", "Book a Class"]} />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center p-10 space-y-10" style={{ 'minHeight': '80vh', 'marginTop': '50px' }}>
        {/* Page Title */}
        <h1 className="text-6xl text-blue-950 font-bold text-center">Join Our Team of Expert Educators</h1>
        <p className="text-2xl text-gray-700 text-center max-w-4xl">
          Are you a passionate IBDP-trained teacher looking to make a meaningful impact in the lives of students? At IB Premier Academy, we believe in empowering both our students and our teachers. We’re on the lookout for dedicated educators who are eager to inspire, innovate, and lead the next generation of global thinkers.
        </p>

        {/* Why Teach with Us Section */}
        <div className="flex flex-col space-y-8 max-w-5xl">
          <h2 className="text-4xl text-blue-950 font-semibold text-center">Why Teach with Us?</h2>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">1</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Shape the Future</h3>
              <p className="text-lg text-gray-700">
                At IB Premier Academy, you’ll influence young minds and guide them through one of the most challenging and rewarding academic programs. Your expertise will help students excel in the IB Diploma Programme (IBDP) and prepare them for success in higher education and beyond.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">2</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Flexibility and Balance</h3>
              <p className="text-lg text-gray-700">
                Our flexible scheduling allows you to balance your professional and personal life, whether teaching online or in-person. With access to comprehensive resources and digital tools, you can focus on what you do best—teaching.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">3</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Professional Development</h3>
              <p className="text-lg text-gray-700">
                We value continuous learning and offer professional development opportunities to refine your teaching strategies, keeping you ahead in your field.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">4</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Competitive Compensation</h3>
              <p className="text-lg text-gray-700">
                We believe in rewarding excellence. As part of our team, you'll receive competitive compensation and benefits, recognizing the value you bring to our students and academy.
              </p>
            </div>
          </div>
        </div>

        {/* Who We're Looking For Section */}
        <div className="who-we-want-section flex flex-col space-y-8 max-w-5xl">
          <h2 className="text-4xl text-blue-950 font-semibold text-center">Who We’re Looking For</h2>

          <ul className="list-disc text-xl text-gray-700 space-y-4">
            <li><strong>Passionate Educators:</strong> You are dedicated to inspiring students and enthusiastic about your subject.</li>
            <li><strong>IBDP Expertise:</strong> You have in-depth knowledge of the IB curriculum and a proven track record of student success.</li>
            <li><strong>Innovative Thinkers:</strong> You use modern teaching methods to engage students creatively.</li>
            <li><strong>Committed Professionals:</strong> You contribute to a positive learning environment and collaborate well with other educators.</li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="cta-section flex flex-col items-center space-y-6">
          <h3 className="text-3xl text-blue-950 font-semibold text-center">How to Join Us</h3>
          <p className="text-xl text-gray-700 text-center max-w-3xl">
            Ready to take the next step in your teaching career? If you’re an IBDP-trained teacher with a passion for excellence, submit your application today. Include your resume, a brief cover letter, and relevant certifications.
          </p>
          
          
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}