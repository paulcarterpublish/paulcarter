import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"


import Book1 from '../../static/books/Book_Cover_v3.png'
import Book2 from '../../static/books/Book_Cover.png'
import Book3 from '../../static/books/Book_Cover_v2.png'

const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'paul-carter',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Tales of a Country Doctor`,
                                    spanFirst: ``,
                                    imgSrc: Book1,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                            One cold winter night, on my way to have dinner with
                                            friends, I got stuck in traffic. There had been an
                                            accident at the lights ahead. As I sat there in the
                                            dark and the wet, waiting for the mess to be cleared,
                                            I glanced across the road. There on a noticeboard outside
                                            a rundown weatherboard church was a message: “Unless you
                                            change direction, you will end up where you are going.” “It’s a sign,” I said.
                                            “Ha-ha!” But I had already taken the message to heart. 
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/tales-of-a-country-doctor/',
                                        barnes:'https://www.barnesandnoble.com/w/tales-of-a-country-doctor-paul-carter-md/1128848988?ean=9781643450353',
                                        amazon:'https://www.amazon.com/gp/product/B07DF5RQ6D/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i2', 
                                    },
                                    paperback:{
                                        amazon:'',
                                        barnes:'https://www.barnesandnoble.com/w/tales-of-a-country-doctor-paul-carter-md/1128848988?ean=9781643450346',
                                        booksamillion:'https://www.booksamillion.com/p/Tales-Country-Doctor/Paul-Carter-MD/9781643450346?id=7714171848832',
                                    }
                                }} 
                            />

                            <BookInfo
                                data={{
                                    title:`The Further Tales of a Country Doctor`,
                                    spanFirst: ``,
                                    imgSrc: Book2,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                           The Further Tales of a Country Doctor are Carter’s continuing
                                           stories of the tapestry of life as drawn from overseeing a
                                           small-town medical practice in rural Australia.
                                        </p>

                                        <p>
                                            Over the years, in both private and professional capacities,
                                            Carter’s fellow community members have taken him into their
                                            lives and opened themselves up to him. They have shared their hopes,
                                            their fears, their highs, and their lows. Now their generosity extends
                                            to allowing him to share all this with a wider audience.
                                        </p>

                                        <p>
                                            This series of interlinking short stories are not only about
                                            these everyday heroes of rural Australia, but also about
                                            the two-way nature of friendship and healing. Rich, spirited,
                                            irresistible, often funny, sometimes sombre, but overwhelmingly
                                            uplifting, the humanity of these stories will stay with you for a long time.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/the-further-tales-of-a-country-doctor/',
                                        barnes:'https://www.barnesandnoble.com/w/the-further-tales-of-a-country-doctor-paul-carter/1119852641?ean=9781643452654',
                                        amazon:'https://www.amazon.com/Further-Tales-Country-Doctor-ebook/dp/B07RSTCR4M/ref=sr_1_1?dchild=1&keywords=The+Further+Tales+of+a+Country+Doctor&qid=1597948588&s=books&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Further-Tales-Country-Doctor/dp/1643451324/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597948588&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/the-further-tales-of-a-country-doctor-paul-carter/1119852641?ean=9781643451329',
                                        booksamillion:'https://www.booksamillion.com/p/Further-Tales-Country-Doctor/Paul-Carter/9781643451329?id=7714171848832',
                                    }
                                }} 
                            />


                            <BookInfo
                                data={{
                                    title:`Yet More Tales of a Country Doctor`,
                                    spanFirst: ``,
                                    imgSrc: Book3,
                                    id:'the_gifted_one',
                                    content:
                                    `
                                        <p>
                                           Yet More Tales of a Country Doctor is the third in Carter's
                                            trilogy of stories drawn from his much-loved rural practice,
                                            where he served the local community as their doctor for thirty-three years.
                                            The stories, which are all drawn from true events, reflect the very
                                            personal, as well as equal, relationships which are a feature of country life.
                                            Like life itself, many of these stories are simultaneously both funny and sad.
                                            Yet More Tales of a Country Doctor, through the exploits of the various characters,
                                            explores many of the issues which face us all, and celebrates the indomitable spirit
                                            of every day heroes in overcoming whatever obstacles might lie in their way. 
                                        </p>

                                        <p>
                                            As with the two earlier books in the trilogy ("Tales of a country doctor", and "The further tales of a country doctor"),
                                            this collection of stories will keep you highly entertained, and stay in your mind for a long time to come.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/yet-more-tales-of-a-country-doctor/',
                                        barnes:'https://www.barnesandnoble.com/w/yet-more-tales-of-a-country-doctor-paul-carter/1137152733?ean=9781648950483',
                                        amazon:'https://www.amazon.com/Yet-More-Tales-Country-Doctor-ebook/dp/B089TWXNHT/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Yet-More-Tales-Country-Doctor/dp/1648950477/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=',
                                        barnes:'https://www.barnesandnoble.com/w/yet-more-tales-of-a-country-doctor-paul-carter/1137152733?ean=9781648950476',
                                        booksamillion:'https://www.booksamillion.com/p/Yet-More-Tales-Country-Doctor/Paul-Carter/9781648950490?id=7714171848832',
                                    }
                                }} 
                            />


            
                            <div className="commentSection" >
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;