import React from 'react';

const groceryItems = [
    { name: "Apples", description: "Fresh and juicy apples.", price: 3.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6-AI1uXb6sHOmrE4_ZkbPkCMA0ONCZdxAnw&s" },
    { name: "Bananas", description: "Ripe bananas.", price: 1.49, image: "https://img.freepik.com/premium-photo/photo-banana-black-background_951562-956.jpg" },
    { name: "Carrots", description: "Crunchy carrots.", price: 2.29, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpips-DE-aTWtWVz4_yyV5aXlJ4R2LG9biTg&s" },
    { name: "Tomatoes", description: "Red and ripe tomatoes.", price: 2.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEAgRKUbM8miXzQOUU8XXIwIb500fOnjGtug&s" },
    { name: "Lettuce", description: "Crisp and fresh lettuce.", price: 1.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHcNm8EWDfNNjnd_49In5skEWTyuUB2DFkA&s" },
    { name: "Oranges", description: "Sweet and tangy oranges.", price: 4.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkAE4LQ2AhcNJQz_sy1TcbLhRNS3_qaIz3g&s" },
    { name: "Potatoes", description: "Starchy and versatile potatoes.", price: 3.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dD1IE5Q-AH9utIXAE7Vg3gpaPaciqHScnQ&s" },
    { name: "Grapes", description: "Juicy and sweet grapes.", price: 5.49, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiCyGA0DsMyi40hMq_Ksb7AeA_MbXNUbYNQ&s" },
    { name: "Peppers", description: "Colorful and crisp bell peppers.", price: 2.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztK7R2Scn3P8Q4onJ1dQkjovY2eZo-u9NYw&s" }
];
function Grocery() {
    return (
        <div className="flex flex-wrap justify-center">
            {groceryItems.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2"
                    style={{ width: '300px', height: '400px' }}
                >
                    <img
                        className="object-cover w-full h-48 rounded-t-lg"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal h-52">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                            {item.name}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-600">
                            {item.description}
                        </p>
                        <span className="mt-auto text-lg font-semibold text-gray-900 dark:text-black">
                            ${item.price.toFixed(2)}
                        </span>
                    </div>
                </a>
            ))}
        </div>

    );
}

export default Grocery;
