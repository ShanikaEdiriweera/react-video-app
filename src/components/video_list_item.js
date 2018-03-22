import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video // no need when video is passes in args object 
    const imageUrl = video.snippet.thumbnails.default.url
    const title = video.snippet.title
    return(
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{title}</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem
