import React from 'react';
import YoutubePlayer from 'react-youtube-player';

export default class Video extends React.Component {
    componentWillMount() {
    }
    render() {
        return (
          <div id = "ytVideo" >
            Video
            <YoutubePlayer
                videoId='k8ROjT2qbo0'
                playbackState='unstarted'
                configuration={
                    {
                        autoplay: 1,
                        showinfo: 0,
                        controls: 0
                    }
                }
            />
          </div>
        );
    }
    componentDidMount() {
    }
}
