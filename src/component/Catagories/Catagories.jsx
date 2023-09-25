
import PropTypes from 'prop-types';
import Catagory from '../Catagory/Catagory';

const Catagories = ({ catagories }) => {
    return (
        <div className=' container mx-auto grid grid-cols-4 my-6 gap-10'>
            {catagories.map((catagory) => <Catagory key={catagory.id} catagory={catagory}></Catagory>)}
        </div>
    );
};

Catagories.propTypes = {
    catagories: PropTypes.array,
};

export default Catagories;