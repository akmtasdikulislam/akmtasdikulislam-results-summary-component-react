/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const SummaryTopic = (props) => {
  const { category, icon, score } = props.data;
  return (
    <>
      <div className="summary_topic" id={category.toLowerCase()}>
        <div>
          <img src={`${icon}`} alt={category} />
          <p>{category}</p>
        </div>
        <p className="summary_score">
          <span>{score}</span> / 100
        </p>
      </div>
    </>
  );
};

export default SummaryTopic;
