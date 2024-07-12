import React from 'react'

function Home() {
    return (
        <>
            <div className="container home d-flex">
                <div className="left d-flex flex-column gap-3">
                    <div className="Heading">
                        <h1>YOUR FEET DESERVE THE BEST</h1>
                    </div>
                    <div className="Paragraph">
                        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    </div>
                    <div className="buttons d-flex">
                        <div className="btn1">
                        <button className='shop'>Shop Now</button>
                        </div>
                        <div className="btn2">
                        <button className='cat'>Category</button>
                        </div>
                    </div>
                    <div className="logo">
                        <p className='para'>Also Available On</p>
                        <div className="logo_img d-flex">
                        <a href="http://" target="_blank" rel="noopener noreferrer"><img src="./images/flipkart.png" alt="" /></a>
                       <a href="http://" target="_blank" rel="noopener noreferrer"> <img src="./images/amazon.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="right d-flex">
                    <img src="./images/shoe_image.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Home