import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">
                        <p>
                          I was born in Warwickshire in central England in 1946.
                          I spent my early years in the small village of Tile Hill near Coventry.
                          As a lad I enjoyed walking to the smithy at the end of the
                          road to see the heavy horses being shod. Later I moved to Coventry
                          for reasons of schooling and attended King Henry VIII school - founded in 1545.
                          I then secured a place in medical school at age 16 - but was too young to be admitted,
                          so spent a year helping with a project of shoreline marine biology at Fowey in Cornwall.
                          I commenced at Guy's Hospital in south London in 1964.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Paul</span>
                            <span>Carter</span>
                            <span></span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;