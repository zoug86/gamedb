import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GiNightSleep } from 'react-icons/gi'
import { WiDaySunny } from 'react-icons/wi'

// Redux
import { useDispatch, useSelector } from 'react-redux';


const ThemeSlider = () => {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.theme);
  //const [toggle, setToggle] = useState(true);
  const sliderHandler = () => {
    dispatch({ type: "FETCH_TOGGLE" })
    if (toggle) {
      document.body.style.background = "#212121";
      document.body.style.color = "white";
    }
    else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }

  }
  return (
    <Slider>
      <div className={toggle ? "toggle" : ""}>
        <span className='day'><WiDaySunny /></span>
        <label className="switch">
          <input type="checkbox" onClick={sliderHandler} />
          <span className="slider round"></span>
        </label>
        <span className='night'><GiNightSleep /></span>
      </div>
    </Slider >
  )
}

const Slider = styled(motion.div)`
div{
 width: 100%;
 display: flex;
 align-items: center;
 padding: 2rem;
}
 .night{
  font-size: 2rem;
  margin-left: 0.5rem;
  
 }

 .day{
  color:#FFBE00;
  font-size: 2.5rem;
  margin-left: 0.5rem;
 }

 .toggle{
   //background: red;
 }
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFBE00;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #000;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}


`;

export default ThemeSlider;