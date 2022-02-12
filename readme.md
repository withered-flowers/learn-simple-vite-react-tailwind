# React Simple Apps with Tailwindcss

## Demo
https://simple-react-tailwind.web.app/

## Short Documentation 

Disclaimer:
- This documentation is using `pnpm`

## Initialize Apps
1. `pnpm create vite`
1. name your project
1. select Framework: `react`, 
1. select a variant: `react`
1. `cd path/to/project/folder`
1. `pnpm install`
1. delete `App.css`, `favicon.svg`, `logo.svg`
1. `pnpm install -D tailwindcss postcss autoprefixer`
1. `pnpm exec tailwindcss init -p`
1. edit `tailwind.config.js`
    ```js
    module.exports = {
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,svelte,md,mdx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    ```
1. edit `index.css`
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    .custom-container {
      @apply container p-4 min-w-full min-h-screen flex flex-col items-center justify-center text-center;
    }

    .custom-subcontainer {
      @apply flex flex-row justify-center items-center;
    }

    .h1 {
      @apply text-4xl font-medium mb-4;
    }

    .h2 {
      @apply text-2xl font-medium mb-4;
    }

    .btn {
      @apply px-4 py-2 my-2 bg-sky-300 hover:bg-sky-600 text-slate-700 hover:text-slate-300 font-bold rounded-3xl w-48;
    }

    .form-input {
      @apply px-4 py-2 my-2 bg-white border border-gray-300 rounded-3xl w-full;
    }

    table {
      @apply table-auto border border-collapse border-slate-500;
    }

    td,
    th {
      @apply border border-slate-500 p-2;
    }
    ```
1. edit `App.jsx`
    ```jsx
    function App() {
      return (
        <div className="App">
          <div className="custom-container">
            <header className="App-header">
              <p className="h1">Simple React Apps with Tailwind</p>
            </header>
          </div>
        </div>
      );
    }

    export default App;
    ```
1. run the app `pnpm run dev`
1. create folder `src/components`

## FirstComponent
1. create file `src/components/FirstComponent.jsx`
1. edit `FirstComponent.jsx`
    ```jsx
    // import to set the state
    import { useState } from "react";

    function FirstComponent() {
      // state for the counter
      const [count, setCount] = useState(0);

      const addCount = () => {
        setCount(count + 1);
      };

      const resetCount = () => {
        setCount(0);
      };

      return (
        <div>
          <h2 className="h2">First Component</h2>
          <h3>
            {count === 0
              ? "Don't you dare to click me !"
              : `How dare you click me ${count} time${count > 1 ? "s" : ""} !`}
          </h3>
          <p>
            <button className="btn" onClick={addCount}>
              Dare-to-click
            </button>
          </p>
          <p>
            <button className="btn" onClick={resetCount}>
              Forget-me-not
            </button>
          </p>
        </div>
      );
    }

    export default FirstComponent;

    ```
1. edit `App.jsx`
    ```jsx
    import FirstComponent from "./components/FirstComponent";

    function App() {
      return (
        <div className="App">
          <div className="custom-container">
            <header className="App-header">
              <p className="h1">Simple React Apps with Tailwind</p>
            </header>
            {/* Create new section to hold FirstComponent */}
            <section>
              <FirstComponent />
            </section>
          </div>
        </div>
      );
    }

    export default App;
    ```

## SecondComponent
1. create file `src/components/SecondComponent.jsx`
1. create file `src/components/SecondComponentSubContent.jsx`
1. edit `SecondComponent.jsx`
    ```jsx
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
    ```
1. edit `SecondComponentSubContent.jsx`
    ```jsx
    // get a props from parent component named 'textInput'
    function SecondComponentSubContent({ textInput }) {
      return (
        <div>
          {textInput === "" ? (
            <pre>I have nothing to show</pre>
          ) : (
            <pre>I write: {textInput}</pre>
          )}
        </div>
      );
    }

    export default SecondComponentSubContent;
    ```
1. edit `App.jsx`
    ```jsx
    import FirstComponent from "./components/FirstComponent";
    import SecondComponent from "./components/SecondComponent";
    ...

        <section>
          <FirstComponent />
        </section>
        {/* Create new section to hold SecondComponent */}
        <section>
          <SecondComponent />
        </section>
    ```

## ThirdComponent
1. create file `src/components/ThirdComponent.jsx`
1. create file `src/components/ThirdComponentSubTable.jsx`
1. create file `src/components/ThirdComponentSubTableContent.jsx`
1. edit file `ThirdComponentSubTableContent.jsx`
    ```jsx
    function ThirdComponentSubTableContent({ item }) {
      return (
        <tr key={item.id}>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
          <td>
            <img src={item.avatar}></img>
          </td>
        </tr>
      );
    }

    export default ThirdComponentSubTableContent;
    ```
1. edit file `ThirdComponentSubTable.jsx`
    ```jsx
    import ThirdComponentSubTableContent from "./ThirdComponentSubTableContent";

    function ThirdComponentSubTable({ extData }) {
      return (
        <table className="table-auto">
          <thead>
            <tr>
              <th>first_name</th>
              <th>last_name</th>
              <th>email</th>
              <th>avatar</th>
            </tr>
          </thead>
          <tbody>
            {/* Create the loop for rendering the data */}
            {extData.map((item) => (
              // Loop the table rows and pass the item
              <ThirdComponentSubTableContent key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      );
    }

    export default ThirdComponentSubTable;
    ```
1. edit file `ThirdComponent.jsx`
    ```jsx
    import { useState, useEffect } from "react";
    import ThirdComponentSubTable from "./ThirdComponentSubTable";

    function ThirdComponent() {
      // state for fetched external data
      // initial value is an empty array
      const [extData, setExtData] = useState([]);

      // we will fetch the data when this ThirdComponent is rendered
      // using the useEffect hook to fetch the data
      useEffect(
        // this is the callback handler
        () => {
          const fetchData = async () => {
            // fetch data from external API
            const response = await fetch("https://reqres.in/api/users");
            const jsonData = await response.json();

            // set fetched data to state
            setExtData(jsonData.data.slice(0, 3));
          };

          // we will fetch the data from the external API
          // using the methods that we have created
          // the fetchExternalData method
          fetchData();

          // this is the same as componentDidMount

          // this is the same as componentDidUnmount
          return () => {};
        },
        // we will need an empty array here
        // to avoid infinite loop
        []
      );

      return (
        <div>
          <h2 className="h2">Third Component</h2>
          <ThirdComponentSubTable extData={extData}></ThirdComponentSubTable>
        </div>
      );
    }

    export default ThirdComponent;
    ```
1. edit `App.jsx`
    ```jsx
    import FirstComponent from "./components/FirstComponent";
    import SecondComponent from "./components/SecondComponent";
    import ThirdComponent from "./components/ThirdComponent";

    ...

        {/* Create new section to hold SecondComponent */}
        <section>
          <SecondComponent />
        </section>
        {/* Create new section to hold ThirdComponent */}
        <section>
          <ThirdComponent />
        </section>
    ```