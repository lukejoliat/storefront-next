import {
  Card,
  CardActions,
  CardBody,
  CardImage,
  CardTitle,
} from "@/components/card";

export const PlaceHolderCard = () => {
  return (
    <Card className="m-auto md:m-2 w-64">
      <CardImage>
        <div className="w-full h-[250px] rounded-lg bg-slate-800 animate-pulse"></div>
      </CardImage>
      <CardBody>
        <CardTitle>
          <div className="w-[200px] h-6 rounded-lg bg-slate-800 animate-pulse"></div>
        </CardTitle>
        <CardActions align="left">
          <div className="w-[200px] h-6 rounded-lg bg-slate-800 animate-pulse"></div>
        </CardActions>
      </CardBody>
    </Card>
  );
};
