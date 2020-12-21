import React, { useState } from "react"
import Img from "gatsby-image"


const Video = ({ vp9, h264, screenshots }) => {
    let sources = []
    if (vp9 != null) {
        sources.push({
            src: vp9.path,
            type: "video/" + vp9.ext.slice(1)
        })
    }
    if (h264 != null) {
        sources.push({
            src: h264.path,
            type: "video/" + h264.ext.slice(1)
        })
    }
    if (sources === []) {
        throw new Error("Please pass in at least one of vp9 or h264.")
    }

    const [loaded, setLoaded] = useState(false)

    return (
        <div className="has-text-centered">
            {!loaded && <Img fluid={ screenshots[0].childImageSharp.fluid } />}
            <video height={!loaded && 0} width={!loaded && 0} controls autoPlay loop muted playsInline onLoadedData={() => setLoaded(true)}>
                {sources.map(({src, type}, index) => (
                    <source key={index} src={src} type={type} />
                ))}
            </video>
        </div>
    )
}

export default Video;