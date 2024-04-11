'use client';

import React, { useRef, useState } from 'react';
import styleClassName from './ImagePicker.module.css';

export default function ImagePicker() {
    const [selectedImage, setSelectedImage] = useState(null);
    const inputImgRef = useRef(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedImage(event.target.files[0]);
        } else {
            selectedImage(null);
        }
    };

    const handleUploadImg = () => {
        inputImgRef.current.click();
    }

    return (
        <div className={styleClassName.img_picker} >
            <div className={styleClassName.preview_img} >
                {selectedImage ? (
                    <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
                ) : <div>No image picked yet.</div>}
            </div>
            <label htmlFor="image">
                <input
                    ref={inputImgRef}
                    type="file"
                    id="image"
                    name='image'
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                />
                <button className={styleClassName.pick_img_btn} type="button" onClick={handleUploadImg} >Pick an Image</button>
            </label>
        </div>
    );
}
