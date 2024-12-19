"use client";

import NavBar from "@/components/myComponents/navBar";
import Footer from "@/components/myComponents/footer";
import { useState } from "react";

export default function HowItWorks() {
  const [formType, setFormType] = useState("bookClass"); // State for form type

  // Change background color based on the formType
  const formBgColor = formType === "bookClass" ? "bg-blue-100" : "bg-yellow-100";

  return (
    <>
      {/* Navigation Bar */}
      <NavBar items={["About Us", "How It Works?", "Become a Tutor", "Book a Class"]} />

      {/* Main Content */}
      <div className="flex flex-row justify-between p-10 space-y-10" style={{ minHeight: '80vh', marginTop: '50px' }}>
        {/* Left Content Section */}
        <div className="flex flex-col justify-center max-w-2xl space-y-6">
          <h1 className="text-6xl text-blue-950 font-bold">How It Works</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            At IB Premier Academy, we offer specialized coaching tailored to meet the unique needs of students pursuing the International Baccalaureate (IB) program. Our academy focuses on delivering high-quality, personalized instruction that aligns with the rigorous IB curriculum.
          </p>

          {/* Steps */}
          <div className="steps-container space-y-8">
            <div className="step flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
              <div className="step-icon bg-yellow-400 p-4 rounded-full">
                <span className="text-blue-950 text-3xl font-bold">1</span>
              </div>
              <div className="step-text">
                <h3 className="text-2xl font-semibold text-blue-950">Personalized Instruction</h3>
                <p className="text-lg text-gray-700">
                  With expert instructors, we provide comprehensive coverage of all key subjects, ensuring students grasp complex concepts while developing critical thinking skills.
                </p>
              </div>
            </div>

            <div className="step flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
              <div className="step-icon bg-yellow-400 p-4 rounded-full">
                <span className="text-blue-950 text-3xl font-bold">2</span>
              </div>
              <div className="step-text">
                <h3 className="text-2xl font-semibold text-blue-950">Flexible Scheduling</h3>
                <p className="text-lg text-gray-700">
                  Our online classes are designed to accommodate varying schedules, allowing students to learn at their own pace and convenience.
                </p>
              </div>
            </div>

            <div className="step flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
              <div className="step-icon bg-yellow-400 p-4 rounded-full">
                <span className="text-blue-950 text-3xl font-bold">3</span>
              </div>
              <div className="step-text">
                <h3 className="text-2xl font-semibold text-blue-950">Small Class Sizes</h3>
                <p className="text-lg text-gray-700">
                  We maintain small class sizes to provide individualized attention and targeted support to every student.
                </p>
              </div>
            </div>

            <div className="step flex items-start space-x-4 hover:scale-105 transition-transform duration-300">
              <div className="step-icon bg-yellow-400 p-4 rounded-full">
                <span className="text-blue-950 text-3xl font-bold">4</span>
              </div>
              <div className="step-text">
                <h3 className="text-2xl font-semibold text-blue-950">Continuous Feedback</h3>
                <p className="text-lg text-gray-700">
                  Through interactive lessons, regular assessments, and continuous feedback, we ensure that students stay on track and achieve their academic goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}