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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 213.333 213.333">
        <path
          d="M203.636 101.818h-38.788c-5.355 0-9.697 4.342-9.697 9.697s4.342 9.697 9.697 9.697h38.788c5.355 0 9.697-4.342 9.697-9.697s-4.341-9.697-9.697-9.697z"
          fill="#2d50a7"
        />
        <path
          d="M48.485 101.818H9.697c-5.355 0-9.697 4.342-9.697 9.697s4.342 9.697 9.697 9.697h38.788c5.355 0 9.697-4.342 9.697-9.697s-4.342-9.697-9.697-9.697z"
          fill="#73a1fb"
        />
        <path
          d="M168.378 36.09L140.95 63.518c-3.787 3.786-3.787 9.926 0 13.713a9.664 9.664 0 006.856 2.841 9.66 9.66 0 006.857-2.841l27.428-27.428c3.787-3.786 3.787-9.926 0-13.713-3.786-3.787-9.926-3.787-13.713 0z"
          fill="#355ec9"
        />
        <g fill="#c4d9fd">
          <path d="M106.667 169.697c-5.355 0-9.697 4.342-9.697 9.697v19.394c0 5.355 4.342 9.697 9.697 9.697 5.355 0 9.697-4.342 9.697-9.697v-19.394c0-5.355-4.342-9.697-9.697-9.697zM58.669 145.799l-27.427 27.428a9.696 9.696 0 000 13.713 9.667 9.667 0 006.857 2.84 9.663 9.663 0 006.856-2.84l27.427-27.428a9.696 9.696 0 000-13.713c-3.786-3.787-9.926-3.787-13.713 0z" />
        </g>
        <path
          d="M106.667 4.848c-5.355 0-9.697 4.342-9.697 9.697v38.788c0 5.355 4.342 9.697 9.697 9.697 5.355 0 9.697-4.342 9.697-9.697V14.545c0-5.355-4.342-9.697-9.697-9.697z"
          fill="#3d6deb"
        />
        <path
          d="M44.956 36.09c-3.786-3.787-9.926-3.787-13.713 0a9.696 9.696 0 000 13.713L58.67 77.231a9.664 9.664 0 006.857 2.841 9.662 9.662 0 006.856-2.841c3.787-3.786 3.787-9.926 0-13.713L44.956 36.09z"
          fill="#5286fa"
        />
      </svg>
    </Container>
  )
}

export default Spinner
