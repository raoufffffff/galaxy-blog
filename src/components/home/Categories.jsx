import { motion } from "framer-motion";
import CategoriesLinks from "../CategoriesLinks/CategoriesLinks";
import { useSearchParams } from "react-router-dom";
import ItemContainer from "../ItemContainer/ItemContainer";

const Categories = () => {
    const [searchParams] = useSearchParams()
    let a = searchParams.get("about")
    return (
        <section
            className="min-h-dvh min-w-screen text-white z-10"
        >
            <motion.h1
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl text-center my-10 font-bold"
            >with Galaxy explor the space</motion.h1>
            <div
                className="flex flex-col md:flex-row w-full"
            >
                <div
                    className="w-full md:w-8/12 md:px-5"
                >
                    <CategoriesLinks searchParams={a} />

                    {a ?
                        <p
                            className="font-[500] text-md py-8 pl-5 backdrop-blur-sm"
                        >
                            The Space Travel Blog is a space science and technology publication aimed at a general audience. We cover topics ranging from small satellite development and space startups to interplanetary science missions and terrestrial applications. The blog is published by UT Tartu Observatory and the ESTCube team in Estonia. We seek contributions from Northern Europe, the Baltics, and beyond.</p>
                        :
                        <ItemContainer />
                    }
                </div>
            </div>
            <div
                className="w-full md:w-4/12"
            ></div>
        </section>
    )
}

export default Categories