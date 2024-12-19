"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NavButtons from "@/components/myComponents/navButtons"; 

export default function NavBar({
  items,
  mainstyles,
  liststyles,
}: Readonly<{ items: string[]; mainstyles?: string; liststyles?: string }>) {
  const renderItems = () => {
    return items.map((item, index) => (
      <NavigationMenuItem
        className="hover:text-red-500 transition duration-300"
        key={index}
      >
        <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
          <span className="text-xl">{item}</span>
        </Link>
      </NavigationMenuItem>
    ));
  };

  return (
    <>
      <style jsx>{`
        .link-hover:hover {
          color: rgba(192, 0, 6, 0.75);
        }
        .navbar-container {
          background-color: #ffd369;
          height: 100px;
          display: flex;
          align-items: center; /* Center content vertically */
          justify-content: flex-start; /* Align items to the left */
        }
        .nav-item-spacing {
          margin-right: 20px;
        }
        .logo-container img {
          width: 300px;
          height: auto; /* Adjust to maintain aspect ratio */
        }
        .nav-buttons-container {
          margin-top: 0; /* Remove negative margin */
        }
      `}</style>

      {/* Navbar container */}
      <div className="navbar-container flex items-center px-5 py-4">
        {/* Logo */}
        <div className="logo-container flex items-center mr-10"> {/* Added margin to separate logo from nav items */}
          <img src="/logo.png" alt="Logo" style={{ height: '100px', width: '100px' }} />
        </div>

        {/* Nav items on the left */}
        <div className="nav-buttons-container flex items-center">
          <ul className="flex items-center space-x-20">
            <li className="nav-item-spacing">
              <Link href="/" className="link-hover text-lg">
                About Us
              </Link>
            </li>
            <li className="nav-item-spacing">
              <Link href="/HowItWorks" className="link-hover text-lg">
                How it Works?
              </Link>
            </li>
            <li className="nav-item-spacing">
              <Link href="/BecomeATutor" className="link-hover text-lg">
                Become a Tutor
              </Link>
            </li>
            <li className="nav-item-spacing">
              <Link href="/BookClass" className="link-hover text-lg">
                Book a Class
              </Link>
            </li>
          </ul>
        </div>

        {/* Floating Contact Component for WhatsApp and Call */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918860256382"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              width={50}
              height={50}
              className="shadow-lg rounded-full hover:opacity-80"
            />
          </a>
          {/* Call */}
          <a href="tel:+918860256382">
            <img
              src="/call-icon.png"
              alt="Call"
              width={50}
              height={50}
              className="shadow-lg rounded-full hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </>
  );
}