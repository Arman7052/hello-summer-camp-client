

const BannerTitle = ({heading , subheading}) => {
    return (
        <div className=" text-center py-5 font-serif italic   mx-auto">
            <p className=" text-xs lg:text-lg lg:py-2 text-white ">{subheading}</p>
            <h1 className=" uppercase text-lg lg:text-5xl  lg:py-2 text-black  ">{heading}</h1>
        </div>
    );
};

export default BannerTitle;