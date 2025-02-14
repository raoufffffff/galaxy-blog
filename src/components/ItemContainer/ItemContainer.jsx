import data from "../../data/data"
import ItemCard from "../ItemCard/ItemCard"
const ItemContainer = () => {


    return (
        <div
            className="flex flex-col p-5 w-full"
        >
            {data.filter(e => e.show).map(e => <ItemCard item={e} key={e.title} />)}
        </div>
    )
}

export default ItemContainer