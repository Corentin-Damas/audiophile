function ItemSlice() {
  return function ItemSlice({ data, number }) {
    console.log("working");
    return (
      <div>
        <h3>hello</h3>
        <img src={data.image.mobile} alt="" />
        <h3>{data.name}</h3>
        <h3>{number}</h3>
      </div>
    );
  };
}

export default ItemSlice;
