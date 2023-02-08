import React from "react";
import Course from "./Course";
import "./Courses.scss";
function Courses() {
  const coursesArr = [
    {
      id: 1,
      courseName: "SAT math",
      duration: "6 months",
      level: "Beginner",
      price: "X0 000 AMD / month",
      session: "Private",
      commitment: "3 times / week",
      moreDetails:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur libero, aliquid minus impedit non debitis magnam, facilis accusantium excepturi porro, incidunt modi magni. Molestias magni ad, quos exercitationem tempora cumque aperiam? Cum deleniti, beatae saepe, ex excepturi molestias dignissimos possimus numquam qui nisi atque labore. Doloremque delectus quo ab dolorum officia quod rerum? At voluptatum aspernatur molestiae incidunt porro. Veniam soluta ullam, praesentium reprehenderit nostrum facilis eos nesciunt enim omnis minima in asperiores ipsam mollitia doloribus aliquam earum ducimus! Quae praesentium similique ipsam minus id, deleniti possimus aliquam cumque accusamus delectus alias numquam, consequuntur voluptate repellendus fugit dolores! Dicta, optio.",
    },
    {
      id: 2,
      courseName: "Advanced SAT math",
      duration: "3 months",
      level: "Advanced",
      price: "X0 000 AMD / month",
      session: "Group",
      commitment: "3 times / week",
    },
    {
      id: 3,
      courseName: "Advanced SAT math",
      duration: "3 months",
      level: "Advanced",
      price: "X0 000 AMD / month",
      session: "Group",
      commitment: "3 times / week",
    },
    {
      id: 4,
      courseName: "Advanced SAT math",
      duration: "3 months",
      level: "Advanced",
      price: "X0 000 AMD / month",
      session: "Group",
      commitment: "3 times / week",
    },
    {
      id: 5,
      courseName: "Advanced SAT math",
      duration: "3 months",
      level: "Advanced",
      price: "X0 000 AMD / month",
      session: "Group",
      commitment: "3 times / week",
    },
  ];
  return (
    <div className="courses flex justify-around">
      {coursesArr.map((courseDetails) => (
        <Course key={courseDetails.id} courseDetails={courseDetails} />
      ))}
    </div>
  );
}

export default Courses;
