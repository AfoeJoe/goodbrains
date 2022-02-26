import {
  FaBook,
  FaChartPie,
  FaLightbulb,
  FaTicketAlt,
  FaUsers,
  FaUserTie
  } from 'react-icons/fa';

export const initialMenuData = [
  {
    title: 'Home',
    icon: <FaChartPie style={{ marginRight: '0.5rem' }} />,
  },
  {
    title: 'Play',
    icon: <FaTicketAlt style={{ marginRight: '0.5rem' }} />,
    active: true,
  },
  {
    title: 'Leaderboard',
    icon: <FaLightbulb style={{ marginRight: '0.5rem' }} />,
  },
  {
    title: 'Players',
    icon: <FaUsers style={{ marginRight: '0.5rem' }} />,
  },
  {
    title: 'Browse',
    icon: <FaUserTie style={{ marginRight: '0.5rem' }} />,
  },
];

export const items = [
  {
    title: (
      <>
        <FaUserTie style={{ marginRight: '0.5rem' }} />
        Home
      </>
    ),
    itemId: '#colors',
    subNav: [
      { title: 'Primary', itemId: '#primary' },
      {
        title: 'Shades',
        itemId: '#shades',
        subNav: [
          { title: 'Dark', itemId: '#dark' },
          {
            title: 'Disabled',
            itemId: '#disabled',
            disabled: true,
          },
        ],
      },
    ],
  },
];

export const tableTitles = ['Ticket details', 'Customer name', 'Date', 'Priority'];

export const data = [
  ['Contact Email not Linked', 'Tom Cruise', 'May 26, 2019', 'High'],
  ['Adding Images to Featured Posts', 'Matt Damon', 'May 26, 2019', 'low'],
  ['When will I be charged this month?', 'Robert Downey', 'May 26, 2019', 'High'],
  ['Payment not going through', 'Christian Bale', 'May 25, 2019', 'Normal'],
  ['Unable to add replies', 'Henry Cavil', 'May 26, 2019', 'High'],
];
