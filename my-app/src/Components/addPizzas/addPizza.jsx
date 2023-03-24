import React, {  useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AddPizza() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [veg, setVeg] = useState("");
  const [image, setImage] = useState("");



  const ahee = (e) => {


     setImage(e.target.files[0])

  }

  





  const ahae = async () => {

    const formData = new FormData()
    formData.append('image' , image)
    formData.append('name' , name)
    formData.append('cat' , veg)
    formData.append('desc' , desc)

    // const data = {
    //   name: name,
    //   category: 'veg',
    //   desc: desc,
    //   image

    // };

    const Uploaded = await axios.post("http://localhost:4000/add/addpizza",formData);

    console.log(Uploaded);

  };



  return (
    <div className="container">
        <label htmlFor="inputPassword5" className="form-label">
          name
        </label>
        <input
          name='name'
          type="text"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="inputPassword5"
          className="form-label"
          style={{ marginTop: "20px" }}
        >
          desc
        </label>
        <input
        name='desc'
          type="text"
          id="inputPassword5"
          className="form-control"
          aria-describedby="passwordHelpBlock"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {/* <div style={{ marginTop: "20px" }}>
          <label htmlFor="inputPassword5" className="form-label">
            varients :
          </label>
          <br />
          <input
            type="checkbox"
            name=""
            id="small"
            style={{ marginRight: "15px" }}
          />
          <label htmlFor="small" style={{ cursor: "pointer" }}>
            Small
          </label>
          <br />
          <input
            type="checkbox"
            name=""
            id="medium"
            style={{ marginRight: "15px" }}
          />
          <label htmlFor="medium" style={{ cursor: "pointer" }}>
            medium
          </label>
          <br />
          <input
            type="checkbox"
            name=""
            id="Large"
            style={{ marginRight: "15px" }}
          />
          <label htmlFor="Large" style={{ cursor: "pointer" }}>
            Large
          </label>
        </div> */}

        <div style={{ marginTop: "20px" }}>
          <select style={{margin:'50px 0'}}
            name="cat"
            id=""
            value={veg}
            onChange={(e) => setVeg(e.target.value)}
          >
            <option value="veg">Veg</option>
            <option value="nonveg">NonVeg</option>
          </select>
        </div>

      <input type="file" name="image"  onChange={ahee} style={{marginBottom:'30px'}} />


        <NavLink to="/" type="submit" className="btn m-3 btn-primary" onClick={ahae}>Submit</NavLink>


    </div>
  );
}

export default AddPizza;
