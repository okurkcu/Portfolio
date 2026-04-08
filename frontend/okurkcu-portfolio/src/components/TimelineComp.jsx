import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import BilkentLogo from '../../public/bilkentLogo.png'
import englishCentralLogo from '../../public/engcentralLogo.png'
import optiyolLogo from '../../public/optiyolLogo.png'

const TimelineComp = () => {
  return (
    <Timeline position="alternate" className='text-gray-100'>
      <TimelineItem>
        <TimelineOppositeContent
          align="right"
          variant="body2"
          sx={{
            m: 'auto 0',
          }}
        >
          09 / 2019 - 06 / 2025
        </TimelineOppositeContent>
        <TimelineSeparator className='text-purple-600'>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='flex gap-3 items-center'>
            <img src={BilkentLogo} alt="" className='w-10 h-10' />
            <h1 className='text-[Syne] text-xl'>CTIS, Bilkent University - Student</h1>
          </Typography>
          <div className='mt-3'></div>
          <Typography className='text-justify text-gray-400'>I received a multidisciplinary education at Bilkent University, combining software development, data systems, and problem-solving with a strong focus on real-world applications.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          variant="body2"
          sx={{
            m: 'auto 0',
          }}
        >
          07 / 2022 - 08 / 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" >
            {/* <LaptopMacIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent className='items-end' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='flex gap-3 items-center justify-end'>
            English Central - Software Engineer Intern
            <img src={englishCentralLogo} alt="" className='w-10 h-10' />
          </Typography>
          <div className='mt-3'></div>
          <Typography className='text-justify text-gray-400'>Developed a Spotify clone using HTML, CSS, JavaScript, and AngularJS during my internship.
Integrated Spotify API to fetch and display real-time music data, including playlists and track details.
Built a responsive, user-friendly interface with core features like music playback and playlist
management, enhancing my skills in API integration and front-end development.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          variant="body2"
          sx={{
            m: 'auto 0',
          }}
        >
          07 / 2023 - 02 / 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" >
            {/* <HotelIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='flex gap-3 items-center'>
            <img src={optiyolLogo} alt="" className='w-10 h-10' />
            Optiyol - Software Engineer Intern & Part-Time
          </Typography>
          <div className='mt-3'></div>
          <Typography className='text-justify text-gray-400'>Front-end development using the React framework. Also writing unit tests automation in Javawith
Selenium.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          variant="body2"
          sx={{
            m: 'auto 0',
          }}
        >
          02 / 2024 - 06 / 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" >
            {/* <RepeatIcon /> */}
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='flex gap-3 items-center justify-end'>
            Optiyol - Software Engineer
            <img src={optiyolLogo} alt="" className='w-10 h-10' />
          </Typography>
          <div className='mb-3'></div>
          <Typography className='text-justify text-gray-400'>Completed website test automation using TestCafe and JavaScript. Worked on dashboard
data visualization with Django Admin and Python. Assisted with FrontEnd tasks with JavaScript and React, and
gained experience with Git, GitBash, and Jira.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineComp