import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Image } from "../Image";
import ImageGallery from "../components/ImageGallery";
import axios from "axios";
import "../styles.css";

//useMemeo bir deyeri yaddasa salmaq ucundur.
//Daxilindeki deyisenlerden biri deyisdikde tekrar render olunur
//Hooklari funksiya daxilinde birde component xaricinde yaratmaq olmaz
//
//
//

const Searchbar = () => {
  const [key, setKey] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [pageValue, setPageValue] = useState(12);

  useEffect(() => {
    fetchData();
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    fetchData();
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setKey(event.currentTarget.value);
  }

  const fetchData = async () => {
    const response = await axios.get(`https://pixabay.com/api/`, {
      params: {
        key: "44668293-2694da60463ef5203e7da055c",
        q: key,
        image_type: "photo",
        per_page: pageValue,
      },
    });
    setImages(response.data.hits);
    setPageValue(12);
    console.log(response.data);
  };

  return (
    <div>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            value={key}
            onChange={handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
      <ImageGallery images={images} />
    </div>
  );
};

export default Searchbar;
