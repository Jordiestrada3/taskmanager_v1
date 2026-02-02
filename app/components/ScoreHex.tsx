import React from "react";

type ScoreHexProps = {
  score: number;
  hexColor: string;
};

export default function ScoreHex({ score, hexColor }: ScoreHexProps) {
  return (
    <div className="score-hex">
      <svg
        className="hexagon-svg"
        viewBox="0 0 60 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.22136 23.7525C0.422412 25.071 0 26.5833 0 28.125C0 29.6667 0.422412 31.179 1.22136 32.4975L13.1539 52.185C13.9056 53.4256 14.9645 54.4515 16.2283 55.1636C17.4922 55.8756 18.9182 56.2498 20.3689 56.25H39.5989C41.0495 56.2498 42.4755 55.8756 43.7394 55.1636C45.0032 54.4515 46.0621 53.4256 46.8139 52.185L58.7464 32.4975C59.5453 31.179 59.9677 29.6667 59.9677 28.125C59.9677 26.5833 59.5453 25.071 58.7464 23.7525L46.8139 4.065C46.0621 2.82436 45.0032 1.7985 43.7394 1.08644C42.4755 0.374386 41.0495 0.000195687 39.5989 0H20.3689C18.9182 0.000195687 17.4922 0.374386 16.2283 1.08644C14.9645 1.7985 13.9056 2.82436 13.1539 4.065L1.22136 23.7525Z"
          fill={hexColor}
        />
      </svg>
      <p className="hexagon-text">{score}</p>
      {/* <img src={'hexagon.svg'} style={{fill:'#616161', width:'100px', height:'100px'}} /> */}
    </div>
  );
}
