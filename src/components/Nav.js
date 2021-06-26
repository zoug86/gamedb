import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fadeIn } from '../animation';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchedGames } from '../actions/gamesAction';

const Nav = () => {
    const { searched } = useSelector(state => state.games)

    const dispatch = useDispatch();
    const [inputGame, setInputGame] = useState("");

    const changeHandler = (e) => {
        setInputGame(e.target.value);
        //console.log(e.target.value);
    }
    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(loadSearchedGames(inputGame));
        setInputGame("");
    }

    const searchHandler = () => {
        dispatch({ type: "CLEAR_SEARCHED" });

    }
    return (
        <StyledNav variants={fadeIn} initial="hidden" animate="show">
            <div className="logo" style={{ display: "flex", justifyContent: "center" }}>
                <Logo onClick={searchHandler}>
                    <img src={logo} alt="logo" />
                    <h1>GameDb</h1>
                </Logo>
            </div>
            <Form className="search">
                <input value={inputGame} type="text" onChange={changeHandler} placeholder="Search a Game" />
                <button onClick={clickHandler}>Search</button>
            </Form>
        </StyledNav>
    )
}


const StyledNav = styled(motion.nav)`
            padding: 3rem 5rem;
            text-align: center;
            input {
                width: 30%;
            font-size: 1.5rem;
            padding: 0.5rem;
            border: none;
            margin-top: 1rem;
            box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
            //outline: none;
            &:focus {outline: none; } 
  }
            button {
            font-size: 1.5rem;
            border: none;
            padding: 0.5rem 2rem;
            cursor: pointer;
            background: #ff7676;
            color: white;
  }

            `;
const Logo = styled(motion.nav)`
            width: 10%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            cursor: pointer;
            img {
                height: 2rem;
            width: 2rem;
            margin: 1rem;
  }

            `;

const Form = styled(motion.form)`
            input::placeholder{
                color: #ff7676;
            font-size: 1.2rem;
            opacity: 0.5;
            padding: 1rem;
   }

            `;


export default Nav;