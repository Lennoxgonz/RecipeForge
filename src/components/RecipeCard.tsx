import { JSX } from "react";
import { Card } from "react-bootstrap";

interface RecipeCardProps {
  title: string;
  imageURL: string;
}

function RecipeCard({ title, imageURL }: RecipeCardProps): JSX.Element {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeCard;
