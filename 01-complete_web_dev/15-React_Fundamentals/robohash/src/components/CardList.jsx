import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((_, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
};

export default CardList;
