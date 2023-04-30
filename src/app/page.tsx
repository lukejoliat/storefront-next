import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="hero h-60"
        style={{
          backgroundImage: "url(/hero.webp)",
        }}
      />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/bumblebee.webp"
            className="max-w-sm rounded-lg"
            alt="bumblebee"
            width={500}
            height={500}
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              {" "}
              Transformers - More than meets the eye!
            </h1>
            <p className="py-6 max-w-md m-auto">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
