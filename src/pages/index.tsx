import type { NextPage } from "next";
import Logo from "../components/atoms/Logo";

const Home: NextPage = () => {
  return (
    <div>
      <Logo width={30} height={30} text="Hello" />
    </div>
  );
};

export default Home;
