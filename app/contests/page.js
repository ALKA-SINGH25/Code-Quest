import Link from "next/link";
import ContestCard from "./ContestCard";
import ProfileCard from "./ProfileCard";

const page = () => {
  const upcomingContests = [
    { id: 6, link: "/weekly-contest-6" },
    { id: 7, link: "/weekly-contest-5" },
  ];

  const pastContests = [
    { id: 4, link: "/weekly-contest-4" },
    { id: 3, link: "/weekly-contest-3" },
    { id: 2, link: "/weekly-contest-2" },
    { id: 1, link: "/weekly-contest-1" },
  ];

  const users = [
    { name: "Sumit Shandillya", rating: 1290, attended: 15 },
    { name: "Sumit Shandillya", rating: 1290, attended: 15 },
    { name: "Sumit Shandillya", rating: 1290, attended: 15 },
    { name: "Sumit Shandillya", rating: 1290, attended: 15 },
    { name: "Sumit Shandillya", rating: 1290, attended: 15 },
  ];

  return (
    <div className="w-full max-w-6xl flex mx-auto my-5 gap-5 px-3 max-md:flex-col">
      <div className="flex flex-grow flex-col gap-5">
        <div>
          <h1 className="text-[#3F74E6]">Ongoing Contest</h1>
          <div className="mt-3 flex flex-col gap-2">
            <ContestCard
              contestId={5}
              contestUrl={"/weekly-contest-5"}
              isOngoing={true}
            />
          </div>
        </div>

        <div>
          <h1 className="text-[#3F74E6]">Upcoming Contests</h1>
          <div className="mt-3 flex flex-col gap-2">
            {upcomingContests.map((contest) => (
              <ContestCard
                key={contest.id}
                contestId={contest.id}
                contestUrl={contest.link}
                isUpcoming={true}
              />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-[#3F74E6]">Past Contests</h1>
          <div className="mt-3 flex flex-col gap-2">
            {pastContests.map((contest) => (
              <ContestCard
                key={contest.id}
                contestId={contest.id}
                contestUrl={contest.link}
                isDone={true}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full max-w-[350px] bg-light-4 rounded-lg h-fit shadow-lg max-lg:mx-auto max-lg:mt-12">
        <div className="flex items-center gap-3 bg-[#9AA3AF] pt-4 pb-3 px-6 rounded-t-lg">
          <img
            src="/ranking.png"
            alt="trophy-icon"
            className="w-6 h-6 object-contain"
          />
          <h1>Global Ranking</h1>
        </div>
        <div className="w-full mt-3 px-6">
          {users.map((user, index) => (
            <div key={index}>
              <ProfileCard
                id={index + 1}
                username={user.name}
                rating={user.rating}
                attended={user.attended}
              />
              <hr className="h-0 border border-light-4 my-3" />
            </div>
          ))}
        </div>
        <div className="text-center mb-4">
          <Link href="/global-rankings" className="text-blue-500">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
