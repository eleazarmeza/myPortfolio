import React from 'react'

const Home: React.FC = () => {

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* EDUCATION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p className="mb-2">Tecnológico de Monterrey</p>
        <p className="mb-2">Computer Science (Major in Artificial Intelligence)</p>
        <ul className="list-disc pl-8">
          <li>GPA: 3.9 / Grade: 94</li>
          <li>7th semester out of 8</li>
        </ul>
      </div>

      {/* OBJECTIVE */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">OBJECTIVE</h2>
        <p>
        To be able to generate solutions that could achieve substantial earnings or savings for customers through the usage of Data Science, Computer Science and Business Strategy to achieve competitive advantages that come from efficiencies that could only be achieved with the interrelation of all these disciplines, while implementing state of the art A.I. models or Systems.        </p>
      </div>

      {/* SCHOOL PROJECTS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SCHOOL PROJECTS</h2>
        {/* Each project */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> Researching main A.I. technicalities to develop semester project for Major in A.I. </h3>
          <ul className="list-disc pl-8">
            <li>Learning main A.I. topics to develop a solution for a client</li>
            <li>Client & problem will be unveiled in 3 weeks</li>
          </ul>
        </div>
        {/* Repeat for other projects */}
                {/* Each project */}
                <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Developing Insights and Automations for Contact Center (Amazon request)</h3>
          <ul className="list-disc pl-8">
            <li>Identified problem and generated specific solution for Amazon </li>
            <li>Created 100% of Machine Learning (A.I.) model to Classify Agents </li>
            <li>Generated 30% of React Front End and 15% of Java Back End </li>

          </ul>
        </div>
        {/* Repeat for other projects */}
                {/* Each project */}
                <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> iOS App with Backend for Social Entrepreneurs </h3>
          <ul className="list-disc pl-8">
            <li>Programmed 70% of iOS App with XCode and Swift UI in less than 2 months </li>
            <li>Designed UI/UX App, APIs, and Architecture </li>
            <li>Motivated a team of 5 people as a Project Manager </li>
            <li>Included additional non requested voice dictation and elegant UI design </li>
          </ul>
        </div>
        {/* Repeat for other projects */}
                {/* Each project */}
                <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> Game/Backend/Frontend to help primary school kids with fractions </h3>
          <ul className="list-disc pl-8">
            <li>	Built 90% of the Video Game with C# in Unity </li>
            <li>Developed 60% of Backend (APIs)  </li>
            <li> 	Python, Nginx, Django and Azure Virtual Machine as a server </li>
          </ul>
        </div>
        {/* Repeat for other projects */}
                {/* Each project */}
                <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> Designed Network Architecture (simulation)    </h3>
          <ul className="list-disc pl-8">
            <li>Set requirements for around 700 devices </li>
            <li>Subnetting, DNS, DHCP, Gateways, router, switches and terminals </li>
            <li>Mapped and Configured in Cisco Packet Tracer  </li>

          </ul>
        </div>
        {/* Repeat for other projects */}


      </div>

      {/* SKILLS & INTERESTS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SKILLS & INTERESTS</h2>
        <div className="mb-4">
          <p className="mb-2"> Machine Learning, Python, C#, Swift, C++, Cloud Solutions (Amazon, Google, Azure), fluent English, Leader, Creative, Business thinker, Time & Task Management, Business KPI’s, Customer relations </p>
          <p className="mb-2">Interests: AI, Businesses, Gym</p>
        </div>
        <div>
          <p className="font-semibold">Achieved 1st place in "Hack4Women" Hackathon for Infosys by @adawomenccm.</p>
          <p>Created a chatbot integrated in Facebook and in a web page to help women identify violence against them.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
