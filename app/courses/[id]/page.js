"use client";
import Split from "react-split";
import Modules from "@/components/courses/modules";
import ModulesData from "@/constants/courses/modules";
import Content from "@/components/courses/content";
import ContentData from "@/constants/courses/index";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const courseId = params.id;
  const moduledata = ModulesData[courseId];
  const contentdata = ContentData[courseId];
  const [data, setData] = useState(contentdata[0].content);

  return (
    <div className="w-full px-4 h-[92vh] flex gap-3 max-md:flex-col mb-12">
      <Modules
        modules={moduledata}
        setData={setData}
        data={contentdata}
        id={courseId}
      />
      <Content content={data} title={courseId} />
    </div>
  );
};

export default page;
