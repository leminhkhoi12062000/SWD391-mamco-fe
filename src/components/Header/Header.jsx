

import React from 'react'

import './header.css';

const nav_links = [
	{
		path: '#home',
		display: 'Trang chủ'
	},

	// {
	// 	path: '#news',
	// 	display: 'Tin tức'
	// },

	// {
	// 	path: '#contact',
	// 	display: 'Liên hệ'
	// },

	// {
	// 	path: '#cart',
	// 	display: 'Giỏ hàng'
	// },

	{
		path: '#service',
		display: 'Dịch vụ'
	},

	{
		path: '#combo',
		display: 'Combo'
	},

	{
		path: '#material',
		display: 'Nguyên liệu'
	},

	{
		path: '#partner',
		display: 'Đối tác'
	},

	{
		path: '#formula',
		display: 'Công thức nấu ăn'
	},
]

const Header = ({ theme, toggleTheme }) => {
	return (
		<header className="header">
			<div className="container">
				<div className="nav_wrapper">
					<div className="logo">
						<h2>Cỗ</h2>

					</div>

					<div className="search">
						<input type="text" placeholder="Món ăn" />
						<button className="secondary_btn search_btn">Tìm</button>
					</div>

					{/*  ========= navigation ===========	*/}

					<div className="navigation">
						<ul className="menu">
							{
								nav_links.map((item, index) => (
									<li className="menu_item"><a href=
										{item.path} className="menu_link">{item.display}
									</a>
									</li>
								))
							}
						</ul>
					</div>

					{/*  ====================== light mode ================	*/}

					<div className="light_mode">
						<span onClick={toggleTheme}>
							{
								theme === "light-theme" ? (
									<span>
										<i class="ri-moon-line"></i>Dark
									</span>
								) : (
									<span>
										<i class="ri-sun-line"></i> Light 
									</span>
							)}
						</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header