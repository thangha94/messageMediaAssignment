import { useEffect, useRef, useState, useCallback } from 'react';

import Gif from './components/Gift/Gif';
import './App.scss';
import { getImageList } from './apis/common.api';
import useGifSearch from './customHook/useGifSearch';
import Loading from './components/Loading/Loading';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const observer = useRef();

  let { gifData, loading, error, hasMore } = useGifSearch(pageNumber)
  const lastGifElement = useCallback((node) => {
    // Do not anything when loading
    if (loading) return;
    // Do not observe the changes of the previous IntersectionObserver 
    if (observer.current) observer.current.disconnect();
    // Set the ref by a new IntersectionObserver
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPageNumber(pre => pre + 1);
      }
    })
    // Add the element for observing
    if (node) observer.current.observe(node)
  }, [loading, hasMore])

  return (
    <div className="app">
      {gifData.map((item, index) => {
        if (gifData.length === index + 1) {
          return <Gif key={`gif_${index}`} refData={lastGifElement} url={item.url} user={item.user} data={item} />
        } else {
          return <Gif key={`gif_${index}`} refData={undefined} url={item.url} user={item.user} data={item} />
        }
      })}
      <Loading loading={loading} />
    </div>
  );
}

export default App;
