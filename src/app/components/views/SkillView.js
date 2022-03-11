import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { Container, Flex } from '@chakra-ui/react'

import OSkillSection from '../organisms/oSkillSection';

const SkillView = ({ id, fadeIn }) => {

    const {ref, inView} = useInView({ threshold: 0.1 })
    const animation = useAnimation()

    useEffect(() => {
        fadeIn(animation, inView)
    }, [fadeIn, animation, inView])

    return (
        <div id={id}>
            <motion.div animate={animation}>
                <Container maxW="container.xl" p={0} ref={ref}>
                    <Flex height={{ base: 'auto', lg: '100vh' }} align={'center'}>
                        <OSkillSection 
                            fadeIn={fadeIn}
                        />
                    </Flex>
                </Container>
            </motion.div>
        </div>
    )
}

export default SkillView
