export default function CircleElements() {
  const svgPath = (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M144.892 50.741C129.918 15.6695 81.5577 3.31786 46.4862 18.292C11.4147 33.2662 -0.351254 71.2895 14.6229 106.361C29.5971 141.432 70.1671 157.725 105.239 142.75C140.31 127.776 159.866 85.8125 144.892 50.741ZM148.156 49.3473C131.643 10.6704 89.9563 -10.1572 51.2793 6.35641C12.6023 22.87 -10.8982 69.1839 5.61534 107.861C22.1289 146.538 63.5175 170.212 102.195 153.698C140.871 137.184 164.67 88.0243 148.156 49.3473Z"
    />
  );

  return (
    <div className="circle-elements">
      <div className="one">
        <svg width="154" height="160" viewBox="0 0 154 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {svgPath}
        </svg>
        <svg width="154" height="160" viewBox="0 0 154 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {svgPath}
        </svg>
      </div>
      <div className="two">
        <svg width="154" height="160" viewBox="0 0 154 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {svgPath}
        </svg>
        <svg width="154" height="160" viewBox="0 0 154 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {svgPath}
        </svg>
      </div>
    </div>
  );
}
