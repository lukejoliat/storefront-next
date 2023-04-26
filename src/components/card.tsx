import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  photo: string;
  description: string;
  link: string;
  className?: string;
};

export const Card: FC<Props> = ({
  className,
  title,
  description,
  photo,
  link,
}) => {
  return (
    <div className={clsx("card w-96 bg-base-100 shadow-xl", className)}>
      <figure>
        <Image src={photo} alt="photo" width={800} height={800} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <Link href={link}>{title}</Link>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Toys</div>
          <div className="badge badge-outline">Transformers</div>
        </div>
      </div>
    </div>
  );
};
