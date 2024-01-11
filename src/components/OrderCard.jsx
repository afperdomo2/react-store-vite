const OrderCard = ({ date, totalAmount, totalPrice }) => {
  return (
    <div className="flex items-center justify-between mb-3 border">
      <p>
        <span>{date}</span>
        <span>{totalAmount}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrderCard;
