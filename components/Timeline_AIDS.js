import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { aids } from "../constants/data";
import SectionWrapper from "./SectionWrapper";

const TimelineCard = ({ fsd }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    visible={true}
    date={fsd.date}
    iconStyle={{ background: fsd.iconBg }}
    icon={
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={fsd.icon}
          style={{ width: "100%", height: "100%", borderRadius: "100%" }}
        />
      </div>
    }
  >
    <div>
      <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: "bold" }}>
        {fsd.topic}
      </h3>
    </div>
    <ul style={{ marginLeft: "20px" }}>
      {fsd.subTopics.map((subTopic, index) => (
        <li
          key={`experience-poin-${index}`}
          style={{ fontSize: "14px", paddingLeft: "10px" }}
        >
          {subTopic}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline_AIDS = () => {
  return (
    <>
      <div
        className="mt-20 flex flex-col"
        style={{ marginTop: "40px", display: "flex", flexDirection: "column" }}
      >
        <VerticalTimeline>
          {aids.map((con, index) => (
            <TimelineCard key={index} fsd={con} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline_AIDS);
