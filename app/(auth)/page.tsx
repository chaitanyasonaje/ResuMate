"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ArrowBigUp, AtomIcon, Edit, Share2, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";

const Page = () => {
  const user = useUser();
  const [darkMode, setDarkMode] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleFeedbackSubmit =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Header />
      <div className="absolute top-4 right-4">
        <button
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
      

      <section>
        <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 md:px-10">
          <h1 className="mt-4 lg:mt-8 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
            Build Your Resume <span className="text-primary-700 max-sm:block">With AI</span>
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">
            Effortlessly Craft a Professional Resume with Our AI-Powered Builder
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold text-white">Get Started</span>
            </Link>
            <Link
              href="#learn-more"
              className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-slate-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span className="relative text-base font-semibold">Learn more</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-12 md:px-10">
        <h2 className="font-bold text-3xl" id="learn-more">How it Works?</h2>
        <h2 className="text-md text-gray-500 dark:text-gray-400">Generate resume in just 3 steps</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-24">
          <div className="cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300">
            <AtomIcon className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold">Create Your Template</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Start by selecting the color scheme for your resume template. Our single, professionally designed template ensures a clean and consistent look for all users.
            </p>
          </div>

          <div className="cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300">
            <Edit className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold">Update Your Information</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Enter your personal details, work experience, education, and skills into the provided form. Our AI assists you in filling out each section accurately and effectively.
            </p>
          </div>

          <div className="cursor-pointer p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 shadow-xl max-md:shadow-md shadow-gray-600/10 hover:shadow-gray-600/15 transition-shadow duration-300">
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold">Share Your Resume</h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              After completing your resume, save it securely and generate a shareable link. Easily update your information anytime and share the link with potential employers or download it in a preferred format.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href="#get-started"
            className="inline-block rounded-full bg-primary-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-800 focus:outline-none focus:ring focus:ring-primary-400"
          >
            <div className="flex items-center justify-center">
              <ArrowBigUp className="h-6 w-6 mr-2" />
              Get Started Today
            </div>
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 mx-auto max-w-screen-xl text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Yogesh Girase",
              role: "AIML Engineer",
              image: "/img/yogesh.png",
              feedback: "ResuMate made creating a professional resume so simple. Highly recommend!",
            },
            {
              name: "Chetan Patil",
              role: "College Student",
              image: "/img/chetan.png",
              feedback: "A game-changer for job applications! The AI suggestions are spot on.",
            },
            {
              name: "Gopal Suryawanshi",
              role: "College Student",
              image: "/img/gopal.png",
              feedback: "Beautiful templates and user-friendly interface. Loved it!",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 mx-auto max-w-screen-md text-center">
        <h2 className="text-3xl font-bold mb-6">We Value Your Feedback</h2>
        <form onSubmit={handleFeedbackSubmit} className="flex flex-col items-center">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            placeholder="Share your thoughts or suggestions..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-primary-700 text-white px-6 py-2 rounded-md hover:bg-primary-800"
          >
            Submit
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-500">Thank you for your feedback!</p>
        )}
      </section>

      <footer className="backdrop-blur-md w-full">
        <div className="w-full mx-auto text-center max-w-screen-xl p-4 flex max-md:flex-col md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2024 ResuMate™. All Rights Reserved.
          </span>
          <Link href="https://github.com/chaitanyasonaje" className="me-4 md:me-6">
            <span className="hover:text-primary-500 mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              Made with ❤️ by Chaitanya Sonaje
            </span>
          </Link>
        </div>
      </footer>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-700 text-white dark:bg-gray-800"
      >
        {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default Page;
