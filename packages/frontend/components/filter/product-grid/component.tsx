
import { ProductCard } from "components/product/card/component";
export const ProductGrid = ({lots}) => {

    return (
    {lots.map((item) => (
          <ProductCard
            name={item.title}
            description={item.description}
            price={item.price}
            images={item.imageLinks}
            currency="EURO"
            auctionDate={item.endDate}
            onChangeIsFavorite={() => {}}
          />
      ))}
  );
}
