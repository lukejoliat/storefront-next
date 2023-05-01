import {
  Card,
  CardActions,
  CardBody,
  CardImage,
  CardTitle,
} from "@/components/card";
import { FC } from "react";
import { Product } from "./product-list";
import Image from "next/image";
import Link from "next/link";
import { PATHS } from "@/app/paths";

type Props = {
  product: Product;
};

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <Card className="m-2 w-64">
      <CardImage>
        <Link href={`${PATHS.PRODUCTS}/${product.id}`}>
          <Image src={product.photo} alt="photo" width={800} height={800} />
        </Link>
      </CardImage>
      {/* <CardDescription>{product.description}</CardDescription> */}
      <CardBody>
        <CardTitle>
          <Link href={`${PATHS.PRODUCTS}/${product.id}`}>{product.title}</Link>
          <div className="badge badge-secondary">NEW</div>
        </CardTitle>
        <CardActions align="left">
          <div className="badge badge-outline">Toys</div>
          <div className="badge badge-outline">Transformers</div>
        </CardActions>
      </CardBody>
    </Card>
  );
};
