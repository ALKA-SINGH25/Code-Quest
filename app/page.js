import Link from "next/link";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center max-w-5xl mx-auto mb-20 max-md:flex-col-reverse max-md:gap-5">
            <Typewriter />

            <img
              src="/logo.png"
              alt="Code Quest logo"
              className="w-[400px] h-[400px] max-sm:w-64 max-sm:h-64 max-xs:w-48 max-xs:h-48 object-contain glow-effect"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/problems">
              <FeatureCard
                title="Problems"
                description="Challenge yourself with our Coding Problems feature! Solve a wide range of problems, get instant feedback, and track your progress."
              />
            </Link>
            <Link href="/contests">
              <FeatureCard
                title="Contests"
                description="Compete and excel with our Coding Contest feature! Participate in regular coding competitions, challenge your skills against others, and climb the leaderboards"
              />
            </Link>
            <Link href="/sync">
              <FeatureCard
                title="Sync"
                description="Experience real-time teamwork with our Collaborative Coding feature. Work together seamlessly, edit code simultaneously, and streamline collaboration effortlessly."
              />
            </Link>
            <Link href="/news">
              <FeatureCard
                title="News"
                description="Stay updated with the latest industry news, trends, and advancements in the world of technology and software development."
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-[#9AA3AF] text-dark-1 rounded-xl p-6 shadow-lg hover:bg-dark-1 hover:mt-[-7px] hover:text-white group transition-all ease-in">
      <h2 className="text-xl font-semibold mb-4 group-hover:underline">
        {title}
      </h2>
      <p className="text-white group-hover:text-gray-400">{description}</p>
    </div>
  );
}
