import { FC } from 'react'
import Stars from '../Star'
import { Reviews } from '../Card'

interface StarReviewsProps {
  reviews: Reviews
}

const StarReviews: FC<StarReviewsProps> = ({ reviews }) => (
  <div className="reviews">
    <Stars hexColor="#ffb136" averageRating={reviews.averageRating} />
  </div>
)

export default StarReviews
