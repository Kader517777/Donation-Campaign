import { useState } from "react";
import DonationCard from "../DonationCard/DonationCard";


const Donation = () => {
    const [isShow, setIsShow] = useState(false);
    console.log(isShow);
    let getLocalData = JSON.parse(localStorage.getItem('catagories'));
    if (!getLocalData) {
        getLocalData = [];
    }



    return (
        <div>
            <div>
                <div className=" lg:container mx-5 lg:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 my-8">
                    {isShow ?
                        getLocalData?.map(catagory => <DonationCard key={catagory.id} catagory={catagory}></DonationCard>)

                        : getLocalData?.slice(0, 4).map(catagory => <DonationCard key={catagory.id} catagory={catagory}></DonationCard>)

                    }
                </div>
            </div>
            <div onClick={() => setIsShow(!isShow)} className="text-center">
                {getLocalData.length > 4 && !isShow ? <button className=" bg-orange-400 hover:bg-slate-300 px-3 py-2 rounded-md text-xl font-medium">Show more</button>
                    : ''
                }
            </div>

        </div >
    );
};



export default Donation;