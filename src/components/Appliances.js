import React from 'react';
import Header from './Header';
import Header_bottom from './Header_bottom';
import Header_bottom_child from './Header_bottom_child';
import Humburger from './Humburger';
import { Link } from 'react-router-dom';
import '../style.css';
import card1 from '../photo/card1.svg';
import star from "../photo/star.svg";
import minikorzina from "../photo/mini_korzina.svg";

import { Slider, RangeSlider ,Checkbox,InputGroup,InputNumber } from 'rsuite';

import 'rsuite/dist/rsuite.min.css';
import Footer_menu from './Footer_menu';

function Appliances() {
  const [value, setValue] = React.useState([10, 50]);
  return (
    <>
   <Header />
   <Humburger />
   <Header_bottom />
   <Header_bottom_child />

   <div className='container'>
   <span id='one-two'>Бытовая техника</span>
   <div className='list'></div>
   <h1 style={{padding:5}}></h1>
    <div className='big_elektr'>
    
        <div className='child_elektr'>
          <h5>Категории</h5>
          <div className='child_elektr_1'>
          <Link to="/Reactdom"><p className='child3'>Электроника</p></Link>
          <Link to="/appliances"><p  className='child3'>Бытовая техника</p></Link>
          <Link to="/Cloth"> <p  className='child3'>одежда</p></Link>
          <Link to="/shoes">    <p  className='child3'>Обувь</p></Link>
          <p>Акессуары</p>
          <p>Красота</p>
          <p>Здаровый</p>
          <p>товары для дома</p>
          <p>Строительство и ремонт</p>
          <p>Автотовары</p>
          <p>Детские товары</p>
          </div>
          <div className='narx'>
      <h5>Цена</h5>
        <RangeSlider
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={value => {
            setValue(value);
          }}
        />
      
      <br />
     
        <InputGroup>
          <InputNumber
            min={9000}
            max={1000000}
            value={value[0]}
            onChange={nextValue => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue, end]);
            }}
          />
          {/* <InputGroup.Addon>to</InputGroup.Addon> */}
          <InputNumber
            min={9000}
            max={1000000}
            value={value[1]}
            onChange={nextValue => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue]);
            }}
          />
        </InputGroup>
     
          </div>

          <div className='checkbox'>
            <h5>Бренд</h5>
            <Checkbox>Dely</Checkbox>
            <Checkbox>Latt liv</Checkbox>
            <Checkbox>Roniq</Checkbox>
            <Checkbox>Vitech</Checkbox>
            <Checkbox>Wondercake</Checkbox>
            <Checkbox>Alpicool</Checkbox>
          </div>
        </div>

        <div className='child_eletr_img'>
           <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>


            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>


            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>


            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>

            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>

            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>

            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>

            <div className='card_item'>
                <div className='card_item_child'>
                <div className='card_img'>
                <img src={card1} />
                </div>
                <div  className='card_title'>
                    <div className='about_product'><p>Финики Date Bam, 650 г + газированный напиток Pepsi, 260 мл</p></div>
                    
                    <div className='card_title_1'>
                    <span> <img src={star}/></span>
                    <p>5.0 107(оценок)</p> 
                    </div>
                    <div className='card_title_2'>
                    <p>1 820 сум/мес</p>
                    </div>
                <br />
                <span className='span_block'>19 000 сум</span>
                
                <div className='card_kozina_log'>
                    <p>14 000 сум</p>
                    <div className='mini_korzina_11'>
                    <img src={minikorzina} />
                    </div> 
                </div>
                </div>
             </div>
            </div>


          </div>

            

        </div>
        <Footer_menu />
      </div>
   </>
  )
}

export default Appliances;