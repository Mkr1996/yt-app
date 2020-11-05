import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) =>{
  const [term, setTerm] = useState('')

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div onSubmit={onSubmit} className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(event)=>setTerm(event.target.value)}
          ></input>
        </div>
      </form>
    </div>
  );
}


export default SearchBar
