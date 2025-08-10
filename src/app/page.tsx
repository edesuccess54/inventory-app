import Link from "next/link";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <nav className="flex gap-3 justify-end p-6 mb-8">
        <Link href="/login" className="text-blue-600">
          Login
        </Link>

        <Link href="/signin" className="text-blue-600">
          Sign In
        </Link>
      </nav>
      This is the home page
    </div>
  );
};

export default Homepage;
