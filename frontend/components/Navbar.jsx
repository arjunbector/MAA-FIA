import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status } = useSession();
  console.log("cfgdvdstet",status)
  return (
    <nav>
      {status === "authenticated" ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      ) : (
        <button
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
