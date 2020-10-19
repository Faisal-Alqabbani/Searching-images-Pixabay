import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, InputLabel, MenuItem, Select } from "@material-ui/core";
import axios from "axios";
import ImageResults from "../ImageResults/ImageResult";
function Search() {
  const [searchText, setSearchText] = useState("");
  const [amount, setAmount] = useState(10);

  const [apiKey, setApiKey] = useState("API_KEY");
  const [images, setImages] = useState([]);

  const fetchData = (searchText, amount) => {
    axios
      .get("https://pixabay.com/api/", {
        params: {
          q: searchText,
          image_type: "photo",
          key: apiKey,
          per_page: amount,
          safesearch: "true",
        },
      })
      .then((response) => {
        setImages(response.data.hits);
      })
      .catch((err) => console.log(err));
  };
  const onTextChange = (e) => {
    let val = e.target.value;
    if (val === "") {
      setSearchText(val);
      setImages([]);
    } else {
      setSearchText(val);
      fetchData(searchText, amount);
    }
  };
  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };
  console.log(images.length);
  return (
    <Container>
      <TextField
        name="searchText"
        value={searchText}
        onChange={onTextChange}
        label="Search for Images"
        fullWidth={true}
      />
      <br />
      <br />
      <InputLabel id="demo-controlled-open-select-label">Amount</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="amount"
        label="amount"
        value={amount}
        fullWidth={true}
        onChange={onAmountChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={50}>50</MenuItem>
      </Select>
      <br />
      {images.length > 0 ? <ImageResults images={images} /> : null}
    </Container>
  );
}

export default Search;
