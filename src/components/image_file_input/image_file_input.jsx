import React, { memo, useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = memo(({ imageUploader, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  }

  const onChange = async event =>{
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url : uploaded.url
    })
  };
  
  return(
    <div className={styles.container}>
      <input ref={inputRef} className={styles.input} type="file" accept="image/*" name="file" onChange={onChange} />
      <button className={styles.button} onClick={onButtonClick}>
        <i className="far fa-images"></i>
      </button>
    </div>
  );
});

export default ImageFileInput;