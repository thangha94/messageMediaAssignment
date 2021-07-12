import { useRef, useState, useCallback, useEffect } from 'react';

import Gif from '../Gif/Gif';
import './App.scss';
import Loading from '../Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getGifDataSaga } from '../../redux/actions/gifData.action';

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [loading, setLoading] = useState(false);

  const gifData = useSelector(state => state.gifData.data ? state.gifData.data : []);
  const loadMore = useSelector(state => state.gifData.loadMore)
  const dispatch = useDispatch();

  const observer = useRef();

  // Observe the last element to load more item
  const lastGifElement = useCallback((node) => {
    if (loading) return;
    // Do not observe the changes of the previous IntersectionObserver 
    if (observer.current) observer.current.disconnect();
    // Set the ref by a new IntersectionObserver
    observer.current = new IntersectionObserver(entries => {
      // ensure that can load more
      if (entries[0].isIntersecting && loadMore) {
        setPageNumber(pre => pre + 1);
      }
    })
    // Add the element for observing
    if (node) observer.current.observe(node)
  }, [loading, loadMore])

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setLoading(true);
      dispatch(getGifDataSaga(pageNumber));
    }
    return () => mounted = false;
  }, [pageNumber])

  useEffect(() => {
    console.log(gifData);
    // close loading once received new gifData
    // the loading will last in 1s
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }, [JSON.stringify(gifData)])

  const getClassName = (index) => {
    if (index === selectedIndex) {
      return 'selected';
    }
    return '';
  }

  const closeFullScreen = (e) => {
    if (e.code === 'Escape' && selectedIndex !== false) {
      setSelectedIndex(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', closeFullScreen);
    return () => {
      document.removeEventListener('keydown', closeFullScreen);
    }
  }, [selectedIndex])

  return (
    <div data-testid="app" className="app">
      {gifData && gifData.map((item, index) => {
        if (gifData.length === index + 1) {
          // trigger function infinite scroll, load more data
          return <Gif
            onCloseFullScreen={() => setSelectedIndex(false)}
            onOpenFullScreen={() => { setSelectedIndex(index); }}
            gifClass={getClassName(index)}
            key={`gif_${index}`}
            refData={lastGifElement}
            data={item} />
        } else {
          // without function infinite scroll
          return <Gif
            onCloseFullScreen={() => setSelectedIndex(false)}
            onOpenFullScreen={() => setSelectedIndex(index)}
            gifClass={getClassName(index)}
            key={`gif_${index}`}
            data={item} />
        }
      })}
      <Loading loading={loading} />
    </div>
  );
}

export default App;
