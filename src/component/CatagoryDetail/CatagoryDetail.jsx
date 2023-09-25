
import { parse } from 'postcss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';

const CatagoryDetail = () => {
    const [findcatagoryDetails, setFindcatagoryDetails] = useState({});

    const catagories = useLoaderData();
    const catagory = useParams();
    const findItem = catagories?.find(item => item.id == catagory.id);

    const handleAddedLocal = () => {
        const objectdArray = [];

        const getLocalData = JSON.parse(localStorage.getItem('catagories'));

        if (!getLocalData) {
            objectdArray.push(findItem);
            localStorage.setItem('catagories', JSON.stringify(objectdArray));
        }
        else {
            objectdArray.push(...getLocalData, findItem);
            localStorage.setItem('catagories', JSON.stringify(objectdArray));
        }
    }



    return (
        <div className=' container mx-auto'>
            <div className="hero  h-[500px] flex flex-col justify-end" style={{ backgroundImage: `url(${findItem.image_url})` }}>

                <div className="hero-overlay h-[130px] flex items-center">
                    <button onClick={handleAddedLocal} className="btn ml-5 text-[#fff] text-xl font-semibold" style={{ backgroundColor: `${findItem.t_b_color}` }}>Donate $290</button>
                </div>
            </div>
            <div>
                <h1 className=' mt-14 mb-6 text-4xl font-bold text-[#0B0B0BB3]'>{findItem.title}</h1>
                <p className=''>There are many things that can be done to ensure that all people have
                    access to a good education. Governments can invest in public schools,
                    provide financial assistance to students, and make sure that all
                    schools have qualified teachers and resources. Families can support their
                    children's education by creating a learning environment at home and helping
                    them with their schoolwork. Teachers can create a positive and supportive
                    learning environment for their students and challenge them to reach their
                    full potential.</p>
            </div>
        </div>
    );
};

// CatagoryDetail.propTypes = {

// };

export default CatagoryDetail;