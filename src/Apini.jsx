import { useEffect, useState } from 'react';
import axios from 'axios';

function Apini() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const response = await axios("https://resident.kg/api/ru/header");
        setArticles(response.data); 
      } catch (err) {
        setError("Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);


  if (loading) return <p>Загрузка... </p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {articles.map((el) => (
        <div key={el.id}>
          <h2>{el.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Apini;