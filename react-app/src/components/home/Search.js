import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory, Redirect } from 'react-router-dom';

const Search = () => {
  const [display, setDisplay] = useState(true)
  const [query, setQuery] = useState("")
  const [options, setOptions] = useState([]);
  const wrapperRef = useRef(null);
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const result = [];

    const mainsearch = async() => {
      const searchresults = await fetch(`api/search/users?searchterm=${query}`);
      const res = await searchresults.json();
      res.userresults.map(value => result.push(value))
      setOptions(result);
      // setResults(searchresults);
    }
    // If searchbar is empty then hide options
    if (query === "") {
      setDisplay(false);
    }
    if (query !== "") {
      mainsearch();
    }
  }, [query]);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    };
  };

  const updateSearch = (e) => {
    setQuery(e.target.value);
    setDisplay(true);
  };

  const handleClick = (id) => {
    setRedirect(true);
  }


  return (
    <div ref={wrapperRef} className="search">
      <div className="search__header">
        <h1 className="search__title">Explore creators</h1>
        <h5 className="search__subtitle">Discover the best creatives from around the world and get inspired by the works and stories they share.</h5>
      </div>
      <div className="search__container">
        <SearchIcon style={{ fontSize: 30 }} />
        <input
          onClick={() => setDisplay(!display)}
          onChange={(e) => updateSearch(e)}
          type="text"
          value={query}
          placeholder="Search creators on Kafei"
          className="search__input">
        </input>
        <button className="search__btn">Search</button>
      </div>
      {display && (
        <div className="search__resultsContainer">
          {options
            .map((value, i) => {
              return (
                <div
                  onClick={() => history.push(`/users/${value.id}`)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  {redirect ? <Redirect to={`/users/${value.id}`} /> : null}
                  <div className="search__result-info" onClick={() => handleClick()}>
                    <img className="search__result-image" alt="" src={value.profile_image_url}></img>
                    </div>
                    <span className="search__result-name">{value.name}</span>
                  </div>
              )
            })
          }
        </div>
      )}
    </div>
  )
}

export default Search;
