import React from "react";

const Blogs = () => {
  return (
    <div className="p-20 text-justify">
      <h1 className="font-bold text-2xl">
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
      <h1 className="font-bold text-2xl">
        2. How does prototypical inheritance work?
      </h1>
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
      <h1 className="font-bold text-2xl">
        3. What is a unit test? Why should we write unit tests?
      </h1>
      <p className="py-3">
        Answer: Unit tests are simple scripts that check whether a given
        unit—class, function, module, etc.—is working as expected. They are
        meant to be rather simple, to cover the happy path of the code plus a
        few edge cases. They contribute to the long-term success of a project
        because of the reasons I discuss below. <br />
        <span className="font-bold">Speed up development testing</span> <br />
        When you start building applications, the most natural thing is to test
        the code with the user interface. You can make this process way faster
        and more reliable by writing a script that will check the code for you.
        With tests in place, rerunning all of them takes no mental energy from
        you; you can do it as often as you feel like. This leads to a shorter
        feedback loop too, which will help you stay focused and productive.{" "}
        <br />
        <span className="font-bold">Discover edge cases</span> <br /> Writing
        unit tests makes me think about edge cases—all the situations that are
        rare, unexpected, or wrong. When you write the logic, it's normal to
        focus on the happy path, or what's normal and expected to happen. When
        you write tests, you can set up checks for the edge cases and define
        what should happen in each of them. This makes your code more resilient
        in cases of unexpected inputs. <br />
        <span className="font-bold">
          Ensure that your code is composed of units
        </span>
        <br /> When you add unit tests to your code, you see what is easy to
        test and what is not. As your code grows in size and complexity, tests
        will force you to break it into manageable pieces. This is great because
        it will help you take the quality of your code to the next level. Every
        segment that received excessive responsibilities will require
        exponentially more complicated unit tests. In those cases, its a good
        idea to stop and rethink how you organize your logic.
      </p>
      <h1 className="font-bold text-2xl">4. React vs. Angular vs. Vue?</h1>
      <p className="py-3">
        Answer: While creating those beautiful websites, web developers require various
        tools and frameworks. There are several tools that can be used for the
        development of the website. Since frameworks play an important role in
        building an efficient, effective, and quick website there's always a big
        confusion in choosing the framework for front-end development, as one
        prefers to choose the best framework in terms of performance, speed, and
        how best it is in making the UI attractive. There's a big competition
        and huge demand among the most popular ones React, Angular, and VueJS
        which also offers excellent salary. Let's discuss the differences
        between these frameworks (React VS Angular VS Vue).
        <br /> <span className="font-bold"></span> <br />
        <br /> <span className="font-bold">React</span> <br />
        React is the JavaScript library of User Interfaces. It is build
        single-page applications and also allows you to create reusable UI
        components. It is a front-end JavaScript framework, created by Facebook
        in 2011. The initial version (V0.3.0) was released in July 2013. The
        latest version is V5.0.1. It has a size of 31.8K. This complete guide on
        How To Learn ReactJS: A Complete Guide For Beginners will help in making
        your transition towards React if you're a beginner. React has gained a
        lot of popularity in recent years and is considered one of the best
        frameworks for web development. There are more developers who keep React
        as a priority for creating wonderful websites. Companies like Uber,
        Airbnb, Netflix, Yahoo!, and The New York Times use React for their
        front-end development. <br />
        <br /> <span className="font-bold">Angular</span> <br />
        Angular, developed by Google, was released in the year 2010. It is a
        TypeScript-based framework that uses a regular DOM. Angular provides a
        set of tools using which a complex, reactive UI can be built. It is
        primarily aimed at creating SPAs (Single Page Applications) and performs
        various operations such as routing, state management, PWA, testing, and
        building, having a size of 143K. Angular is used by Google, Upwork, and
        MS Office and since this framework was implemented before React, it is
        more popular providing a highly functional framework to create larger
        applications. <br />
        <br /> <span className="font-bold">Vue</span> <br />
        Vue was developed by a former Google employee and was released in the
        year 2014. It was developed to make the best version of Angular and make
        a custom tool. It is used for developing single-page engaging and
        high-quality web applications. It lets you extend directives (HTML with
        HTML attributes), and also provides built-in directives and user-defined
        directives. It is the lightest framework having a size of 23K. Vue has
        become so popular these days and it is one of the hottest topics in
        terms of technology. Companies that use Vue as their front-end
        development framework are UpWork, Netflix, and Nintendo. It has a good
        rating on GitHub making it so popular.
      </p>
    </div>
  );
};

export default Blogs;
