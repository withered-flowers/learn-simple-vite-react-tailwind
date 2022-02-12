import { useState } from "react";
// We will create a child component to hold the content
import SecondComponentSubContent from "./SecondComponentSubContent";

function SecondComponent() {
  // state for the text
  const [textInput, setTextInput] = useState("");

  return (
    <div>
      <h2 className="h2">Second Component</h2>
      <div className="custom-subcontainer">
        {/* Form Section */}
        <section className="mr-4">
          <form>
            <input
              className="form-input"
              type="text"
              placeholder="Write me pl0x"
              // on change input
              onChange={(e) => setTextInput(e.target.value)}
            />
          </form>
        </section>
        <section>
          {/* Content section */}

          {/* pass textInput to SecondComponentSubContent */}
          <SecondComponentSubContent textInput={textInput} />
        </section>
      </div>
    </div>
  );
}

export default SecondComponent;
