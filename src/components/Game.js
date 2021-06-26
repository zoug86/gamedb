import React from 'react';
// styling and animation:
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { popup } from '../animation';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadDetails } from '../actions/detailAction';
import { smallImage } from '../util';


const Game = ({ name, released, image, id }) => {
    const toggle = useSelector(state => state.theme);
    //load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetails(id));
    }
    return (

        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={id.toString()} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`name ${id.toString()}`} className={!toggle ? "toggle" : ""}>{name}</motion.h3>
                <p className={!toggle ? "toggle" : ""}>{released}</p>
                {image && <motion.img layoutId={`image ${id.toString()}`} src={smallImage(image, 640)} alt={name} />}
            </Link>
        </StyledGame>

    )
}

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;
overflow: hidden;
cursor: pointer;
img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
}

.toggle{
  color: white;
  opacity: 0.8;
}
`;

export default Game;