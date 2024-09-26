import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants/index"

const CustomerReviews = () => {
  return (
    <section className="Max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our
        <span className="text-coral-red"> Customers</span> Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptional 
        experience with us.
      </p>
      <div className="flex flex-1 mt-24 justify-evenly item-center 
      max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
