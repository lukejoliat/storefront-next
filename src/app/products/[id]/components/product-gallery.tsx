import clsx from "clsx";
import Image from "next/image";

type Props = {
  handleClick: (p: string) => void;
  photos: string[];
  direction?: "vertical" | "horizontal";
  className?: string;
};

export const ProductGallery = ({
  handleClick,
  photos,
  direction = "vertical",
  className,
}: Props) => {
  return (
    <div
      className={clsx(
        "mr-3 justify-center md:justify-normal overflow-scroll flex-row mt-2 hidden md:flex",
        className
      )}
    >
      {photos.map((p: string, i: number) => {
        return (
          <div
            className="bg-slate-900 rounded-md m-2 w-[90px] h-[90px]"
            key={`photo-${i}`}
          >
            <Image
              src={p}
              alt="product 1"
              width={200}
              height={200}
              onClick={() => handleClick(p)}
              className="cursor-pointer rounded-lg h-full w-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
};
