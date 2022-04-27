import React, { useEffect, useState } from 'react';
import '../CardListStyles.css';
import { getNews } from '../../Services/newsService';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getLastNews();
  }, []);

  async function getLastNews() {
    const { data } = await getNews();
    setNews(data);
  }

  return (
    <div>
      <ul className="list-container">
        {news.length > 0 ? (
          news.map((element) => {
            return (
              <li
                className="card"
                key={element.id}
                style={{
                  background: `url(${element.image}`,
                  width: '700px',
                  height: '300px',
                  color: 'white',
                }}
              >
                <h2
                  style={{
                    color: '#DB5752',
                    fontWeight: 'bold',
                    textShadow: '1px 1px 3px black',
                    marginTop: '0.5em',
                  }}
                >
                  {element.name}
                </h2>
                <div
                  style={{
                    color: 'black',
                    background: 'rgba(211, 211, 211, 0.6)',
                  }}
                  dangerouslySetInnerHTML={{ __html: element.content }}
                ></div>
              </li>
            );
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  );
};

export default NewsList;
