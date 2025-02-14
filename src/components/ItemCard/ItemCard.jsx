import { Link } from "react-router-dom"
import { motion } from "framer-motion";

const ItemCard = ({ item }) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0.5 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <Link
                className="w-full flex my-1 rounded-xl backdrop-blur-sm overflow-hidden  min-h-[120px] max-h-[120px]"
            >
                <div
                    className="my-3 pl-3"
                >
                    <h1
                        className=" mb-2"
                    >{item.title}</h1>
                    <span
                        className="text-[#fff7] text-[12px]"
                    >{item.shortDescription}</span>
                </div>
                <img src={item.img}
                    className="w-4/12 ml-auto min-h-full "

                />
            </Link>
        </motion.div >
    )
}

export default ItemCard