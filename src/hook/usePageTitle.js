import { useEffect, useRef } from 'react';

const titleFrases = {
  working: 'Work',
  smallBreak: 'Small Break',
  bigBreak: 'Big Break',
  stopped: 'Stopped',
};

const pageTitle = document.querySelector('title');
const pageBody = document.querySelector('body');

function usePageTitle(time, mode) {
  const titleText = useRef();
  const { minutes, seconds } = time;

  useEffect(() => {
    titleText.current = pageTitle.textContent;
  }, []);

  useEffect(() => {
    if (mode === 'stopped') {
      pageTitle.textContent = titleText.current;
      return;
    }
    
    pageTitle.textContent = `${titleFrases[mode]} - ${minutes}:${seconds}`;
  }, [minutes, mode, seconds]);

  if (mode === 'stopped' || mode === 'working') {
    pageBody.style.background = 
    'linear-gradient(90deg, #F78CA0 0%, #F9748F' +
     ' 20.31%, #FD868C 66.67%, #FE9A8B 100%), #FFFFFF';
  } else if (mode === 'bigBreak' || mode === 'smallBreak') {
    pageBody.style.background = 
    'linear-gradient(180deg, #48C6EF 0%, #6F86D6 100%)';
    // alert('hello');
  }
}

export default usePageTitle;
