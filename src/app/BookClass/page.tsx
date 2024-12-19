import NavBar from "@/components/myComponents/navBar";
import Footer from "@/components/myComponents/footer";
import { Button } from "@/components/ui/button";

export default function BookAClass() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar items={["About Us", "How It Works?", "Become a Tutor", "Book a Class"]} />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center p-10 space-y-10" style={{ 'minHeight': '80vh', 'marginTop': '50px' }}>
        {/* Page Title */}
        <h1 className="text-6xl text-blue-950 font-bold text-center">Book a Class with Our Expert Educators</h1>
        <p className="text-2xl text-gray-700 text-center max-w-4xl">
          At IB Premier Academy, we offer personalized learning experiences tailored to your needs. Whether you're looking to boost your understanding of a specific subject or get ahead with expert guidance, our dedicated educators are here to help you succeed. Schedule a class with us today and take the first step towards academic excellence!
        </p>

        {/* Why Book a Class with Us Section */}
        <div className="flex flex-col space-y-8 max-w-5xl">
          <h2 className="text-4xl text-blue-950 font-semibold text-center">Why Book a Class with Us?</h2>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">1</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Customized Learning</h3>
              <p className="text-lg text-gray-700">
                Our classes are tailored to your specific needs and learning goals. Whether you need help with a challenging topic or want to explore new areas, we provide personalized instruction to help you achieve your objectives.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">2</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Expert Educators</h3>
              <p className="text-lg text-gray-700">
                Learn from highly qualified educators who are experts in their fields. Our instructors bring a wealth of knowledge and experience to ensure you receive the best education possible.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">3</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Flexible Scheduling</h3>
              <p className="text-lg text-gray-700">
                Choose a time that works best for you. Our flexible scheduling options allow you to book classes at your convenience, whether you prefer online or in-person sessions.
              </p>
            </div>
          </div>

          <div className="benefit-item flex items-start space-x-4">
            <div className="benefit-icon bg-yellow-400 p-4 rounded-full">
              <span className="text-blue-950 text-3xl font-bold">4</span>
            </div>
            <div className="benefit-text">
              <h3 className="text-2xl font-semibold text-blue-950">Affordable Rates</h3>
              <p className="text-lg text-gray-700">
                We offer competitive pricing for our classes, ensuring that high-quality education is accessible to everyone. Explore our affordable options and find a plan that fits your budget.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}