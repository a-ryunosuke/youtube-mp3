import { useState } from "react";

import { DisplayColorContext } from "./context/DisplayColorContext"

import { DisplayMode } from "./components/DisplayMode"
// import { ErrorList } from "./components/ErrorList";
// import { ConvertHistory } from "./components/ConvertHistory";

import { app } from "./tv/app.tv"
import { Form } from "./components/form/InputForm";

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
          {/* <ErrorList error={error} /> */}
          {/* <ConvertHistory converting={converting} formValue={formValue} /> */}
      </div>
    </DisplayColorContext.Provider>
  );
}