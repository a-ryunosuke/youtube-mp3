import { useState } from "react";
import { useFileTextHooks } from "./hooks/useFileTextHooks";
import { useErrorText } from "./hooks/useErrorText";

import { DisplayColorContext } from "./context/DisplayColorContext"

import { DisplayMode } from "./components/DisplayMode"
import { InputForm } from "./components/InputForm";
import { ConvertButton } from "./components/ConvertButton";
import { FormResetButton } from "./components/FormResetButton";
import { ErrorList } from "./components/ErrorList";
import { ConvertHistory } from "./components/ConvertHistory";

import { app } from "./tv/app.tv"
import { Form } from "./components/form/InputForm";

export default function App() {
  const [displayColor, setDisplayColor] = useState<boolean>(false)
  const [converting, setConverting] = useState<boolean>(false)
  const { base, frame, button } = app({
      color: displayColor ? "light" : "dark"
  })
  
  const {
    formValue,
    handleChange,
    reset,
    youtubeUrlReset,
    fileNameReset
  } = useFileTextHooks()

  const { error, setError } = useErrorText()

  return (
    <DisplayColorContext.Provider value={{ displayColor, setDisplayColor}}>
      <div className={base()}>
        <div className={frame()}>
          <DisplayMode />
          <Form />
          <InputForm
          formType="youtubeUrl"
          handleChange={handleChange}
          formValue={formValue}
          />
          <InputForm
          formType="fileName"  
          handleChange={handleChange}
          formValue={formValue}
          />
          <InputForm
          formType="artist" 
          handleChange={handleChange}
          formValue={formValue}
          />
          <InputForm
          formType="comment"
          handleChange={handleChange}
          formValue={formValue}
          />
          <div className={button()}>
          <ConvertButton
            formValue={formValue}
            converting={converting}
            setError={setError}
            setConverting={setConverting}
            youtubeUrlReset={youtubeUrlReset}
            fileNameReset={fileNameReset}
            />
            <FormResetButton reset={reset} />
          </div>
          <ErrorList error={error} />
          <ConvertHistory converting={converting} formValue={formValue} />
        </div>
      </div>
    </DisplayColorContext.Provider>
  );
}