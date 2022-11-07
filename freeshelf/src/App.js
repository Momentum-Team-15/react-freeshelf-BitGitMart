import {useState} from 'react';
import './App.css';

const App = ({ books }) => {
  return (
    <section>
      {books.map((books) => (
        <div className="bookie-boxy">
          <div>
            <h2>{books.title}</h2>
            <h3>{books.author}</h3>
            <p>{books.shortDescription}</p>
            <img src={books.coverImageUrl} className="image" alt="cover image" /> 
            <XtraInfo
            url={books.url}
            publisher={books.publisher}
            date={books.publicationDate}
            details={books.detailedDescription} />
          </div>
        </div>
      ))
      }
    </section>
  );
}

const XtraInfo = ({url, publisher, date, details }) => {
  const [readMore, setreadMore] = useState(false)
  const handleClick = (event) => {setreadMore(!readMore)}
  return (
      <>
    <button onClick={handleClick} 
      type="button" aria-controls="det" aria-expanded={readMore ? "true" : "false"}>
      <strong>{readMore ? 'Hide' : 'Show'} More </strong></button>
    {readMore && 
    <div id="det" className="description-box">
    <strong>Link:</strong> <a href={url}>{url}</a>
    <p><strong>Full Description:</strong><br/>{details}</p>
    <p><strong>Publisher:</strong> {publisher ? <>{publisher}</> : "--"}  <br/><br/> 
    <strong>Publication Date:</strong> {date ? <>{date}</> : "--"}</p>
  </div> 
  }
  </> 
  )}; 

export default App;