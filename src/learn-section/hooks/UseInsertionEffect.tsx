import React, { useInsertionEffect, useState } from 'react';
import { css, CacheProvider, Global, keyframes } from '@emotion/react';
import createCache from '@emotion/cache';

// Создаем кеш Emotion
const cache = createCache({ key: 'my-cache' });

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const useStyles = () => {
    useInsertionEffect(() => {
        // Вставляем критические стили синхронно перед первым рендером
        const style = document.createElement('style');
        style.textContent = `
      .fade-in {
        animation: ${fadeIn} 2s ease-in-out;
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);
};

const MyComponent: React.FC = () => {
    useStyles();
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="grid-item">
            <p>UseInsertionEffect</p>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle Visibility
            </button>
            {isVisible && (
                <div className="fade-in">
                    This is a fading in element!
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => (
    <CacheProvider value={cache}>
        <Global
            styles={css`
        body {
          margin: 0;
          font-family: sans-serif;
        }
      `}
        />
        <MyComponent />
    </CacheProvider>
);

export default App;
