import React, { useState } from 'react';
import Button from '../components/Button';
import BlogHeader from '../components/Blogs';

import '../blog.css';
import InputGroup from '../components/InputGroup';

function Blog() {
	const [state, setState] = useState([]);
	const getValue = (e) => {
		e.preventDefault();
		const item = {
			title: e.target.title.value,
			article: e.target.article.value,
		};
		setState((prev) => [...prev, item]);
	};
	const [show, setShow] = useState(false);
	function handlePost(e) {
		setShow(true);
	}

	function handleCancel(e) {
		setShow(false);
	}
	function handlePostValue(e) {
		setShow(false);
	}

	return (
		<div className="container">
			<div className="container-main">
				<BlogHeader />
			</div>
			<Button type="button" onClick={handlePost}>
				Create post
			</Button>

			{show === true ? (
				<div className="post1">
					<div className="post">
						<form onSubmit={getValue}>
							<InputGroup type="text" placeholder="Enter the title" id="title" />
							<InputGroup type="textarea" placeholder="Enter the article" id="article" />
							<Button type="button" onClick={handleCancel}>
								Cancel
							</Button>

							<Button type="submit" onClick={handlePostValue}>
								Post
							</Button>
						</form>
					</div>
				</div>
			) : (
				''
			)}
			{state.map((number, index) => {
				return (
					<div className="displaytitle">
						<h1 className="title">{number.title}</h1>
						<p className="article">{number.article}</p>
					</div>
				);
			})}
		</div>
	);
}
export default Blog;
