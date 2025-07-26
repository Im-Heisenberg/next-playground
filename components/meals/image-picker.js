"use client";
import React, { useEffect, useRef, useState } from "react";
import classses from "./image-picker.module.css";
import Image from "next/image";
function ImagePicker({ label, name }) {
	const buttonRef = useRef(null);
	const [pickedImage, setPickedImage] = useState(null);
	const handlePickClick = () => {
		if (buttonRef.current) {
			buttonRef.current.click();
		}
	};
	const changeHandler = (e) => {
		const file = event.target.files[0];
		if (!file) {
			return;
		}

		const fileReader = new FileReader();

		fileReader.onload = () => {
			setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={classses.picker}>
			<label htmlFor="image">{label}</label>
			<div className={classses.controls}>
				{pickedImage && (
					<div className={classses.preview}>
						<Image src={pickedImage} alt="picked image" fill />
					</div>
				)}
				<input
					className={classses.input}
					type="file"
					id={name}
					accept="image/png , image/jpeg"
					name={name}
					ref={buttonRef}
					onChange={changeHandler}
					required
				/>
				<button
					className={classses.button}
					type="button"
					onClick={handlePickClick}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
}

export default ImagePicker;
