"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import "react-multi-carousel/lib/styles.css";
import { signOut } from "next-auth/react";

export default function ProfileSection() {
  const [data, setData] = useState({});

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setData(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const [userInfo, setUserInfo] = useState({
    username: "sumit",
    rankings: {
      problems: {
        total: 50,
        solved: 30,
        easy: {
          total: 20,
          solved: 15,
        },
        medium: {
          total: 20,
          solved: 10,
        },
        tough: {
          total: 10,
          solved: 5,
        },
      },
    },

    age: 21,
    gender: "Male",
    college: "IIT BHU,Varanasi",
    city: "Varanasi",
    country: "India",
    skills: {
      Advanced: [
        { name: "Dynamic Programming ", count: 1 },
        { name: "Divide and Conquer ", count: 1 },
      ],
      Intermediate: [
        { name: "Hash Table ", count: 2 },
        { name: "Math ", count: 2 },
        { name: "Depth-First Search ", count: 3 },
      ],
      Fundamental: [
        { name: "Array ", count: 4 },
        { name: "String ", count: 2 },
        { name: "Sorting ", count: 1 },
      ],
    },
  });

  useEffect(() => {
    renderLineChart();
  }, []);

  const renderLineChart = () => {
    const ratingsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const chartData = {
      labels: ratingsData.map((_, index) => index + 1),
      datasets: [
        {
          label: "Contest Ratings",
          data: ratingsData,
          borderColor: "rgba(59, 130, 246, 1)",
          tension: 0.4,
          backgroundColor: "rgba(59, 130, 246, 0.3)",
          fill: true,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      aspectRatio: 1.8,
      scales: {
        x: {
          title: {
            display: true,
            text: "Contest Number",
            color: "#fff",
          },
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#fff",
          },
        },
        y: {
          title: {
            display: true,
            text: "Contest Rating",
            color: "#fff",
          },
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "#ffffff69",
          },
        },
      },
    };

    const ctx = document.getElementById("contestRatingChart");
    if (ctx) {
      const existingChart = Chart.getChart(ctx);
      if (existingChart) {
        existingChart.destroy();
      }

      new Chart(ctx, {
        type: "line",
        data: chartData,
        options: chartOptions,
      });
    }
  };

  async function handleLogout() {
    try {
      await signOut({ callbackUrl: "/login" });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }

  return (
    <div className="flex w-full max-w-6xl mx-auto gap-8 px-3 py-2 my-12 max-lg:flex-col max-lg:items-center">
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        <div className="w-full bg-[#9AA3AF] rounded-xl shadow-xl px-4 py-4 flex flex-col gap-2 group hover:bg-dark-1 transition-all ease-in hover:scale-[1.03]">
          <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-white transition-all ease-in">
            {data.name}
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-200 transition-all ease-in">
            Additional Info
          </h3>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              Age:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.age}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              Gender:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.gender}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              College:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.college}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              City:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.city}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              Country:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.country}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              Rating:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.rating}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="font-medium min-w-24 text-gray-700 group-hover:text-gray-400 transition-all ease-in">
              Amount:
            </div>
            <div className="text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              {data.amount}
            </div>
          </div>
          <Link
            href="/edit-profile"
            className="mt-2 bg-dark-1 group-hover:bg-dark-3 text-white font-bold py-2 px-4 rounded-xl text-center transition-all ease-in "
          >
            Edit Profile
          </Link>
          <Link
            href="/login"
            className="bg-red-500 group-hover:bg-red-500 text-white font-bold py-2 px-4 rounded-xl text-center transition-all ease-in "
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>

        <div className="w-full bg-[#9AA3AF] rounded-xl shadow-xl px-4 py-4 flex flex-col gap-2 group hover:bg-dark-1 transition-all ease-in hover:scale-[1.03]">
          <h3 className="text-lg font-semibold text-dark-1 group-hover:text-white mb-2">
            Skills
          </h3>
          {Object.entries(userInfo.skills).map(([category, skills]) => (
            <div key={category} className="mb-4">
              <h4 className="text-md font-semibold text-dark-3 group-hover:text-gray-300 mb-2">
                {category}
              </h4>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="text-gray-700 group-hover:text-gray-400"
                  >
                    {skill.name} ⨯{skill.count}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow relative w-full max-w-[700px]">
        <div className="flex flex-col gap-8">
          <div className="w-full bg-[#9aa3af] shadow-xl rounded-xl p-6 hover:bg-dark-1 hover:scale-[1.03] transition-all ease-in ">
            <canvas id="contestRatingChart"></canvas>
          </div>

          <div className="w-full bg-[#9AA3AF] shadow-xl rounded-xl p-6 hover:bg-dark-1 group hover:scale-[1.03] transition-all ease-in">
            <h2 className="mb-5 group-hover:text-white">Solved Problems</h2>
            <div className="flex gap-8 items-center w-full mb-5 max-sm:flex-col max-sm:items-start  ">
              <div className="bg-light-4 rounded-full min-h-[100px] min-w-[100px] flex justify-center items-center">
                <div className="bg-light-2 rounded-full min-h-[85px] min-w-[85px] flex flex-col justify-center items-center">
                  <h1 className="font-medium">0</h1>
                  <p>Solved</p>
                </div>
              </div>

              <div className="flex-grow w-full">
                <div className="flex items-center flex-grow mb-2">
                  <div className="w-20 mr-2 group-hover:text-gray-300">
                    Easy:
                  </div>
                  <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                    <div
                      className="bg-green-500 h-full rounded-full"
                      style={{
                        width: `${
                          (userInfo.rankings.problems.easy.solved /
                            userInfo.rankings.problems.easy.total) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <div className="w-20 mr-2 group-hover:text-gray-300">
                    Medium:
                  </div>
                  <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                    <div
                      className="bg-yellow-500 h-full rounded-full"
                      style={{
                        width: `${
                          (userInfo.rankings.problems.medium.solved /
                            userInfo.rankings.problems.medium.total) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center mb-2">
                  <div className="w-20 mr-2 group-hover:text-gray-300">
                    Tough:
                  </div>
                  <div className="flex bg-gray-200 h-4 rounded-full flex-grow">
                    <div
                      className="bg-red-500 h-full rounded-full"
                      style={{
                        width: `${
                          (userInfo.rankings.problems.tough.solved /
                            userInfo.rankings.problems.tough.total) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex-grow max-w-full bg-[#9AA3AF] shadow-xl rounded-xl p-6 hover:bg-dark-1 transition-all ease-in hover:scale-[1.03] group">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                Recent Submissions
              </h3>
              <div className="flex  items-center justify-center">
                <img src="/null.png" className="w-[125px] h-[125px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
