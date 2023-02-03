import Countdown from 'react-countdown'

export const CallAction = ({ time }) => {
  return (
    <>
      <p
        style={{
          color: 'white',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          fontSize: '2rem'
        }}
      >
        <span className={'title'}>El tiempo se agota</span>
        <Countdown
          date={Date.now() + time}
          intervalDelay={0}
          autoStart={true}
          precision={3}
        />
      </p>
    </>
  )
}
