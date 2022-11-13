

const Card = ({ item }) => {
  return (
    <figure className="card">
      <p>{item.name}</p>
      <p>{item.user}</p>
      <p>{item.email}</p>
      <p>{item.movil}</p>
    </figure>
  );
};

export default Card;