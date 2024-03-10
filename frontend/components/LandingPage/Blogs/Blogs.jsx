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
      author: "Rebecca Knight",
    },
    {
      id: 2,
      title: "5 Empowering Tips for Breastfeeding Working Moms",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*43n_IwcXKoZUj66WQYjKdw.png",
      link: "https://tina-here.medium.com/5-empowering-tips-for-breastfeeding-working-moms-61fb87ee2374",
      author: "Tina Here",
    },
    {
      id: 3,
      title: "Navigating the Triumphs and Challenges As a Working Mom",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*SGKvlp8pySftwZYq",
      link: "https://medium.com/@romy.mclegne/navigating-the-triumphs-and-challenges-as-a-working-mom-65084cf29d1e",
      author: "Romy McLegne",
    },
    {
      id: 4,
      title: "Building Your Support Village as a Working Mom: Smart Strategies for Balance",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wIbOhKPN8LUPEFPneoYNQA.png",
      link: "https://kristiandrus.medium.com/building-your-support-village-as-a-working-mom-smart-strategies-for-balance-9635d2270a33",
      author: "Rebecca Knight",
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
      author={blog.author}
    />
  ));
  return (
    <section
      ref={targetRef}
      className="sm:min-h-[400vh] relative flex flex-col justify-start bg-[#F5EEE6]"
      id="blogs"
    >
      <div className="static sm:sticky sm:top-0 sm:h-screen ">
        <h1 className="w-full flex justify-center text-4xl tracking-widest font-bold my-10"></h1>
        <div className="overflow-hidden px-3 hidden sm:flex bg-[#FFF8E3] p-5 m-5 rounded-lg">
          <motion.div style={{ x }} className="flex gap-5">
            <div className="w-80 p-5">
              <h1 className="font-[Grespoika] text-5xl text-center">Blogs</h1>
              <p className="mt-5 text-md">
                Learn from the journeys of women who have successfully balanced
                work and motherhood. Gain insight, motivation, and practical
                tips from their experiences to help you navigate your own path
                with confidence.
              </p>
            </div>
            {cards}
          </motion.div>
        </div>
        <div className="visible flex flex-col sm:hidden items-center gap-5 pb-10 "></div>
      </div>
    </section>
  );
};

export default Blogs;
