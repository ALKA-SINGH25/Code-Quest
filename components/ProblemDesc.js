import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import { FaRegSquare, FaRegStar, FaStar } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import TextSolutions from "./TextSolutions";
import { ImCheckboxChecked } from "react-icons/im";

const ProblemDesc = ({ problems }) => {
  const params = useParams();
  const [clickedProblems, setClickedProblems] = useState();
  const [clickedProblemsId, setClickedProblemId] = useState();
  const [checked, setChecked] = useState(false);
  const [like, setLike] = useState(false);
  const [disLike, setDisLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const difficultyColors = {
    Hard: "bg-red-500",
    Medium: "bg-orange-500",
    Easy: "bg-green-500",
  };

  useEffect(() => {
    if (problems) {
      problems.forEach((problem, index) => {
        if (problem.id === params.id) {
          setClickedProblems(problem);
          setClickedProblemId(problem._id);
        }
      });
    }
  }, [problems]);

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handelLikedproblems = async () => {
    setLike(!like);
  };

  const handelDisLikedproblems = async () => {
    setDisLike(!disLike);
  };

  const handelFavoritesproblems = async () => {
    setFavorite(!favorite);
  };

  return (
    <div className="w-full flex flex-col overflow-x-hidden overflow-y-auto px-1">
      <div className="flex h-11 w-full items-center pt-2 bg-[#9AA3AF] rounded-t-lg px-2">
        <div className="bg-light-4 rounded-t-md px-5 py-[10px] text-sm cursor-pointer">
          Description
        </div>
      </div>
      <div className="bg-[#262626] rounded-b-lg border-[#9AA3AF] border-2 flex-grow">
        <h2 className="font-semibold text-xl p-5 text-[#3F74E6]">
          {clickedProblems?.order}. {clickedProblems?.title}
        </h2>
        {/* section 1 */}
        <div className="flex items-center justify-start m-2">
          <div
            className={`px-4 py-1 rounded-full text-sm text-light-1 ${
              difficultyColors[clickedProblems?.difficulty]
            }`}
          >
            {clickedProblems?.difficulty}
          </div>
          {/*  Solved Section  */}
          <div className="mx-2 cursor-pointer" onClick={handleChecked}>
            {checked ? (
              <ImCheckboxChecked
                size={20}
                color={"green"}
                className="mx-auto"
              />
            ) : (
              <FaRegSquare size={20} color={"green"} className="mx-auto" />
            )}
          </div>
          {/* Liked Section */}
          <div className="mx-2 flex cursor-pointer text-light-4">
            <div onClick={handelLikedproblems}>
              {like ? (
                <AiFillLike size={20} color={"blue"} />
              ) : (
                <AiOutlineLike size={20} color={"blue"} />
              )}
            </div>
            <span className="ml-2 cursor-pointer">123</span>
          </div>
          {/* Disliked Section */}
          <div className="mx-2 flex cursor-pointer text-light-4">
            <div onClick={handelDisLikedproblems}>
              {disLike ? (
                <AiFillDislike size={20} color={"red"} />
              ) : (
                <AiOutlineDislike size={20} color={"red"} />
              )}
            </div>

            <span className="ml-2">123</span>
          </div>
          {/* Favorite Section */}
          <div className="mx-3 cursor-pointer">
            <div onClick={handelFavoritesproblems}>
              {favorite ? (
                <FaStar size={20} color={"yellow"} />
              ) : (
                <FaRegStar size={20} color={"yellow"} />
              )}
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="px-5 py-2 text-light-4">
          {/* For HTML content Rendering */}
          <div
            dangerouslySetInnerHTML={{
              __html: clickedProblems?.problemStatement || "",
            }}
          />
        </div>
        {/* section 3 */}
        <div className="mt-4 px-5">
          <h2 className="font-bold text-[#3F74E6]">Input Format</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: clickedProblems?.inputFormat || "",
            }}
            className="text-light-4"
          />
        </div>
        <div className="mt-4 px-5">
          <h2 className="font-bold text-[#3F74E6]">Output Format</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: clickedProblems?.outputFormat || "",
            }}
            className="text-light-4"
          />
        </div>
        <div className="mt-4 px-5">
          <h2 className="font-bold text-[#3F74E6]">Sample Input</h2>
          <div className="bg-[#9AA3AF] font-mono mt-1 py-2 px-3 rounded-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: clickedProblems?.sampleInput || "",
              }}
            />
          </div>
        </div>
        <div className="mt-4 px-5">
          <h2 className="font-bold text-[#3F74E6]">Sample Output</h2>
          <div className="bg-[#9AA3AF] font-mono mt-1 py-2 px-3 rounded-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: clickedProblems?.sampleOutput || "",
              }}
            />
          </div>
        </div>
        <div className="mt-2 px-5 py-2">
          {clickedProblems?.constraints && (
            <>
              <p className="font-bold text-[#3F74E6]">Constraints:</p>
              <div
                className="font-medium text-light-4"
                dangerouslySetInnerHTML={{
                  __html: clickedProblems?.constraints || "",
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemDesc;
