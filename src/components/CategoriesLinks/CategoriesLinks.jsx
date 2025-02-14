import { Link } from "react-router-dom"

const CategoriesLinks = ({ searchParams }) => {
    return (
        <div
            className=" border-b-[0.5px] border-b-[#eee5] w-11/12 mx-auto md:w-full  flex"
        >
            <Link
                to={`/`}
                className={`  cursor-pointer hover:scale-105 pb-2 flex ${!searchParams && "border-b-[0.5px] border-b-[#eee]"}`}
            >Home</Link>
            <Link
                to={`/?about=true`}
                className={`mx-4 cursor-pointer hover:scale-105 pb-2 flex ${searchParams && "border-b-[0.5px] border-b-[#eee]"}`}
            >About</Link>
        </div>
    )
}

export default CategoriesLinks