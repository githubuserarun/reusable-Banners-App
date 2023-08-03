import './index.css'

const BannerProfile = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button type="button">Show more</button>
    </li>
  )
}
export default BannerProfile
