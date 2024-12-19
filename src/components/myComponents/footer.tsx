"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ffd369] py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">

          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" style={{ height: "200px", width: "200px" }} />
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">Company</h3>
            <Link href="/work-with-us" className="text-gray-700">Work with us</Link>
            <Link href="/become-a-tutor" className="text-gray-700">Become a tutor</Link>
            <Link href="/terms-of-service" className="text-gray-700">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-gray-700">Privacy Policy</Link>
            <Link href="/staying-safe-online" className="text-gray-700">Staying safe online</Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold">For Students</h3>
            <Link href="/free-resources" className="text-gray-700">Free Resources</Link>
            <Link href="/financial-aid" className="text-gray-700">Financial Aid</Link>
            <Link href="/tutoring-programs" className="text-gray-700">Tutoring Programs</Link>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-600">
          All rights reserved. Copyright © IB Premier Academy
        </div>
      </div>
    </footer>
  );
}