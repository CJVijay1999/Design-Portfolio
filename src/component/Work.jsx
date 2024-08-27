import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Januray-2024 - March-2024",
    title: "Django Developer Internship",
    duration: "3 months",
    details: "Done a 3 projects in basic web development HTML, CSS, Bootstrap",
  },

  {
    year: "February-2024 - April-2024",
    title: "Frontend Developer Internship",
    duration: "3 months",
    details:
      "Developed a REST API using the Django framework that allowed communication between multiple services like Mns2 Components, how it work and using the API and Front-end and Back-end and MYSQL Database to enhance the UI Design",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto pl-4 py-16">
      <h1 className="text-4xl m-3 font-bold text-center text-[#134B70] ">
        Work Exprience{" "}
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
