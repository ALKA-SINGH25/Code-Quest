import CourseCard from "@/app/learn/CourseCard";

const page = () => {
  const courses = [
    {
      name: "cpp",
      title: "Introduction to C++",
      desc: "C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup.",
      image: "/cpp.png",
    },
    {
      name: "python",
      title: "Introduction to Python",
      desc: "Python is an interpreted, high-level and general-purpose programming language.",
      image: "/python.png",
    },
    {
      name: "javascript",
      title: "Introduction to JavaScript",
      desc: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.",
      image: "/javascript.png",
    },
    {
      name: "java",
      title: "Introduction to Java",
      desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      image: "/java.png",
    },
    {
      name: "c",
      title: "Introduction to C",
      desc: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.",
      image: "/c.png",
    },
    {
      name: "golang",
      title: "Introduction to GO Lang",
      desc: "Go, often referred to as Golang, is a statically typed, compiled programming language designed for simplicity and efficiency.",
      image: "/golang.png",
    },
    {
      name: "rust",
      title: "Introduction to Rust",
      desc: "Rust is a systems programming language that focuses on safety, speed, and concurrency. It provides strong memory safety guarantees without requiring a garbage collector, making it suitable for systems programming.",
      image: "/rust.png",
    },
    {
      name: "r",
      title: "Introduction to R",
      desc: "R is a programming language and environment specifically designed for statistical computing and graphics. It provides a wide variety of statistical and graphical techniques.",
      image: "/r.png",
    },
    {
      name: "kotlin",
      title: "Introduction to Kotlin",
      desc: "Kotlin is a statically typed programming language developed by JetBrains, designed to be fully interoperable with Java while offering modern features and improved syntax.",
      image: "/k.png",
    },
  ];

  return (
    <div className="w-full min-h-[92vh] max-w-6xl mx-auto flex justify-center flex-wrap my-12 gap-6">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          name={course.name}
          title={course.title}
          desc={course.desc}
          image={course.image}
        />
      ))}
    </div>
  );
};

export default page;
