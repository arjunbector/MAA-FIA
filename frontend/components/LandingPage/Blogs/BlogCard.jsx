import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ title, img, link, author }) => {
    console.log(title, img, link, author);
  return (
    <Link href={link?link:""}>
      <div className=" h-[22rem] w-80 bg-[#F3D7CA] rounded-xl overflow-hidden border-2 border-[#F3D7CA]">
        <div className="h-2/3 w-full overflow-hidden">
          <Image
            className=" object-cover h-full w-full"
            src={img}
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col justify-between h-1/3 p-2">
          <h1 className="font-semibold leading-tight">{title}</h1>
          <h1 className="text-slate-600">by {author}</h1>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
