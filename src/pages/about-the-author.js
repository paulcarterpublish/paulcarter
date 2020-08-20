import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">

                                <h4>
                                   Read by over 25,000 people Dr Paul Carter's
                                   style is filled with kindness, wit and laughter
                                   as he regales stories from his time as a doctor
                                   in a country town inAustralia . He has written three wonderful
                                   Australian best-selling books that remind us all of what
                                   is truly important in life.
                                </h4>
                                
                                <span className="ata-span-fx">
                              
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                I was born in Warwickshire in central England in 1946.
                                I spent my early years in the small village of Tile Hill near Coventry.
                                As a lad I enjoyed walking to the smithy at the end of the road to see
                                the heavy horses being shod. Later I moved to Coventry for reasons
                                of schooling and attended King Henry VIII school - founded in 1545.
                                I then secured a place in medical school at age 16 - but was too young to be admitted,
                                so spent a year helping with a project of shoreline marine biology at Fowey in Cornwall.
                                I commenced at Guy's Hospital in south London in 1964. I graduated with MB BS in 1970.
                                I did various residencies and then commenced training in pathology. I attained a Fellowship
                                and doctorate (MD) in 1976. That same year I was offered the chance to have a 6 months teaching
                                post at the University of Melbourne and jumped at it for several reasons:
                            </p>

                            <p>
                                1. Not happy with the NHS
                            </p>

                            <p>
                                2.Never really felt that I fitted in in England - my medical school was extremely 'toffee-nosed' and I came from the wrong side of the tracks
                            </p>

                            <p>
                                I loved Australia. At the end of the six months, I did something very naughty:
                                I simply didn't go home and, until it was all sorted out a couple of years later.
                                I was a visa overstayer. Rest assured I am now a legal resident.
                            </p>

                            <p>
                                After ten years in Australia, with my marriage coming unglued,
                                I decided that I didn't want to spend the rest of my life living
                                in suburbia and earning my living by looking down a microscope.
                                I decided to move to the country. After looking around for quite
                                a while I bought a 400-acre property in the Macedon Ranges in central Victoria.
                                A wonderful place of hills and forests and bubbling creeks and views forever.
                                I thought it beautiful the first time I set eyes on it and I feel just the same
                                today thirty two years later
                            </p>

                            <p>
                                I hadn't done much general practice before and when I joined
                                the local practice in Romsey and Lancefield I
                                was pushed in at the deep end.
                            </p>

                            <p>
                                The work was exciting, busy and the sharpest learning curve of my life.
                            </p>

                            <p>
                                For the next twelve or thirteen years, I had little to think about apart
                                from looking after the farm and the practice. For much of that time,
                                my only companion was Hardy my dog - with whom I had many philosophical
                                conversations sorting out the problems of the word. "Tales of a country doctor"
                                deasl with many of the stories and events of those years including the death
                                of Hardy and my chance meeting with Helen. It also deals with my involvement
                                with the community and the wonderful characters I have met along the way.
                            </p>

                            <p>
                                I met Helen on a blind date set up by a friend - apparently I was being
                                a pain up the arse about being lonely and way too picky in terms of the
                                stream of lovely ladies who were shepherded in my direction by one and all.
                            </p>

                            <p>
                                Helen was like the farm- I have loved her from the moment I first saw
                                her and I feel exactly the same way today. We were a bit old fashioned
                                in that we 'courted for the better part of a year, then got married and
                                then moved in together. Helen is a city girl. She said she would give
                                the farm a one year's trial and is still here.
                            </p>

                            <p>
                                We both have children from our first marriages, who in turn have produced
                                the wonderful total of eleven delightful and totally perfect grandchildren.
                            </p>

                            <p>
                                Along the way, I am humbled to have been recognised for
                                the effort I have put in looking after the local
                                population over the years

                                2011 Rural Doctors Awards Outstanding service to community.
                                2013 Rural Doctors Awards Victorian Rural Practice of the year.
                                2014 National Day of Thanksgiving Award
                                For service to community
                                2015 Romsey - Lancefield RSL Certificate of appreciation
                                For outstanding and tireless work
                                2015 Royal Australian College of General Practitioners
                                GP of the month (June) For contributions to rural practice
                                My personal interests include
                                Spending time with my wife and 11 grandchildren
                                Opera - I am an opera tragic

                                Portraiture Over the last 20 years I have completed 
                                150 or so portraits - mostly in oils. I have entered
                                the Australian national portrait competition annually
                                for the last 10 years. I have never been a finalist
                                but I have made the 'semi-final' for the last 8 years.
                            </p>

                            <p>
                                Making Furniture Especially from timbers found/ harvested on the farm
                                Writing especially about all the wonderful patients and local characters.
                                I have currently finished two books and about two thirds of the way
                                through the third. The stories are sad, happy, bizarre and downright
                                unbelievable. I don't need to go into them - thay are all in the books.

                                Farming and animal husbandry Finally I am now retired
                                and enjoying a leisurely life playing chess, painting,
                                writing and enjoying Helen's wonderful cooking.
                            </p>

                            <p>Finally</p>

                            <p>
                                I am now retired and enjoying a leisurely life playing
                                chess, painting, writing and enjoying Helen's
                                wonderful cooking.
                            </p>

                            <p>
                                Oh !!
                                I nearly forgot to also mention that I am charming,
                                extremely witty and devastatingly handsome.
                            </p>

                            <span className="author-name">
                                <span className="author-span-ft">Author | Writer </span>
                                <span className="ata-name">Paul Carter</span>
                            </span>

                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;