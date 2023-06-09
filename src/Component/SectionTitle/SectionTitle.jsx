


const SectionTitle = ({heading , subheading}) => {
    return (
        <div className=" text-center py-5 font-serif italic max-w-sm  mx-auto">
            <p className=" text-sm py-2 font-semibold text-red-500">{subheading}</p>
            <h1 className=" font-bold font-serif text-2xl py-2 text-black  ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;