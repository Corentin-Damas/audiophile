import { useState } from "react";

function ItemResume({ id, data, number }) {
  const [item, setItem] = useState(Number(number));

  function handleSub() {
    if (item > 0) {
      setItem(item - 1);
    }
  }
  function handleAdd() {
    setItem(item + 1);
  }
  localStorage.setItem(id, item);
  

  return (
    <div className="resume__row">
      <div className="resume__row-detail">
        <img className="resume__row-img" src={data.image.mobile} alt="" />
        <div>
          <h6>
            {data.name
              .replace("Headphones", "")
              .replace("Speaker", "")
              .replace("Wireless", "")
              .replace("Earphones", "")}
          </h6>
          <h6 className="u-dark-grey">$ {data.price}</h6>
        </div>
      </div>
      <div className="resume__row-btn">
        <div className="cta__calculator">
          <button className="btn-math" onClick={handleSub}>
            -
          </button>
          <p className="result u-bold">{item}</p>

          <button className="btn-math" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemResume;
