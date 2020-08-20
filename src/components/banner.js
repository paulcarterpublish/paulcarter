import React from 'react'
import {Link} from 'gatsby'



const Banner = ()=>{


    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-column">
                    
                        <div className="grid-child-elem">
                        </div> 

                        <div className="grid-child-elem">
                            <div className="banner-text">

                                <h1>
                                    <span>
                                        <span>Unless you change direction,</span>
                                        <span>you will end up where you are going</span>
                                    </span>
                                </h1>

                               
                                <Link to="/about-the-book">
                                    Read more
                                </Link> 
                              
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;