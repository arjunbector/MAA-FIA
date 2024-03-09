import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();
  console.log("cfgdvdstet",status)
  return (
    <nav className="flex w-full sticky backdrop-blur-sm h-16 z-[10] top-0 justify-end p-5 gap-10 items-center bg-[#f3d7ca8e]">
      <Link href="/">Home</Link>
      <Link href="#about">About Us</Link>
      <Link href="#blogs">Blogs</Link>
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
            signIn("google");
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;
