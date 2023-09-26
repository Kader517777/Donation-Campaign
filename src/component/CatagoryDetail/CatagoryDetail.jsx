
import { parse } from 'postcss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { json, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
// const Swal = require('sweetalert2');

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
            Swal.fire(
                '!!!',
                'Your Donation success',
                'success'
            )
        }
        else {
            objectdArray.push(...getLocalData, findItem);
            localStorage.setItem('catagories', JSON.stringify(objectdArray));
            Swal.fire(
                '!!!',
                'Your Donation success',
                'success'
            )
        }
    }



    return (
        <div className=' container mx-auto'>
            <div className="hero h-80  md:h-[500px] flex flex-col justify-end" style={{ backgroundImage: `url(${findItem.image_url})` }}>

                <div className="hero-overlay h-[130px] flex items-center">
                    <button onClick={handleAddedLocal} className="btn ml-5 text-[#fff] text-xl font-semibold" style={{ backgroundColor: `${findItem.t_b_color}` }}>Donate ${findItem.price}</button>
                </div>
            </div>
            <div className='mx-5 lg:mx-0'>
                <h1 className=' mt-14 mb-6 text-4xl font-bold text-[#0B0B0BB3]'>{findItem.title}</h1>
                <p className=''>{findItem.description}</p>
            </div>
        </div>
    );
};

// CatagoryDetail.propTypes = {

// };

export default CatagoryDetail;