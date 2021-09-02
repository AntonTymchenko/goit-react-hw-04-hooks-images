import React, { useState } from "react";
import { toast } from "react-toastify";
import SearchForm from "../SearchForm/SearchForm";
import "./Searchbar.css";

function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState("");

  const handleInput = (e) => {
    const value = e.currentTarget.value;
    setImgName(value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (imgName.trim() === "") {
      toast.error("Введите слово.");
      return;
    }
    onSubmit(imgName);
    setImgName("");
  };

  return (
    <header className="Searchbar">
      <SearchForm
        handleFormSubmit={handleFormSubmit}
        handleInput={handleInput}
        imgName={imgName}
      />
    </header>
  );
}

// class Searchbar extends Component {
//   state = {
//     imgName: "",
//   };
//   handleInput = (e) => {
//     const value = e.currentTarget.value;
//     this.setState({
//       imgName: value,
//     });
//   };
//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.imgName.trim() === "") {
// toast.error("Введите слово.");
// return;
//     }
//     this.props.onSubmit(this.state.imgName);
//     this.setState({ imgName: "" });
//   };
//   render() {
//     return (
// <header className="Searchbar">
//   <SearchForm
//     handleFormSubmit={this.handleFormSubmit}
//     handleInput={this.handleInput}
//     imgName={this.state.imgName}
//   />
// </header>
//     );
//   }
// }

export default Searchbar;
