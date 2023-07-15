import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
    return (
        <>
            <div className="bg-hero h-[712px] 2xl:h-[800px] xl:h-[600px] lg:h-[550px] md:h-[500px] pb-10">
                <div className="container mx-auto px-10 2xl:px-0">
                    <Navbar/>
                    <div className="text-center xl:mt-20 lg:mt-10 md:mt-6">
                        <h1 className="text-white text-3xl font-semibold font-mono xl:w-8/12 mx-auto leading-relaxed 2xl:w-6/12 lg:w-10/12">Saya seorang front-end engineer, back-end engineer, dan juga UI designer</h1>
                        <p className="text-white text-lg text-opacity-60 xl:w-4/12 mx-auto mt-6 leading-relaxed 2xl:w-3/12 lg:w-6/12">Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI design</p>
                        <Button href="#profile" pill variant="yellow" className="mt-[57px]">Pelajari</Button>
                  </div>
                </div>
            </div>

        </>
    );
}