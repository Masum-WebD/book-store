import React from 'react';
import './HomePopUp.css';
const HomePopUp = () => {
    let state = {
        name: 'circle'
    }
    const startRotation = () => {
        this.setState({
            name: 'circle start-rotate'
        });
    }
    return (
        <div className='px-10'>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle w-100">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-center items-center'>
                        <div className='popup w-50'>
                            <div>
                                <div className='arrow'></div>
                                <ul className={state.name}>

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
                        </div>
                        <div className='w-50 ml-2'>
                            <h2 className='text-2xl text-lime-900 font-bold mb-2'>New collection Adventure Sale</h2>
                            <p className='text-black mb-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <input type="text" placeholder="Type name" class="input input-bordered input-primary w-full max-w-xs mb-2" />
                            <br />
                            <input type="email" placeholder="Type email" class="input  input-primary w-full max-w-xs mb-2" />
                            <br />
                            <button class="spin-btn" onClick={startRotation}>Spin</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePopUp;