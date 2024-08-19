"use client";
import Timeline_AD from "@/components/Timeline_AD";
import Timeline_AIDS from "@/components/Timeline_AIDS";
import Timeline_BC from "@/components/Timeline_BC";
import Timeline_DOPS from "@/components/Timeline_DOPS";
import Timeline_FS from "@/components/Timeline_FS";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const roadMapId = params.id;

  return (
    <div className="w-full px-4 h-[92vh] flex gap-3 max-md:flex-col mb-12">
      {roadMapId === "fsd" && <Timeline_FS />}
      {roadMapId === "dops" && <Timeline_DOPS />}
      {roadMapId === "ad" && <Timeline_AD />}
      {roadMapId === "bcd" && <Timeline_BC />}
      {roadMapId === "aids" && <Timeline_AIDS />}
    </div>
  );
};

export default page;
