const PaymentRefund = ({ paymentRef }) => {

  window.scroll(0, 0)

  return (
    <div className='container--main--info'>
      <h1>Оплата та повернення</h1>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet nibh praesent. Tellus integer feugiat scelerisque varius. Varius duis at consectetur lorem donec massa. Tellus orci ac auctor augue mauris augue. Potenti nullam ac tortor vitae purus faucibus ornare. Lectus quam id leo in vitae. Scelerisque felis imperdiet proin fermentum leo vel orci.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet nibh praesent. Tellus integer feugiat scelerisque varius. Varius duis at consectetur lorem donec massa. Tellus orci ac auctor augue mauris augue. Potenti nullam ac tortor vitae purus faucibus ornare. Lectus quam id leo in vitae. Scelerisque felis imperdiet proin fermentum leo vel orci.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ipsum suspendisse ultrices gravida dictum. Turpis egestas integer eget aliquet nibh praesent. Tellus integer feugiat scelerisque varius. Varius duis at consectetur lorem donec massa. Tellus orci ac auctor augue mauris augue. Potenti nullam ac tortor vitae purus faucibus ornare. Lectus quam id leo in vitae. Scelerisque felis imperdiet proin fermentum leo vel orci.

      </div>
      <h1 ref={paymentRef}>Методи оплати</h1>
      <div>
        <ul>
          <li>- Visa</li>
          <li>- Mastercard</li>
          <li>- Paypal</li>
        </ul>
      </div>
    </div>
  )
}

export default PaymentRefund