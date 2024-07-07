import React, { useState } from 'react'

function Nevegation({ showTitle, handleChange }) {
    // const [showTitle, setShowTitle] = useState('Notes')
    const handleInputChange = (event) => {
        handleChange(event);
    };
    return (
        <header class="bg-white">
            <nav class="flex justify-between items-center w-[92%]  mx-auto">
                <div>
                    {/* <span>Notes and Groceries</span> */}
                    <img class="w-16 cursor-pointer" src={showTitle === 'Notes' ? "https://img.freepik.com/premium-vector/otes-icon-logo-vector-design-template_827767-4987.jpg" : "https://thumbs.dreamstime.com/b/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.jpg"} alt="..." />
                </div>
                <div
                    class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                    {/* <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a class="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">Solution</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">Resource</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">Developers</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">Pricing</a>
                        </li>
                    </ul> */}
                </div>

                <div class="flex items-center gap-6">
                    <button class="align-middle block m-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => showTitle === 'Notes' ? handleInputChange('Grocery') : handleInputChange('Notes')}>{showTitle === 'Notes' ? 'go to Grocery list' : 'go to Notes'}</button>
                </div>
            </nav >
        </header >
    )
}

export default Nevegation