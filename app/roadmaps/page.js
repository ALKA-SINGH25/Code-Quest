import RoadmapsCard from "@/app/roadmaps/RoadmapsCard";

const page = () => {
  const roadmaps = [
    {
      name: "fsd",
      title: "Full Stack Developer Roadmap",
      desc: "Step by step guide to becoming a modern full stack developer in 2024.",
      image: "/fs.png",
    },
    {
      name: "dops",
      title: "DevOps Roadmap",
      desc: "Step by step guide for DevOps, SRE or any other Operations Role in 2024.",
      image: "/dops.png",
    },
    {
      name: "ad",
      title: "Android Developer Roadmap",
      desc: "Step by step guide to becoming an Android developer in 2024.",
      image: "/a.png",
    },
    {
      name: "bcd",
      title: "Blockchain Developer Roadmap",
      desc: "Step by step guide to becoming a blockchain developer in 2024.",
      image: "/bc.png",
    },
    {
      name: "aids",
      title: "AI and Data Scientist Roadmap",
      desc: "Step by step guide to becoming an AI and Data Scientist in 2024.",
      image: "/ai.png",
    },
  ];

  return (
    <div className="w-full min-h-[92vh] max-w-6xl mx-auto flex justify-center flex-wrap my-12 gap-6">
      {roadmaps.map((roadmap, index) => (
        <RoadmapsCard
          key={index}
          name={roadmap.name}
          title={roadmap.title}
          desc={roadmap.desc}
          image={roadmap.image}
        />
      ))}
    </div>
  );
};

export default page;
