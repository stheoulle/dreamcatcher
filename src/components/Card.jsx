import classnames from "classnames";
import pokeball from "../../public/images/insomnia.png";
import "./card.scss";

import PropTypes from 'prop-types';

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={classnames("card", {
        "is-flipped": isFlipped,
        "is-inactive": isInactive
      })}
      onClick={handleClick}
    >
      <div className="card-face card-font-face mb-10">
        <img src={pokeball} alt="pokeball" />
      </div>
      <div className="card-face card-back-face mb-40">
        <img src={card.image} alt="pokeball" />
      </div>
    </div>
  );
};
Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    image: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isInactive: PropTypes.bool.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired
};

export default Card;