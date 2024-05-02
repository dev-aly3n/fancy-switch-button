import React, { useState } from "react"
import ReactDOM from "react-dom"
import { motion, MotionConfig } from "framer-motion"
import { useAnimatedText } from "./use-animated-text"
import "./styles.css"
import { Scene } from "./Canvas"
import { transition } from "./transition"

function App() {
  const [isOn, setOn] = useState(true)
  const headerRef = useAnimatedText(isOn ? 8 : 9, transition)

  return (
    <MotionConfig transition={transition}>
      <motion.div
        className="container"
        initial={false}
        animate={{
          backgroundColor: isOn ? "#c9ffed" : "#ff2558",
          color: isOn ? "#7fffd4" : "#c70f46"
        }}
      >
        <h1 className="open" children="<h1>" />
        <h1 className="close" children="</h1>" />
        <motion.h1 ref={headerRef} />
        <Scene isOn={isOn} setOn={setOn} />
      </motion.div>
    </MotionConfig>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
