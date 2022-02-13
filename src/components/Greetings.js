import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";

const Greetings = () => {
  const [isTextShown, setIsTextShown] = useState(false);

  const texthandler = () => {
    setIsTextShown(true);
  };
  return (
    <Fragment>
        <button onClick={texthandler}>ChangeText</button>
      <p>Hello !!</p>
      {isTextShown && <p>Hello Welcome</p>}
      {!isTextShown && <p>No Text By Defualt</p>}
    </Fragment>
  );
};

export default Greetings;
