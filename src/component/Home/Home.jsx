import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import { useEffect, useState } from "react";

const Home = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('./donation.json')
            .then(res => res.json())
            .then(data => setCatagories(data))

    }, [])

    const handleSearch = (catagoryName) => {
        if (catagoryName) {
            const searchCatagory = catagories.filter(item => item.Category === catagoryName);
            setCatagories(searchCatagory);
        }
        else {
            fetch('./donation.json')
                .then(res => res.json())
                .then(data => setCatagories(data))

        }
    };

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <Catagories catagories={catagories}></Catagories>
        </div>
    );
};

export default Home;