type BookmarkIconProps = {
  width?: string;
  height?: string;
};

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width ? width : "24"}
      height={height ? height : "24"}
      viewBox="0 0 24 24"
    >
      <path d="M17,4v14.967l-4.212-1.805L12,16.824l-0.788,0.338L7,18.967V4H17 M17,2H7C5.9,2,5,2.9,5,4v18l7-3l7,3V4C19,2.9,18.1,2,17,2 L17,2z"></path>
    </svg>
  );
};

export default BookmarkIcon;