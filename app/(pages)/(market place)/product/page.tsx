import CardImage from "@components/CardImage";

export default async function Product() {
  return (
    <section>
      <div className="grid grid-cols-2 p-10 gap-4">
        <div className="grid">
          <CardImage
            isfavorite
            img=""
            name="Iphone 14"
            price={13000000}
            sold={149}
            url="290321u3092013"
          />
        </div>
        <div className="grid">
          <CardImage
            isfavorite={false}
            img=""
            name="Iphone 13"
            price={10000000}
            sold={129}
            url="290321u3092013"
          />
        </div>
      </div>
    </section>
  );
}
