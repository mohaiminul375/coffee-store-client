import bannerBg from "../../assets/more/bannerBg.png"

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bannerBg})` }} className="h-[800px] bg-no-repeat bg-cover bg-center">
            <h2>This is banner</h2>
        </div>
    );
};

export default Banner;