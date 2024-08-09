import Image from "next/image";

export default function OrderItem() {
  return (
    <>
      <div className="bg-white rounded-md p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Image
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              alt="img"
              height={100}
              width={70}
              className="rounded-md"
            />
            <div className="flex flex-col justify-center gap-3">
              <p className="sm-md-base uppercase">Iphone 13</p>
              <p className="text-xs text-slate">12/256 GB</p>
            </div>
          </div>
          <p className="text-purple-500 text-sm">1 x IDR 38.000</p>
        </div>
      </div>
    </>
  );
}
