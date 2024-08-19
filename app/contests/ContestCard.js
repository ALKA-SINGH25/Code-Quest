"use client";
import Link from "next/link";
import React from "react";

const ContestCard = ({
  contestId,
  contestUrl,
  isUpcoming = false,
  isOngoing,
  isDone = false,
}) => {
  const handleAddToCalendar = () => {
    const event = {
      text: "Event Name",
      details: "Event Description",
      location: "Event Location",
      dates: {
        start: new Date("2024-06-09T10:00:00"),
        end: new Date("2024-06-09T12:00:00"),
      },
    };

    // Generate Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.text
    )}&details=${encodeURIComponent(
      event.details
    )}&location=${encodeURIComponent(
      event.location
    )}&dates=${encodeURIComponent(
      `${event.dates.start
        .toISOString()
        .replace(/-|:|\.\d+/g, "")}/${event.dates.end
        .toISOString()
        .replace(/-|:|\.\d+/g, "")}`
    )}`;

    // Open Google Calendar in a new tab/window
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <Link
      href={`/contests/${contestUrl}`}
      className="w-full flex justify-between items-center bg-[#9AA3AF] rounded-l-full rounded-r-full group pl-4 pr-10 py-2 hover:bg-dark-1 transition-all ease-in max-lg:rounded-l-md max-sm:rounded-xl max-xs:flex-col max-xs:items-start hover:scale-[1.03] max-sm:pl-6"
    >
      <div className="flex items-center gap-4 max-lg:flex-col max-lg:items-start">
        <div className="flex">
          <div
            className={`${
              (isOngoing && "bg-[#4BD4A3]") ||
              (isUpcoming && "bg-[#FCC646]") ||
              (isDone && "bg-red-500")
            } p-2 rounded-full group-hover:bg-dark-3 transition-all ease-in max-xs:hidden`}
          >
            <img
              src="/prize.png"
              alt="contest-icon"
              className="w-14 h-14 object-contain rounded-full"
            />
          </div>
          <div className="my-auto ml-[-10px]">
            <div
              className={`py-2 pl-5 pr-7 ${
                (isOngoing && "bg-[#4BD4A3]") ||
                (isUpcoming && "bg-[#FCC646]") ||
                (isDone && "bg-red-500")
              } group-hover:text-white rounded-r-full group-hover:bg-dark-3 transition-all ease-in max-xs:rounded-full flex gap-3 items-center`}
            >
              <img
                src="/prize.png"
                alt="contest-icon"
                className="w-10 h-10 object-contain rounded-full hidden max-xs:flex"
              />
              <h2>Weekly Contest {contestId}</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/timer.png"
            alt="clock-icon"
            className="w-4 h-4 object-contain"
          />
          {isUpcoming ? (
            <div className="">
              <p className="text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in">
                Starts in 2d 16h 55m 34s
              </p>
              <p className="font-medium text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in">
                Sunday 8:00 AM
              </p>
            </div>
          ) : isOngoing ? (
            <p className="text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              Ends in 1h 15m 08s
            </p>
          ) : (
            <p className="text-sm text-gray-700 group-hover:text-gray-300 transition-all ease-in">
              Ended on Feb 24, 2024 8:00 AM
            </p>
          )}
        </div>
      </div>
      {isUpcoming && (
        <div className=" max-xs:mt-3">
          <button
            className="max-xs:flex max-xs:gap-2 bg-light-4 group-hover:bg-dark-3 p-3 rounded-full transition-all ease-in"
            onClick={handleAddToCalendar}
          >
            <img
              src="/calendar.png"
              alt="clock-icon"
              className="w-5 h-5 object-contain"
            />
            <p className="hidden max-xs:flex text-sm group-hover:text-white">
              Add to Remainder
            </p>
          </button>
        </div>
      )}
    </Link>
  );
};

export default ContestCard;
