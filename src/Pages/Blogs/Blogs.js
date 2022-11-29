import React from "react";

const Blogs = () => {
  return (
    <div className="p-20 text-justify">
      <h1 className="font-bold">
        1. What are the different ways to manage a state in a React application?
      </h1>
      <p className="py-3">
        Answer: The Four Kinds of React State to Manage When we talk about state
        in our applications, it's important to be clear about what types of
        state actually matter. There are four main types of state you need to
        properly manage in your React apps: Local state, Global state, Server
        state, URL state.
        <br />
        <span className="font-bold">useState:</span> useState is the first tool
        you should reach for to manage state in your components. <br />
        <span className="font-bold">useReducer:</span> useReducer is another
        option that can be used for either local or global state.
      </p>
      <h1 className="font-bold">2. How does prototypical inheritance work?</h1>
      <p className="py-3">
        Answer: Prototype Inheritance in JavaScript: Following bullet points
        will try to analyze the basics behind Prototype Inheritance in
        JavaScript-
        <br /> Under the classical inheritance phenomenon, we create a new class
        that actually extends or reuses the properties or functions, or methods
        of another class that are used by several programming languages (like C,
        C++, Java, etc.) JavaScript doesn't use classical inheritance instead it
        uses the phenomenon called Prototype Inheritance. In Prototype
        Inheritance, an object uses the properties or methods of another object
        via the prototype linkage. All the JavaScript objects inherit properties
        and methods from a prototype (like Date objects inherit properties from
        Date.prototype and so on).
      </p>
      <h1 className="font-bold">
        3. What is a unit test? Why should we write unit tests?
      </h1>
      <h1 className="font-bold">4. React vs. Angular vs. Vue?</h1>
    </div>
  );
};

export default Blogs;
