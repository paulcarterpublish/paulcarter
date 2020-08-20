import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse
const { Option } = Select


const text = `
  Your attitude will take control and guide all the events
  in your life. Anything you do and know will condition what you receive.
  The universe is energy. Our thoughts transform that concentration
  of energy creating our reality. At the core of our being, we are one
  with the planet earth, the universe, and the omnipresence of the Most High.
  Reality is both spiritual, physical, and psychological.
`;


class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);

  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

  iconChanger = ()=>{
    console.log('clicks')
  }

   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                    onClick={event => {
                      event.stopPropagation();
                }}
            />
          )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
  }

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
            header="Ebooks" 
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton:'https://www.stratton-press.com/books/the-further-tales-of-a-country-doctor/',
                          barnes:'https://www.barnesandnoble.com/w/the-further-tales-of-a-country-doctor-paul-carter/1119852641?ean=9781643452654',
                          amazon:'https://www.amazon.com/Further-Tales-Country-Doctor-ebook/dp/B07RSTCR4M/ref=sr_1_1?dchild=1&keywords=The+Further+Tales+of+a+Country+Doctor&qid=1597948588&s=books&sr=1-1', 
                      },
                      reviews:{},
                      isNonfront:false,
                      paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel 
            header="Purchase PaperBack"
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                      data={{
                        paperback:{
                            amazon:'https://www.amazon.com/Further-Tales-Country-Doctor/dp/1643451324/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1597948588&sr=1-1',
                            barnes:'https://www.barnesandnoble.com/w/the-further-tales-of-a-country-doctor-paul-carter/1119852641?ean=9781643451329',
                            booksamillion:'https://www.booksamillion.com/p/Further-Tales-Country-Doctor/Paul-Carter/9781643451329?id=7714171848832',
                        },
                        ebooks:{},
                        isNonfront:false,
                        reviews:{},
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions