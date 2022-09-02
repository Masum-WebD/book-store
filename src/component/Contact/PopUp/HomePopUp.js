import { Link } from 'react-router-dom';
import './HomePopUp.css';
const HomePopUp = () => {
    // const [state, setState] = useState('')

    // const startRotation = () => {
    //     const setWheel = 'circle start-rotate'
    //     setState(setWheel);
    //     setTimeout(() => {
    //         const stopWheel = 'circle start-rotate stop-rotate'
    //         setState(stopWheel);
    //     }, Math.floor(Math.random() * 10000) + 1)
    // }

    return (

        <div className='w-full'>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle w-100">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-center items-center'>
                        <div className='popup w-50'>

                            <div className='w-50 pb-4 ml-2'>
                                <h2 className='text-2xl text-neutral font-bold mb-2'>Get Surprise Offers!!</h2>
                                <p className='text-neutral mb-6'>Its the bright one, its the right one, thats offer</p>
                                <input type="text" placeholder="Write your coupon code" class="input input-primary w-full  mb-2" />
                                <br />
                                <Link to="/all-products"><button class="text-white w-full bg-primary p-3 rounded-sm">Get Offer</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePopUp;