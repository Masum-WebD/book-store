import React, { useState } from 'react';
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
        <div className='p-10 w-full'>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle w-100">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-center items-center'>
                        <div className='popup w-50'>
                            {/* <div className={state}>
                                    <div className='arrow'></div>
                                    <ul className='circle'>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$1</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$2</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$3</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$4</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$5</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$6</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$7</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$8</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$9</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$10</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$11</div>
                                        </li>
                                        <li>
                                            <div className='text' contentEditable='true' spellCheck='false'>$12</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>*/}

                            <div className='w-50 ml-2'>
                                <h2 className='text-2xl text-lime-900 font-bold mb-2'>New collection Adventure Sale</h2>
                                <p className='text-black mb-2'>Its the bright one, its the right one,thats offer</p>
                                <input type="text" placeholder="Type name" class="input input-bordered input-primary w-full max-w-xs mb-2" />
                                <br />
                                <input type="email" placeholder="Type email" class="input  input-primary w-full max-w-xs mb-2" />
                                <br />
                                <Link to="/all-products"><button class="spin-btn">Spin</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePopUp;