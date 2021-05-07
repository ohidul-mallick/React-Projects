import React, { useEffect, useState } from "react";
import Axios from "axios";

const api = process.env.REACT_APP_UNSPLASH_URL;
const secret = process.env.REACT_APP_UNSPLASH_KEY;
const search = process.env.REACT_APP_UNSPLASH_SEARCH;

export default function useFetchImage(page, searchItem) {
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearch = () => {
    Axios.get(`${search}?client_id=${secret}&page=${page}&query=${searchItem}`)
      .then((res) => {
        if (page > 2) {
          setImages([...images, ...res.data.results]);
        } else {
          setImages([...res.data.results]);
        }
        // setImages([...res.data.results]);

        setIsLoading(false);
      })
      .catch((e) => {
        setErrors("Something went wrong..." + e);
        setIsLoading(false);
      });
  };

  const fetchRandom = () => {
    // Axios.get(`${url}?client_id=${secret}&page=${page}&query=${searchItem}`)
    Axios.get(`${api}?client_id=${secret}&page=${page}`)
      .then((res) => {
        setImages([...images, ...res.data]);

        setIsLoading(false);
      })
      .catch((e) => {
        setErrors("Something went wrong..." + e);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setIsLoading(true);
    const url = searchItem === null ? api : search;
    if (searchItem !== null) {
      fetchSearch();
    } else {
      fetchRandom();
    }
  }, [page]);

  useEffect(() => {
    if (searchItem === null) return;
    fetchSearch();
  }, [searchItem]);

  return [images, setImages, errors, isLoading];
}
