
import PropTypes from 'prop-types';
import Catagory from '../Catagory/Catagory';

const Catagories = ({ catagories }) => {
    return (
        <div className=' container md:mx-auto grid md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-0  md:my-6  md:gap-10'>
            {catagories?.map((catagory) => <Catagory key={catagory.id} catagory={catagory}></Catagory>)}
        </div>
    );
};

Catagories.propTypes = {
    catagories: PropTypes.array,
};

export default Catagories;