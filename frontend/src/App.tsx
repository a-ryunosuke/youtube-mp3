import { useState } from "react";

import { DisplayColorContext } from "./context/DisplayColorContext"
import { Form } from "./components/Form";
import { app } from "./tv/app.tv"
import { DisplayMode } from "./components/DisplayMode";

export default function App() {
  const [displayColor, setDisplayColor] = useState<boolean>(false)
  const { base, frame } = app({
      color: displayColor ? "light" : "dark"
  })

  return (
    <DisplayColorContext.Provider value={{ displayColor, setDisplayColor}}>
      <div className={base()}>
        <div className={frame()}>
          <DisplayMode />
          <Form />
        </div>
      </div>
    </DisplayColorContext.Provider>
  );
}