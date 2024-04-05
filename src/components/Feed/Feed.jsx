import { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { value_converter } from "../../data";
import { user_profile } from "../../assets";
import moment from "moment";

const Feed = ({ category }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            key={index}
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="card-info">
              <img src={user_profile} alt="" />
              <div>
                <h2>{item.snippet.title.slice(0, 50)}</h2>
                <h3>{item.snippet.channelTitle.slice(0, 30)}</h3>
                <p>
                  {value_converter(item.statistics.viewCount)} views &bull;{" "}
                  {moment(item.snippet.publishedAt).fromNow()}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
