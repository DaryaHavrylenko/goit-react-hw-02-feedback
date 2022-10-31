import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<div>
        <div>Statistics</div>
     <div>
            <p>Good:<span>{good}</span></p>
            <p>Neutral:<span>{neutral}</span></p>
            <p>Bad:<span>{bad}</span></p>
            <p>Total:<span>{total}</span></p>
            <p>Positive Feedback:<span>{positivePercentage}%</span></p>
        </div>
    </div>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}