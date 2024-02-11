'use client'
import React from 'react';

function CodeSnippet({ children }) {
  
  const [
    isRevealed,
    setIsRevealed,
  ] = React.useState(false);

  return isRevealed ? (
        children
      ) : (
        <div className="reveal">
          <button
            onClick={() =>
              setIsRevealed(true)
            }
          >
            Reveal Content
          </button>
        </div>
      );
}

export default CodeSnippet;
