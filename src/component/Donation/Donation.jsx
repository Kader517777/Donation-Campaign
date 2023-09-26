import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {

    const getLocalData = JSON.parse(localStorage.getItem('catagories'));

    return (
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
            {getLocalData?.map(catagory => <DonationCard key={catagory.id} catagory={catagory}></DonationCard>)}
        </div>
    );
};



export default Donation;