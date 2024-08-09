import Card from "./Card";
import "./Payment.css";
const Payment = () => {
  return (
    <div className="paytop">
      <h1>Payments</h1>
      <div className="paybottom">
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Payment;
