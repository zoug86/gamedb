import React from 'react';
import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
// styling and animation:
import styled from 'styled-components';
import { motion } from "framer-motion";
//Redux
import { useSelector } from 'react-redux';
//Platform Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import xboxx from "../img/xboxx.svg";
import playstation5 from "../img/apple5.svg";
//Star Images
import empty from "../img/empty.svg";
import full from "../img/full.svg";



const GameDetail = ({ pathId }) => {
    const history = useHistory();
    const exitDetailsHandler = (e) => {
        const element = e.target;
        console.log("Handler Clicked!")
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    }
    //Get platform Images
    const getPlatfromIcon = (name) => {
        if (name === "Xbox One") return xbox;
        if (name === "PC") return steam;
        if (name === "PlayStation 4") return playstation;
        if (name === "Xbox Series S/X") return xboxx;
        if (name === "PlayStation 5") return playstation5;
        if (name === "iOS") return apple;
        if (name === "Nintendo Switch") return nintendo;
        return gamepad;
    }

    // Get stars 
    const getStars = (rating) => {
        let stars = []
        rating = Math.floor(rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(full);
            } else {
                stars.push(empty)
            }
        }
        return stars;
    }

    //data
    const { game, screens, isLoading } = useSelector((state) => state.details);
    const toggle = useSelector(state => state.theme);
    let stars = getStars(game.rating);
    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailsHandler}>
                    <Detail>
                        <motion.div layoutId={pathId} className={!toggle ? "toggle" : "no-toggle"}>
                            <Stats>
                                <div className="rating">
                                    <motion.h3 className={!toggle ? "other_toggle" : ""} layoutId={`name ${pathId}`}>{game.name}</motion.h3>
                                    <p className={!toggle ? "other_toggle" : ""}>Rating: {game.rating}</p>
                                    {stars.map((star, i) => {
                                        return <img type="image/svg+xml" src={star} style={{ display: "inline", width: "30px", height: "30px", margin: 0 }} key={i} alt={star} />
                                    })}
                                </div>
                                <Info>
                                    <h3 className={!toggle ? "other_toggle" : ""}>Platforms</h3>
                                    <Platforms>
                                        {game.platforms.map(data => {
                                            //return <object type="image/svg+xml" data={getPlatfromIcon(data.platform.name)}>hjhjh</object>
                                            //return <svg width="100" height="100" xmlns={xbox}></svg>
                                            return <img type="image/svg+xml" src={getPlatfromIcon(data.platform.name)} style={{ width: "50px", height: "50px" }} key={data.platform.id} alt={data.platform.name} />
                                        })}
                                    </Platforms>
                                </Info>
                            </Stats>
                            <Media>
                                <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 640)} alt="{background_image}" />
                            </Media>
                            <Description>
                                <p style={{ textAlign: "justify" }} className={!toggle ? "other_toggle" : ""}>{game.description_raw}</p>
                            </Description>
                            <div className="gallery">
                                {screens.results.map(screen => {
                                    return <img key={screen.id} src={smallImage(screen.image, 640)} alt="game" />
                                })}
                            </div>
                        </motion.div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )

}


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y:scroll;
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    left : 0;
    z-index: 5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`;

const Detail = styled(motion.div)`
    .no-toggle{
        background: white;
        color: black;
        width: 80%;
        border-radius: 1rem;
        padding: 2rem 5rem;
        position: absolute;
        left: 10%;
        //color: red;
}

.toggle{
        width: 80%;
        background: #181818;
        //color: white;
        border-radius: 1rem;
        padding: 2rem 5rem;
        position: absolute;
        left: 10%;
}
    
    img{
        width: 100%;
        //z-index: 10;
        //display: block;
    }
    
    .other_toggle{
        color: white;
        opacity: 0.8;
    }
    
    
`;

const Stats = styled(motion.div)`
   display: flex;
   align-items: center;
   justify-content: space-between;

`;
const Info = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;
const Platforms = styled(motion.div)`
   display: flex;
   justify-content: space-between;
   img{
       margin-left: 3rem;
   }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
   justify-content: space-between;
   img{
       width: 100%;
       //height: 60vh;
      // object-fit: cover;
   }
`;
const Description = styled(motion.div)`
    margin: 5rem 0;
`;


export default GameDetail;