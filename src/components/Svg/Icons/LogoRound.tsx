import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={177}
      height={34}
      viewBox="0 0 177 34"
      {...props}>
      <g fill="none" fillRule="evenodd">
        <image
          width={140}
          height={27}
          y={3}
          xlinkHref="data:image/png;base64,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"
        />
        <text
          fill="#E02020"
          fontFamily="Verdana-Bold, Verdana"
          fontSize={12}
          fontWeight="bold">
          <tspan x={144} y={29}>
            {'beta'}
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default Icon
