import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { CgHeart } from "react-icons/cg";

interface Props {
  name: string;
  price: number;
  sold: number;
  isfavorite: boolean;
  img: string;
  url: string;
}

export default function CardImage(props: Props) {
  const { name, price, sold, isfavorite, img, url } = props;

  return (
    <Link href={`/product/${url}`}>
      <Card isFooterBlurred radius="lg" className="border-none w-64">
        <Image
          alt={name || "product image"}
          className="object-cover"
          height={950}
          src={
            img ||
            "https://cdnpro.eraspace.com/media/catalog/product/i/p/iphone_14_blue_1.jpg"
          }
          width={950}
        />
        <CardBody className="flex flex-col gap-4">
          <h2 className="sm-md-base">{name}</h2>
          <p className="md-bold-base text-purple-500">IDR {price}</p>
          <div className="flex justify-between">
            <p className="sm-md-base text-red-400">{sold} sold</p>
            <CgHeart
              size={20}
              className={`${
                isfavorite ? "text-red-400" : "text-black"
              } cursor-pointer`}
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
