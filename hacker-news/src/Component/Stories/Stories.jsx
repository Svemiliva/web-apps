import { getHackerIds } from "../../Services/idsService";
import { useEffect, useState } from "react";
import { calculateTime } from "../../Utilities/calculateTime";
import { getStoryUrl } from "../../Utilities/getStoryUrl";
import loadingImg from "./assets/loading.gif";
import "./Stories.css";



export const Stories = () => {

    const [top10Ids, setTop10Ids] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        getHackerIds()
            .then(myresponse => setTop10Ids(myresponse));
    }, [])


    useEffect(() => {
        const promises = [];
        top10Ids.forEach(uniqueId => {
            promises.push(fetch(`https://hacker-news.firebaseio.com/v0/item/${uniqueId}.json?print=pretty`).then(res => res.json()))
        })
        Promise.all(promises).then(listOfStories => setStories(listOfStories))

    }, [top10Ids])



    if (stories.length < 1) {
        return (
            <>
                <div className="loadingDiv">
                    <img className="loadingImg" src={loadingImg} alt="Loading" />
                    <div className="loadingText">
                        This page is loading...
                    </div>
                </div>
            </>
        )
    } else
        return (
            <div className='main'>
                <ol>
                    {
                        stories.map((story, index) => {
                            return (
                                <>
                                    <li key={index}>
                                        <div className='onenews'>
                                            <p className='firstrow'>
                                                <a href={story.url} className='storyTitle'><span className='title'>{story.title}</span></a>
                                                &nbsp;
                                                <a href={story.url} className='url'>{`[${getStoryUrl(story.url)}]`} </a>
                                            </p>

                                            <p>
                                                <span className='points'><i className="fas fa-heart"></i>{` `}{story.score} points</span> <span className='author'><i className="fal fa-user"></i>{` `}{story.by}</span> <span className='time'><i className="far fa-clock"></i>{calculateTime(`${story.time}`)}</span>
                                                <span className='comments'>{` ${story.descendants} comments`}</span>
                                            </p>
                                        </div>
                                    </li>
                                    <hr />
                                </>
                            )
                        })
                    }
                </ol>

            </div>


        )

}