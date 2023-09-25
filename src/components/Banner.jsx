const Banner = () => {
  return (
    <div className="py-28 sm:py-40 bg-[#FFFFFFF2]">
      <section className="flex flex-col justify-center items-center gap-8">
        <h1 className="font-bold text-2xl md:text-4xl text-center text-[#0B0B0B]">
          I Grow By Helping People In Need
        </h1>

        <div className="bg-[#FF444A] w-fit  flex rounded-lg">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here..."
            className="bordered border-2 py-3 px-4 rounded-s-lg"
          />
          <button type="submit" className="px-6 text-white font-semibold">
            Search{" "}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
