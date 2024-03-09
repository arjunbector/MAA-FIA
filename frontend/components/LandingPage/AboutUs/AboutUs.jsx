import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <section id="about" className="flex flex-col px-20 bg-[#F5EEE6]">
      <div className="bg-[#f3d7ca72] p-12 backdrop-blur-md rounded-xl">
        <h1 className="text-4xl uppercase font-semibold text-center ">
          about us
        </h1>
        <p className="text-xl my-5 text-justify">
          At MAA-FIA, we understand the transformative journey that comes with
          motherhood. We recognize the challenges faced by new mothers as they
          navigate the delicate balance between nurturing their families and
          pursuing their professional aspirations. Our mission is to empower and
          support these remarkable women on their path to reclaiming their
          careers.
        </p>

        <div className="flex w-full justify-center gap-40 mt-10">
          <div className="w-40 text-5xl flex flex-col items-center">
            <p>
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={true}
                className=" text-center w-full"
                end={73}
                duration={3}
              />
              %
            </p>
            <h3 className="text-sm text-center text-slate-600">
              Women face difficulty restoring their pre-baby career success.
            </h3>
          </div>
          <div className="w-40 text-5xl flex flex-col items-center">
            <p>
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={true}
                className=" text-center w-full"
                end={48}
                duration={3}
              />
              %
            </p>
            <h3 className="text-sm text-center text-slate-600">
              Indian women leave the workforce within four months of their
              return from maternity leave
            </h3>
          </div>
          <div className="w-40 text-5xl flex flex-col items-center">
            <p>
              <CountUp
                enableScrollSpy={true}
                scrollSpyOnce={true}
                className=" text-center w-full"
                end={80}
                duration={3}
              />
              %
            </p>
            <h3 className="text-sm text-center text-slate-600">
              Companies do not comply with the POSH act norms.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
