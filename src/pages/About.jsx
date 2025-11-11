import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="  mt-10 ml-5">
      <h1 className="text-5xl font-bold text-blue-600">About This Application</h1>
      <p className="mt-4 text-lg">
        This React app demonstrates how to build a multi-page website using React Router.
        It includes navigation between Home, About, and Users pages, along with a dynamic
        route for individual user details.
      </p>

      <h2 className="mt-6 text-xl font-semibold">Features:</h2>
      <ul className="list-disc list-inside text-left inline-block mt-2">
        <li>Home page with introduction</li>
        <li>About page explaining the project</li>
        <li>Users page showing a list of users</li>
        <li>Individual user detail page using dynamic routing</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Built With:</h2>
      <ul className="list-disc list-inside text-left inline-block mt-2">
        <li>React</li>
        <li>React Router DOM</li>
        <li>Tailwind CSS</li>
      </ul><br />

      <Link
        to="/"
        className="mt-8 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default About;

