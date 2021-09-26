import Head from 'next/head'
import styles from './index.module.scss'
import { useState } from 'react'
const axios = require('axios').default;


import {motion, AnimatePresence} from 'framer-motion'

import { MediaSocialBox } from '../components/MediaSocialBox';

export default function Home() {

  var [data, setData] = useState(null)

  const handleClick = async () => {
    setData("loading")
    axios.get("https://serverless-function-kaenova.herokuapp.com/").then(res =>{
      console.log(res.data)
      setInterval(() => {
        setData(res.data.Data)
      }, 2000)
    }).catch(e => {
      setData("error")
    })
  }

  const apiMessage = () => {
    if (data == null){
      return <> </> 
    }else if (data == "error") {
      return (
        <>
        <p>Error while fetching</p>
        <p>Server Error</p>
        </>
      )
    } else if (data == "loading") {
      return (
        <div className={styles.skeleton}>
          <motion.div
            animate={{
              backgroundColor: ["#F5F5F5", "#fcfcfc"]
            }}
            transition={{
              duration: 1,
              repeat: "Infinity",
              repeatType: "reverse"
            }}
          >
          </motion.div>
          <motion.div
            animate={{
              backgroundColor: ["#F5F5F5", "#fcfcfc"]
            }}
            transition={{
              duration: 1,
              repeat: "Infinity",
              repeatType: "reverse"
            }}
          >
          </motion.div>
          <motion.div
            animate={{
              backgroundColor: ["#F5F5F5", "#fcfcfc"]
            }}
            transition={{
              duration: 1,
              repeat: "Infinity",
              repeatType: "reverse"
            }}
          >
          </motion.div>
          <motion.div
            animate={{
              backgroundColor: ["#F5F5F5", "#fcfcfc"]
            }}
            transition={{
              duration: 1,
              repeat: "Infinity",
              repeatType: "reverse"
            }}
          >
          </motion.div>
          <motion.div
            animate={{
              backgroundColor: ["#F5F5F5", "#fcfcfc"]
            }}
            transition={{
              duration: 1,
              repeat: "Infinity",
              repeatType: "reverse"
            }}
          >
          </motion.div>
        </div>
      )
    } else {
      return (
        <>
        <p>
          Success with data
        </p>
        <p>
          {data}
        </p>
        <p>
          You can check in the console log <br/> and the network tabs on developer tools
        </p>
        </>
      )
    }
  }



  return (
    <div className={styles.main_container}>
      <div>
        <h1>
          KMA
        </h1>
        <p>
          This is just an example of serverless website <br />
          with a serverless function
        </p>
        <p>
          See <a href="https://github.com/kaenova/serverless-arch">this project</a> on Github
        </p>
        <p className="text-sm mt-3">
          Follow Me!
        </p>
        <div>
        <MediaSocialBox icon="github" href="https://github.com/kaenova" />
        <MediaSocialBox icon="linkedin" href="https://www.linkedin.com/in/kaenova/" />
        <MediaSocialBox icon="twitter" href="https://twitter.com/i/events/1275477348419170317" />
        </div>
      </div>

      <motion.button type="button" onClick={handleClick}
        whileHover={{
          scale: 1.05
        }}
        whileTap={{
          scale: 0.95
        }}
      >
        Press this
      </motion.button>

      <AnimatePresence>
      { data != null &&
        <motion.div className={styles.result}
          initial={{
            opacity:0,
            y: "2em"
          }}
          animate={{
            opacity:1,
            y:0
          }}
          exit={{
            opacity:0,
            y: "2em"
          }}
          
        >
          {apiMessage()}
        </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}
