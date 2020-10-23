import { keyframes } from '@emotion/core'
import Reveal from 'react-awesome-reveal'

type Direction = 'up' | 'down' | 'left' | 'right'
export interface SlideFadeProps extends React.ComponentProps<typeof Reveal> {
  direction?: Direction
  /** Defaults to 100% */
  distance?: string
}

const translateDirection = (
  direction: Direction,
  distance: string = '100%'
) => {
  switch (direction) {
    case 'up':
      return `translate3d(0, ${distance}, 0)`
    case 'down':
      return `translate3d(0, -${distance}, 0)`
    case 'left':
      return `translate3d(${distance}, 0, 0)`
    case 'right':
      return `translate3d(-${distance}, 0, 0)`
  }
}

const animation = (direction: Direction, distance: string) => keyframes`
  from {
    transform: ${translateDirection(direction, distance)};
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`

export const SlideFade: React.FC<SlideFadeProps> = ({
  direction,
  distance,
  ...props
}) => {
  return (
    <Reveal
      {...props}
      keyframes={animation(direction ?? 'left', distance ?? '100%')}
    />
  )
}
