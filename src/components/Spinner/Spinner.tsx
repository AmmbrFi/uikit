import styled, { keyframes } from 'styled-components'

import PanIcon from './PanIcon'
import PancakeIcon from './PancakeIcon'
import React from 'react'
import { SpinnerProps } from './types'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`

const Container = styled.div`
  position: relative;
`

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.965 48.965">
        <path
          d="M24.157 42.474l-1.921-2.825a1.11 1.11 0 01.302-1.556 1.105 1.105 0 011.54.302l3.095 4.555c.317.413.302 1-.048 1.413l-3.651 4.222a1.122 1.122 0 01-1.571.111 1.143 1.143 0 01-.111-1.587l2.095-2.413a18.216 18.216 0 01-2.079-.175 18.837 18.837 0 01-3.286-.73A20.085 20.085 0 016.65 33.918a20.094 20.094 0 01-1.413-15.381 20.23 20.23 0 015.158-8.46 20.187 20.187 0 018.603-4.968 1.12 1.12 0 011.381.762 1.103 1.103 0 01-.778 1.381 18.168 18.168 0 00-7.635 4.428 17.59 17.59 0 00-4.587 7.508A17.922 17.922 0 008.617 32.87a17.944 17.944 0 0010.555 8.793c.984.302 1.968.508 2.936.651.684.096 1.366.144 2.049.16zm5.809 1.381c-.587.175-1.206-.175-1.381-.778a1.13 1.13 0 01.778-1.381 17.894 17.894 0 007.65-4.428 17.95 17.95 0 004.587-7.492 18.036 18.036 0 00-1.254-13.698C38.204 12.014 34.521 8.76 29.792 7.3a17.675 17.675 0 00-2.936-.651 17.879 17.879 0 00-2.032-.159l1.905 2.825a1.1 1.1 0 01-.286 1.54 1.12 1.12 0 01-1.555-.286l-3.095-4.571c-.317-.413-.302-1 .048-1.397L25.49.38a1.123 1.123 0 011.571-.111c.46.397.524 1.111.111 1.571l-2.095 2.413c.698.032 1.381.079 2.079.175 1.095.159 2.19.397 3.286.73a20.118 20.118 0 0111.872 9.889 20.094 20.094 0 011.413 15.381 20.173 20.173 0 01-5.158 8.444 20.394 20.394 0 01-8.603 4.983z"
          fill="#bf4126"
        />
      </svg>
    </Container>
  )
}

export default Spinner
