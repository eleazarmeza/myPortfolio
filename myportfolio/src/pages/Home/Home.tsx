import React from 'react'

const Home: React.FC = () => {

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* EDUCATION */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p className="mb-2">Tecnológico de Monterrey</p>
        <p className="mb-2">Computer Science (To be Specialized in Artificial Intelligence)</p>
        <ul className="list-disc pl-8">
          <li>GPA: 3.9 / Grade: 94</li>
          <li>6th semester out of 8</li>
        </ul>
      </div>

      {/* OBJECTIVE */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">OBJECTIVE</h2>
        <p>
          To be able to generate Machine Learning models or Apps that could achieve substantial savings for customers. Through the implementation of Data Science, Computer Science, and Business Strategy in order to achieve competitive advantages that come from efficiencies that could only be achieved with the interrelation of all these disciplines in one person, to work as a translator and as a developer for all sides.
        </p>
      </div>

      {/* SCHOOL PROJECTS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SCHOOL PROJECTS</h2>
        {/* Each project */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Developing Insights and Automations for Contact Center (Amazon request)</h3>
          <ul className="list-disc pl-8">
            <li>Researching Machine Learning models to automate Tasks</li>
            <li>Researching ML models to give insights to Supervisors</li>
            <li>To generate React Front End</li>
            <li>To generate Java Back End</li>
          </ul>
        </div>
        {/* Repeat for other projects */}
      </div>

      {/* SKILLS & INTERESTS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">SKILLS & INTERESTS</h2>
        <div className="mb-4">
          <p className="mb-2">Skills: Python, C#, Swift, C++, SQL, fluent English, Leader, Creative, Business thinker, Time & Task Management, Business KPI’s, Financial Statements, Customer relations</p>
          <p className="mb-2">Interests: AI, Businesses, Finance, Gym</p>
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
