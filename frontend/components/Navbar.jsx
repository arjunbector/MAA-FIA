import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();
  return (
    <nav className="flex w-full sticky backdrop-blur-sm h-16 z-[10] top-0 justify-end p-5 gap-10 items-center bg-[#f3d7ca8e]">
      <Link href="/">Home</Link>
      <Link href="/">Blogs</Link>
      <Link href="/">About Us</Link>
      <Link href="/">Dashboard</Link>
      {status === "authenticated" ? (
        <button
          classname="bg-[#E6A4B4]"
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      ) : (
        <button className="bg-[#E6A4B4] px-2 py-1 rounded-md"
          onClick={() => {
            signIn();
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
