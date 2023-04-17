import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

type Props = {
    title: string;
    photo: string;
    description: string;
    link: string;
    className?: string;
}

export const Card: FC<Props> = ({ className, title, description, photo, link }) => {
    return (
        <div className={clsx("card w-96 bg-base-100 shadow-xl", className)}>
            <figure><img src={photo} alt="photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <Link href={link}>{title}</Link>
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    )
}