import React from 'react'

const Home: React.FC = () => {

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      
      {/* OBJECTIVE */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">OBJECTIVE</h2>
        <p>
        Develop Software solutions as competitive advantages with Data Science and AI in Businesses.       
        </p>
      </div>

      {/* PROJECTS */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">PROJECTS</h2>
        {/* Each project */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> Inventory Control System for Oracle-Bimbo </h3>
          <ul className="list-disc pl-8">
            <li>RAG (LLM) for Inventory control in one month (website)</li>
            <li>Computer vision (OCR) for racks reading on iPhone</li>
            <li>Computer vision (OCR) for barcode scanner on iPhone</li>
          </ul>
        </div>
        {/* Repeat for other projects 
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2"> Developing AI for American Football University team</h3>
          <ul className="list-disc pl-8">
            <li>Will predict each player fisical performance</li>
          </ul>
        </div>
        */}
                {/* Each project */}
                <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Dashboard and AI for Contact Center (Amazon)</h3>
          <ul className="list-disc pl-8">
            <li>Identified problem and generated specific solution for Amazon </li>
            <li>Created 100% of Machine Learning (AI) model to Classify Agents by Performance</li>
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
        <h2 className="text-2xl font-bold mb-4">SKILLS</h2>
        <div className="mb-4">
          <p className="mb-2"> Artificial Intelligence, Python, C#, Swift, C++, Cloud Solutions (Amazon, Google, Azure), fluent English, Leader, Creative, Business thinker, Time & Task Management, Business KPI’s, Customer relations </p>
           <br></br>
           <p className="mb-2">Skill Badges: Build, Train and Deploy ML Models with Keras on Google Cloud, Launching into Machine Learning, How Google Does Machine
Learning, Google Cloud Big Data and Machine Learning Fundamentals</p>
<br></br>
<p><a color='blue' href='https://partner.cloudskillsboost.google/public_profiles/9c0fe5c1-ad3e-4b46-b7da-a0ed9039429a'>Click to view my Skills Badges on Google Cloud </a></p>
          <br></br>
          <p className="mb-2">Interests: AI, Businesses, Gym</p>
        </div>
        <h2 className="text-2xl font-bold mb-4">DISTINCTIONS</h2>
        <div>
          <p className="font-semibold mb-2">Excellence Prize Winner, for Top 1.75% National Software Studies certification (CENEVAL)</p>
        </div>
        <div>
          <p className="font-semibold mb-2">1st place in "Hack4Women" Hackathon for Infosys by @adawomenccm.</p>
          <p>Created a chatbot integrated in Facebook and in a web page to help women identify violence against them.</p>
        </div>
        <div>
          <p className="font-semibold mb-2">3rd place in "Expo Engineering" organized by the School of Sciences and Engineering.</p>
          <p>For the Call Center (Contact Center) web App with AI for Amazon.</p>
        </div>
      </div>
            {/* EDUCATION */}
            <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">EDUCATION</h2>
        <p className="mb-2">Tecnológico de Monterrey</p>
        <p className="mb-2">Computer Science (Major: Artificial Intelligence)</p>
        <ul className="list-disc pl-8">
          <li>GPA: 3.9 / Grade: 94</li>
          <li>Contact: <strong>a01661792@tec.mx</strong></li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
