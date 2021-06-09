import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Plan from "./Plan";
import { useEffect, useState } from "react";
import axios from "axios";

// Axios Instance
const ai = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  // RETRIEVING DATA FROM DATABSE
  const showPlan = () => {
    ai.get("/list/").then((res) => {
      setItems(res.data);
    });
  };

  useEffect(() => {
    showPlan();
  }, []);

  // ADDING DATA INTO DATABASE
  const handleChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  const handleAdd = (e) => {
    let dt = { item: text };
    addPlan(dt);
  };

  const addPlan = (d) => {
    if (text !== "") {
      ai.post("/create/", d).then((res) => {
        setText("");
        showPlan();
      });
    }
  };

  // DELETING DATA FROM DATABASE

  const hndleDelete = (id) => {
    console.log("deleted ", id);
    ai.delete(`/delete/${id}`).then((res) => {
      showPlan();
    });
  };
  return (
    <div className="App">
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center">Today's Plan </h2>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write Plan here"
                  value={text}
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <button
                  className="btn btn-warning px-5 font-weight-bold"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </div>
              <div className="container-fluid">
                <ul className="list-unstyled row m-5">
                  {items.map((value, idx) => {
                    return (
                      <Plan
                        key={idx}
                        id={value.id}
                        value={value.item}
                        sendData={hndleDelete}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
