import './Stars.scss'
import { FC } from 'react'

interface StarsProps {
  hexColor: string
  averageRating: number
}

const STAR_COUNT = 5
const iterator = [...Array(STAR_COUNT)]

const Stars: FC<StarsProps> = ({ hexColor, averageRating }) => {
  const starRatingInPercent = (averageRating / STAR_COUNT) * 100
  const widthCssValue = `${starRatingInPercent - 2}px`

  return (
    <div className="stars">
      <ul className="stars__list --mask" style={{ width: widthCssValue }}>
        {iterator.map((_empty, starIndex) => (
          <li className="stars__star" key={starIndex}>
            <FilledStar hexColor={hexColor} />
          </li>
        ))}
      </ul>

      <ul className="stars__list">
        {iterator.map((_empty, starIndex) => (
          <li className="stars__star" key={starIndex}>
            <OutlinedStar hexColor={hexColor} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const FilledStar: FC<Omit<StarsProps, 'averageRating'>> = ({ hexColor }) => {
  return (
    <svg
      className="stars__star-glyph"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
    >
      <title>Star Icon</title>

      <path
        fill={hexColor}
        d="M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z"
      />
    </svg>
  )
}

const OutlinedStar: FC<Omit<StarsProps, 'averageRating'>> = ({ hexColor }) => {
  return (
    <svg
      className="stars__star-glyph"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      viewBox="0 0 16 15"
    >
      <title>Star Icon</title>

      <g fill="none" fillRule="evenodd">
        <path d="M0 0h16v16H0z"></path>
        <path
          fill={hexColor}
          d="M8.108.7l2.352 4.764 5.257.764-3.804 3.708.898 5.236L8.108 12.7l-4.702 2.472.898-5.236L.5 6.228l5.257-.764L8.108.7zm1.688 5.678L8.108 2.959 6.421 6.378l-3.773.548 2.73 2.66-.644 3.758 3.374-1.774 3.373 1.774-.643-3.757 2.73-2.661-3.772-.548z"
        />
        <path d="M9.796 6.378L8.108 2.959 6.421 6.378l-3.773.548 2.73 2.66-.644 3.758 3.374-1.774 3.373 1.774-.643-3.757 2.73-2.661z"></path>
      </g>
    </svg>
  )
}

export default Stars
