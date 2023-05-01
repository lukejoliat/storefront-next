import Image from "next/image";

export const MainPhoto = ({ src }: { src: string }) => {
  console.log("mainPhoto");

  return (
    <Image
      src={src}
      alt="Product Photo"
      className="w-full rounded-lg shadow-2xl md:object-scale-down md:h-[34rem]"
      width={1000}
      height={1000}
    />
  );
};
