import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BlogCard from "./BlogCard";
const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Return to Work After Taking Parental Leave",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://hbr.org/2019/08/how-to-return-to-work-after-taking-parental-leave",
      author:"Rebecca Knight"
    },
    {
      id: 2,
      title: "How to Return to Work After Taking Parental Leave",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://hbr.org/2019/08/how-to-return-to-work-after-taking-parental-leave",
      author:"Rebecca Knight"
    },
    {
      id: 3,
      title: "How to Return to Work After Taking Parental Leave",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://hbr.org/2019/08/how-to-return-to-work-after-taking-parental-leave",
      author:"Rebecca Knight"
    },
    {
      id: 4,
      title: "How to Return to Work After Taking Parental Leave",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://hbr.org/2019/08/how-to-return-to-work-after-taking-parental-leave",
      author:"Rebecca Knight"
    },
    
  ];
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const cards = blogs.map((blog) => (
    <BlogCard
      key={blog.id}
      title={blog.title}
      img={blog.img}
      link={blog.link}
      author = {blog.author}
    />
  ));
  return (
    <section
      ref={targetRef}
      className="sm:min-h-[400vh] relative flex flex-col justify-start bg-[#F5EEE6]"
      id="blogs"
    >
      <div className="static sm:sticky sm:top-0 sm:h-screen ">
        <h1 className="w-full flex justify-center text-4xl tracking-widest font-bold my-10">
          BLOGS
        </h1>
        <div className="overflow-hidden px-3 hidden sm:flex">
          <motion.div style={{ x }} className="flex gap-5">
            {/* {timelineCards} */}
            {cards}
          </motion.div>
        </div>
        <div className="visible flex flex-col sm:hidden items-center gap-5 pb-10 ">
          {/* {timelineCards} */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
