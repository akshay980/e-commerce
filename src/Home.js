import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div classname="home">
            <div className="home_container">
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    className="home_image"
                    alt=""
                />

                <div className="home_row">
                     {/* Products  */}
                    <Product
                        id="1"
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5} 
                    />
                    <Product
                        id="2"
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5}  />
                    <Product
                        id="3" 
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5} />
                </div>

                <div className="home_row">
                    <Product 
                        id="4"
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5} />
                    <Product
                        id="5"
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5}  />
                </div>

                <div className="home_row">
                    <Product
                        id="6"
                        title="Book"
                        price={19.45}
                        image="https://images-na.ssl-images-amazon.com/images/I/91yj3mbz4JL.jpg"
                        rating={5}  />
                </div>


            </div>
        </div>
    )
}

export default Home;
