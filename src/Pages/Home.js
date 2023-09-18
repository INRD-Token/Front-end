//import Spin from 'react-reveal/Spin';
import React, { useState, useEffect } from 'react'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import LandingPageHeader from "../Components/LandingPageHeader";
import LandingPagePhases from "../Components/LandingPagePhases";
import styles from'./../styles.module.css'

const pages= [
  ({ style }) => <animated.div style={style}>
    <LandingPageHeader/>
  </animated.div>,
  ({ style }) => <animated.div style={style}>
    <LandingPagePhases/>
    </animated.div>,
]


export default function Home() {
  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % 2)
  const transRef = useSpringRef()
  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  useEffect(() => {
    transRef.start()
  }, [index])
  return (
    <div className={`flex fill ${styles.container}`} onClick={onClick}>
      {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })}
    </div>
  )
}
