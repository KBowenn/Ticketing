const OrderIndex = ( orders ) => {
  console.log(orders)
  return (
    <ul>
      {Object.keys(orders).map(order => {
        return (
          <li>
            {order}
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");
  return { orders: data };
};

export default OrderIndex;
