import React from 'react';
import DashBoard from '../~reuseables/molecules/DashBooard';
import 'react-vis/dist/style.css';
import { XYPlot, LineSeries, MarkSeries, FlexibleXYPlot } from 'react-vis';

const GameArea = () => {
  const data = [
    {
      id: 1,
      x: 0,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 40,
      s_to: 0,
      e_to: 2,
      w_to: 0
    },
    {
      id: 2,
      x: 1,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 39,
      s_to: 0,
      e_to: 3,
      w_to: 1
    },
    {
      id: 3,
      x: 2,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 38,
      s_to: 0,
      e_to: 4,
      w_to: 2
    },
    {
      id: 4,
      x: 3,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 5,
      w_to: 3
    },
    {
      id: 5,
      x: 4,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 6,
      w_to: 4
    },
    {
      id: 6,
      x: 5,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 7,
      w_to: 5
    },
    {
      id: 7,
      x: 6,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 8,
      w_to: 6
    },
    {
      id: 8,
      x: 7,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 33,
      s_to: 0,
      e_to: 9,
      w_to: 7
    },
    {
      id: 9,
      x: 8,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 32,
      s_to: 0,
      e_to: 10,
      w_to: 8
    },
    {
      id: 10,
      x: 9,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 11,
      w_to: 9
    },
    {
      id: 11,
      x: 10,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 12,
      w_to: 10
    },
    {
      id: 12,
      x: 11,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 29,
      s_to: 0,
      e_to: 13,
      w_to: 11
    },
    {
      id: 13,
      x: 12,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 14,
      w_to: 12
    },
    {
      id: 14,
      x: 13,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 15,
      w_to: 13
    },
    {
      id: 15,
      x: 14,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 26,
      s_to: 0,
      e_to: 16,
      w_to: 14
    },
    {
      id: 16,
      x: 15,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 17,
      w_to: 15
    },
    {
      id: 17,
      x: 16,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 18,
      w_to: 16
    },
    {
      id: 18,
      x: 17,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 19,
      w_to: 17
    },
    {
      id: 19,
      x: 18,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 20,
      w_to: 18
    },
    {
      id: 20,
      x: 19,
      y: 0,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 0,
      w_to: 19
    },
    {
      id: 21,
      x: 19,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 0,
      w_to: 22
    },
    {
      id: 22,
      x: 18,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 59,
      s_to: 0,
      e_to: 21,
      w_to: 23
    },
    {
      id: 23,
      x: 17,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 58,
      s_to: 0,
      e_to: 22,
      w_to: 24
    },
    {
      id: 24,
      x: 16,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 23,
      w_to: 25
    },
    {
      id: 25,
      x: 15,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 24,
      w_to: 26
    },
    {
      id: 26,
      x: 14,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 15,
      e_to: 25,
      w_to: 27
    },
    {
      id: 27,
      x: 13,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 26,
      w_to: 28
    },
    {
      id: 28,
      x: 12,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 27,
      w_to: 29
    },
    {
      id: 29,
      x: 11,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 12,
      e_to: 28,
      w_to: 30
    },
    {
      id: 30,
      x: 10,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 51,
      s_to: 0,
      e_to: 29,
      w_to: 31
    },
    {
      id: 31,
      x: 9,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 50,
      s_to: 0,
      e_to: 30,
      w_to: 32
    },
    {
      id: 32,
      x: 8,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 9,
      e_to: 31,
      w_to: 33
    },
    {
      id: 33,
      x: 7,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 48,
      s_to: 8,
      e_to: 32,
      w_to: 34
    },
    {
      id: 34,
      x: 6,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 47,
      s_to: 0,
      e_to: 33,
      w_to: 35
    },
    {
      id: 35,
      x: 5,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 34,
      w_to: 36
    },
    {
      id: 36,
      x: 4,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 45,
      s_to: 0,
      e_to: 35,
      w_to: 37
    },
    {
      id: 37,
      x: 3,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 44,
      s_to: 0,
      e_to: 36,
      w_to: 38
    },
    {
      id: 38,
      x: 2,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 3,
      e_to: 37,
      w_to: 39
    },
    {
      id: 39,
      x: 1,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 2,
      e_to: 38,
      w_to: 40
    },
    {
      id: 40,
      x: 0,
      y: 1,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 1,
      e_to: 39,
      w_to: 0
    },
    {
      id: 41,
      x: 0,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 80,
      s_to: 0,
      e_to: 42,
      w_to: 0
    },
    {
      id: 42,
      x: 1,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 43,
      w_to: 41
    },
    {
      id: 43,
      x: 2,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 44,
      w_to: 42
    },
    {
      id: 44,
      x: 3,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 77,
      s_to: 37,
      e_to: 45,
      w_to: 43
    },
    {
      id: 45,
      x: 4,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 36,
      e_to: 46,
      w_to: 44
    },
    {
      id: 46,
      x: 5,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 47,
      w_to: 45
    },
    {
      id: 47,
      x: 6,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 74,
      s_to: 34,
      e_to: 48,
      w_to: 46
    },
    {
      id: 48,
      x: 7,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 73,
      s_to: 33,
      e_to: 49,
      w_to: 47
    },
    {
      id: 49,
      x: 8,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 0,
      e_to: 50,
      w_to: 48
    },
    {
      id: 50,
      x: 9,
      y: 2,
      title: 'A Generic Room',
      description: 'This is a generic room.',
      n_to: 0,
      s_to: 31,
      e_to: 51,
      w_to: 49
    }
  ];

  const coordinates = [];
  const links = [];

  // Loop through each room in the room_data object
  for (let room in data) {
    // Set data equal to the first element (x, y coordinates)
    // in each room of the room_data object
    let dat = data[room];
    coordinates.push(dat);
    for (let adjacentRoom in data[room]) {
        console.log('aa')
      links.push([data[room], data[room][adjacentRoom][0]]);
    }
  }
  console.log(links);
  console.log(coordinates);
  return (
    <FlexibleXYPlot width={600} height={600}>
        {/* {links.map(link => (
            <LineSeries
              strokeWidth="2"
              color="#FF0"
              data={[link]}
              key={Math.random() * 100}
            />
          ))} */}
      {/* <LineSeries
        strokeWidth="2"
        color="#FF0"
        data={[{ x: 1, y: 2 }]}
        key={Math.random() * 100}
      /> */}
      {/* <XYPlot width={300} height={300}> */}
      <MarkSeries
        className="mark-series-example"
        sizeRange={[5, 15]}
        data={data}
      />
      {/* </XYPlot> */}
    </FlexibleXYPlot>
  );

  return <DashBoard></DashBoard>;
};

export default GameArea;
