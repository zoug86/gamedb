import React, { useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';


const Loader = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  /* background: #18315B; */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Spinner = () => {
    const [isLoading, setIsLoading] = useState(true)

    const loading = () => {
        setIsLoading(!isLoading)
    }
    return (
        <Loader>
            {/* CLICK ME!!! */}
            <h2 onClick={loading}> Loading</h2>
            {isLoading && (
                <>
                    <motion.div
                        animate={{
                            rotate: 360,
                            borderRadius: ["50% 50%", "2% 50%"],
                            x: 75
                        }}
                        initial={{
                            x: -75
                        }}
                        transition={{
                            flip: Infinity,
                            duration: 2,
                            ease: "easeInOut",
                        }}
                        style={{
                            height: "50px",
                            background: "#E81B63",
                            width: "50px",
                            borderRadius: "2% 50%",
                        }}
                    >
                    </motion.div>
                </>
            )}
        </Loader>
    )
}

export default Spinner;