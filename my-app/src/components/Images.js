import React, {
  Component,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "./Image";

import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";
import Loading from "./Loading";
import useDebounce from "../utils/hooks/useDebounce";

export default function Images() {
  const [page, setPage] = useState(1);
  const [searchItem, setSearchItem] = useState(null);
  const [newImgUrl, setNewImgUrl] = useState("");
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchItem
  );
  const inputRef = useRef(null);
  const varRef = useRef(images.length);
  const scrollPos = useScroll();

  // For useScroll
  useEffect(() => {
    if (scrollPos >= document.body.offsetHeight - (window.innerHeight + 200)) {
      setPage((prev) => {
        return prev + 1;
      });
    }
  }, [scrollPos]);

  useEffect(() => {
    if (!errors) {
      inputRef.current.focus();
    }
  }, []);

  const handleRemove = (index) => {
    let filterImg = images.filter((image, i) => i !== index);
    setImages(filterImg);
  };

  const ShowImg = () => {
    return images.map((img, index) => (
      <Image
        image={img.urls.regular}
        handleRemove={handleRemove}
        index={index}
        key={index}
      />
    ));
  };

  // const [typeingTimeout, setTypingTimeout] = useState("");
  const debounce = useDebounce();
  const handleInput = (e) => {
    e.preventDefault();
    const text = e.target.value;

    debounce(() => setSearchItem(text), 1000);

    // setSearchItem(text);
  };

  return (
    <section>
      <div className="my-5">
        <input
          type="text"
          name="inp"
          onChange={handleInput}
          className="w-full border rounded shadow p-2"
          placeholder="Search Photos Here"
        />
        <button type="submit">Search</button>
      </div>
      {errors.length > 0 ? (
        <div className="flex h-screen">
          {console.log(errors.length)}
          <p className="m-auto">{errors}</p>
        </div>
      ) : null}

      {errors.length > 0 ? null : (
        <div>
          <div className="flex flex-wrap">
            <ShowImg />
          </div>
          <button
            onClick={() =>
              setPage((prev) => {
                return prev + 1;
              })
            }
          >
            Loading More
          </button>
        </div>
      )}
      {isLoading ? <Loading /> : null}
    </section>
  );
}
