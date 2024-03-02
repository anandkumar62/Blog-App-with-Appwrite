import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo.jsx";

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2024. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                My Projects
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/React-Weather-App/"
                  >
                    Weather App
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/TWO-GOOD-CO.-Website-Clone-HTML-CSS-JAVASCRIPT-/"
                  >
                    TWO GOOD CO Website-Clone
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/Password-Generator-by-using-React/"
                  >
                    Password Generator
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/BMI-CALCULATOR/"
                  >
                    BMI CALCULATOR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://github.com/anandkumar62/"
                  >
                    Github Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://www.linkedin.com/in/01anand-kumar/"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://api.whatsapp.com/"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://www.google.com/search?q=8219353946&sca_esv=601322691&sxsrf=ACQVn08r79s0pqm7W5n5WasuMGkpifsdZA%3A1706162287981&ei=b_ixZbDFO7y5seMPhr2ImAQ&oq=821&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgDIgM4MjEqAggAMgQQIxgnMhEQLhiABBjlBBiLAxioAxigAzIIEAAYgAQYiwMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKYeUABY1gJwAHgBkAEAmAG5BqABhw-qAQU1LTIuMbgBAcgBAPgBAcICCxAAGIAEGIoFGJECwgIIEC4YgAQYsQPCAhEQLhixAxiABBiLAxikAxioA8ICFBAuGIAEGLEDGIsDGKQDGKgDGPADwgIOEAAYgAQYigUYkQIYsQPCAggQABiABBixA-IDBBgAIEE&sclient=gws-wiz-serp"
                  >
                    Help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                My Games
              </h3>
              <ul>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/Number-Guessing-Game-html-css-javascript-/"
                  >
                    Number Guessing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/Tic-Tac-Toe-Game/"
                  >
                    Tic Tac Toe
                  </Link>
                </li>
                <li>
                  <Link
                    className=" text-base font-medium text-gray-900 hover:text-gray-700"
                    to="https://anandkumar62.github.io/Rock-Paper-Scissors/"
                  >
                    Rock Paper Scissors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
