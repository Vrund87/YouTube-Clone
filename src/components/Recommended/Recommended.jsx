import { useEffect, useState } from "react";
import "./recommended.css";
import { value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&type=video&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={index}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
