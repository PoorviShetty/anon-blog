import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch'

const Post = () => {
  let { slug } = useParams();
  const { data, error } = useFetch(
    process.env.REACT_APP_BACKEND_URL + 'post/' + slug
  );

  if (error) console.log(error);

  return (
    <article className="article">
      <div className="container">
        <div className="post-wrapper">

          <h1>{data && data.title}</h1>
          <h6>{data && data.date}</h6>
          <img src={data && data.img} className='blog-img pb-3' alt="blog img"/>
          <br/>
          {data && <div dangerouslySetInnerHTML={{__html: `<strong>${data.text}</strong>`}} />}
        </div>
      </div>
    </article>
  )
}

export default Post