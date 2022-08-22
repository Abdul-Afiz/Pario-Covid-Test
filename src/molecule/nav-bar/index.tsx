import Button from "../../atoms/bottom";
import "./nav-style.scss";

const Index = () => {
  return (
    <nav>
      <div className="center flex justify-between items-center">
        <h1 className=" text-xl font-medium">Covid Tracker</h1>
        <div></div>
        <div>
          <Button title="Raise an Alarm" />
        </div>
      </div>
    </nav>
  );
};

export default Index;
