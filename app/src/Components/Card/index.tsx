import { FC } from 'react'
import StarReviews from '../StarReviews'
import checkMark from '../../_assets/check-mark.svg'

import './Card.scss'

export interface CardInfo {
  id: string
  rate: number
  apr: number
  logo: string
  name: string
  license: string
  stateLicense: string
  reviews: Reviews
}

export interface Reviews {
  averageRating: number
  count: number
}

interface Props {
  info: CardInfo
  handleCheckClick: (info: CardInfo) => void
  checkDisabled?: boolean
  checked?: boolean
}

const Card: FC<Props> = ({
  info,
  handleCheckClick,
  checkDisabled = false,
  checked = false,
}) => {
  const handleCheckboxClick = () => {
    if (!checkDisabled) {
      handleCheckClick(info)
    }
  }

  const handleKeyPress = (event): void => {
    if (!checkDisabled && ['Enter', ' '].includes(event.key)) {
      handleCheckClick(info)
    }
  }

  return (
    <section
      className={`rate-card-br-branded ${checked ? '--checked' : ''
        }`}
      onClick={handleCheckboxClick}
      onKeyUp={handleKeyPress}
    >
      <div className="rate-card-br-branded__top-container">
        <div className="rate-card-br-branded__offer-info">
          {info?.logo ? (
            <div className="rate-card-br-branded__logo-container">
              <img
                src={info?.logo}
                alt={`${info?.name} logo`}
                className="rate-card-br-branded__lender-logo"
              />
            </div>
          ) : (
            <h3>{info?.name}</h3>
          )}
          <div className="rate-card-br-branded__offer-details">
            <div className="rate-card-br-branded__license-container">
              <div className="rate-card-br-branded__licenses">
                NMLS #{info?.license}
              </div>
              {info?.stateLicense ? (
                <div className="rate-card-br-branded__licenses">
                  State Lic {info?.stateLicense}
                </div>
              ) : null}
            </div>

            {info?.reviews ? (
              <>
                <div className="rate-card-br-branded__rating-row">
                  <div className="rate-card-br-branded__star-container">
                    <StarReviews reviews={info?.reviews} />
                  </div>

                  <p className="rate-card-br-branded__rating">
                    <b>{info?.reviews?.averageRating ?? 0}</b>(
                    {info?.reviews?.count ?? 0})
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>

        <div className="rate-card-br-branded__checkbox-container">
          <div
            className={`rate-card-br-branded__checkbox ${checked ? '--checked' : ''
              } ${checkDisabled ? '--disabled' : ''}`}
          >
            <div
              className="rate-card-br-branded__checkbox__checkbox"
              tabIndex={0}
              role="checkbox"
              aria-checked={checked}
            >
              <img
                className="rate-card-br-branded__checkbox__check-mark"
                src={checkMark}
                alt="Check mark icon"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
