import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Spinner from '../components/Spinner';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
// styling and animation:
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from '../animation';


const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch]);
    const { popular, newGames, upComing, searched } = useSelector(state => state.games);
    const toggle = useSelector(state => state.theme);

    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    //console.log(pathId);
    if (!popular.length || !newGames.length || !upComing.length) {
        return <Spinner />
    }
    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {searched.length ?
                    <>
                        <h2 className={!toggle ? "toggle" : ""}>Searched Games</h2>
                        <Games>
                            {searched.map(game => {
                                return (<Game key={game.id} name={game.name} released={game.released} image={game.background_image} id={game.id} />)
                            })}
                        </Games>
                    </>
                    : ""}
                <h2 className={!toggle ? "toggle" : ""}>Upcoming Games</h2>
                <Games>
                    {upComing.map(game => {
                        return (<Game key={game.id} name={game.name} released={game.released} image={game.background_image} id={game.id} />)
                    })}
                </Games>
                <h2 className={!toggle ? "toggle" : ""}>Popularg Games</h2>
                <Games>
                    {popular.map(game => {
                        return (<Game key={game.id} name={game.name} released={game.released} image={game.background_image} id={game.id} />)
                    })}
                </Games>
                <h2 className={!toggle ? "toggle" : ""}>New Games</h2>
                <Games>
                    {newGames.map(game => {
                        return (<Game key={game.id} name={game.name} released={game.released} image={game.background_image} id={game.id} />)
                    })}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}

const GameList = styled(motion.div)`
  padding: 0 5rem;
  margin-bottom: 5rem ;
  h2{
      padding: 5rem 0;
  }
  .toggle{
  color: white;
  opacity: 0.8;
}
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;