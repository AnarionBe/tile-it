import React from 'react'

/**
 * Displaying module in a grid according to the config
 */

export const Home = ({layout}) => {
  const generateLayout = () => {
    return layout.map((e, i) => {
      const style = {
        gridColumnStart: e.origin[0],
        gridColumnEnd: `span ${e.size[0]}`,
        gridRowStart: e.origin[1],
        gridRowEnd: `span ${e.size[1]}`,
        border: '1px black solid'
      };

      return (<div style={style} key={i}>{e.name + i}</div>);
    });
  }

  return (
    <div className="home">
      {generateLayout()}
    </div>
  );
}