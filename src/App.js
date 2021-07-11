import { useEffect, useRef, useState, useCallback } from 'react';

import Gif from './components/Gift/Gif';
import './App.scss';
import { getImageList } from './apis/common.api';
import useGifSearch from './customHook/useGifSearch';
import Loading from './components/Loading/Loading';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const observer = useRef();

  let { gifData, loading, error, hasMore } = useGifSearch(pageNumber)

  // Observe the last element to load more item
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

  const getClassName = (index) => {
    if (index === selectedIndex) {
      return 'selected';
    }
    return '';
  }

  return (
    <div className={`app ${selectedIndex && 'full-image'}`}>
      {gifData.map((item, index) => {
        if (gifData.length === index + 1) {
          return <Gif closeImage={() => setSelectedIndex(false)} onClick={() => { setSelectedIndex(index); console.log('clicked') }} gifClass={getClassName(index)} key={`gif_${index}`} refData={lastGifElement} data={item} />
        } else {
          return <Gif closeImage={() => setSelectedIndex(false)} onClick={() => { setSelectedIndex(index); console.log('clicked') }} gifClass={getClassName(index)} key={`gif_${index}`} data={item} />
        }
      })}
      <Loading loading={loading} />
    </div>
  );
}

export default App;
