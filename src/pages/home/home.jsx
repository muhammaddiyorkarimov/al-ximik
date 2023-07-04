import { useState } from 'react'
import './home.css'

function Home() {

	const [active, setActive] = useState(true)

	return (
		<div className="home">
			{/* head  fixed */}
			<div className="head-fixed">
				<div className='send-question'>
					<img src="./images/send.png" alt="" />
					<p>Savollar yo'llang</p>
				</div>
				<div className="we-connecting">
					<div className="connect">
						<p>Biz bilan bog’laning!: <span>+998 73 240 00 30</span></p>
					</div>
					<div className="language">
						<p>O'zbekcha <i className="fa-solid fa-chevron-down"></i></p>
					</div>
				</div>
			</div>

			{/* main header */}
			<header>
				<div className="header-logo">
					<img src="./images/logo.png" alt="logo" />
					<img src="./images/logo2.png" alt="logo" />
				</div>
				<div className="header-search">
					<div>
						<input type="text" placeholder='Bu yerdan qidiirng...' />
						<i className="fa-solid fa-magnifying-glass"></i>
					</div>
					<i className="fa-regular fa-user"></i>
				</div>
			</header>

			{/* navbar */}
			<nav>
				<ul>
					<li className='active'><a href="#">Asosiy</a></li>
					<li><a href="#">Biz haqimizda</a></li>
					<li><a href="#">Mahsulotlar</a></li>
					<li><a href="#">Yangiliklar</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Hamkorlik</a></li>
				</ul>
				<div className="nav-circles">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>

			{/* main */}
			{/* main drug */}
			<section className="main-drug">
				<div className="drug-about">
					<h1>Imunitetni oshiruvchi <br /> tabiiy sirop</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur. Sit facilisi ac habitant <br /> lacinia amet enim morbi risus.
					</p>
					<button type='button'>Batafsil</button>
				</div>
				<div className="drug-image">
					<img src="./images/main-drug.png" alt="main drug" />
				</div>
			</section>

			{/* main product */}
			<section className="product">
				<div className="product-header">
					<h1>Mahsulotlar</h1>
					<p>
						<b>100 000uzs</b> dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!
					</p>
				</div>
				<div className="product-boxes">
					<div className="product-box">
						<img src="./images/immunity image 1.png" alt="" />
						<p>Imunitet</p>
					</div>
					<div className="product-box">
						<img src="./images/immunity image 1.png" alt="" />
						<p>Imunitet</p>
					</div>
					<div className="product-box">
						<img src="./images/immunity image 1.png" alt="" />
						<p>Imunitet</p>
					</div>
					<div className="product-box">
						<img src="./images/immunity image 1.png" alt="" />
						<p>Imunitet</p>
					</div>
					<div className="product-box">
						<img src="./images/immunity image 1.png" alt="" />
						<p>Imunitet</p>
					</div>
				</div>
			</section>

			{/* main news */}
			<section className="news">
				<div className="new">
					<h1>Yangiliklar</h1>
					<img src="./images/news image.png" alt="" />
				</div>

				<div className="other-news">
					<h1>Farmaseftika yangiliklari</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur. Magna consectetur pulvinar ac suspendisse ornare id at suspendisse. Tempus nibh vitae consectetur id vel. Mauris egestas posuere quam lacus turpis metus sem non commodo. Accumsan habitant eget quisque gravida sed eget morbi. Eleifend a elementum lacinia justo duis molestie elementum. Massa pretium nulla gravida odio vulputate fringilla nam ligula leo.
					</p>
					<button type='button'>Barchasi</button>
				</div>
			</section>

			{/* new products */}
			<section className="new-products">
				<div className="new-products__title">
					<h1>Mahsulotlar</h1>
					<p>
						<b>100 000uzs</b> dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!
					</p>
				</div>
				<div className="products-rating">
					<div className="products-rating__title">
						<button onClick={() => setActive(true)}>Ommabop</button>
						<button onClick={() => setActive(false)}>Reytingi yuqori</button>
					</div>
					<div>
						{active && <div className='progress active'></div>}
						{!active && <div className='progress'></div>}
					</div>
				</div>

				<div className="new-products__boxes">
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
				</div>
				<div className="other-news">
					<button type='button'>Barchasi</button>
				</div>
			</section>

			{/* discounted product */}
			<section className="discounted-product">
				<div className="discounted-product__wrapper">
					<div className="discounted-product__about">
						<h3>35% chegirma</h3>
						<h1>Oyning eng ommabop mahsuloti</h1>
						<p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
						<ul>
							<li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
							<li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
							<li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
							<li><i className="fa-solid fa-check"></i> Lorem ipsum dolor sit amet consectetur.</li>
						</ul>
					</div>

					<div className="discounted-product__image">
						<img src="./images/discounted product.png" alt="" />
					</div>
				</div>
			</section>

			{/* new content */}
			<section className="new-content">
				<div className="new-content__header">
					<h1>Yangi takiblar</h1>
					<p><b>100 000uzs</b> dan yuqori bo’lgan haridlar uchun yetkazib berish bepul!</p>
				</div>
				<div className="content-boxes new-products__boxes">
					<i className="fa-solid fa-arrow-left content-icon"></i>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<div className="new-product__box">
						<div className="box-wrapper">
							<div className="products-box__header">
								<img src="./images/box header img.png" alt="" />
								<p>Kanada texnologiyasi asosida <br /> tayyorlangan!</p>
							</div>
							<div className="products-box__main">
								<img src="./images/box main img.png" alt="" />
								<button type='button'>Batafsil</button>
								<div className="products-box__icon">
									<i className="fa-sharp fa-solid fa-cart-shopping"></i>
									<i className="fa-regular fa-heart"></i>
									<i className="fa-sharp fa-solid fa-right-from-bracket"></i>
								</div>
							</div>
						</div>
						<div className="products-box__footer">
							<h1>Argeta 100ml</h1>
							<p>119 000uzs</p>
						</div>
						<div className="products-footer__starts">
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-solid fa-star"></i>
							<i className="fa-regular fa-star"></i>
						</div>
					</div>
					<i className="fa-solid fa-arrow-right content-icon"></i>
				</div>
			</section>

			{/* customer opinion */}
			<section className="customer-opinion">
				<h1>Mijozlar fikri</h1>
				<div className="customer-opinion__items">
					<div className="customer-opinion__item">
						<div className="item-header">
							<img src="./images/customer.png" alt="" />
							<div>
								<h2>Aziz Shukurov</h2><br />
								<span>Shifokor</span>
							</div>
						</div>
						<div className="item-main">
							<p>
								Ushbu tabiiy dorilar bemorlar sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! <br /> Sizga ham tavsiya qilaman 👍
							</p>
						</div>
						<div className="item-footer">
							<span>07.03.2023</span>
						</div>
					</div>
					<div className="customer-opinion__item">
						<div className="item-header">
							<img src="./images/customer.png" alt="" />
							<div>
								<h2>Aziz Shukurov</h2>
								<span>Shifokor</span>
							</div>
						</div>
						<div className="item-main">
							<p>
								Ushbu tabiiy dorilar bemorlar sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! <br /><br /> Sizga ham tavsiya qilaman 👍
							</p>
						</div>
						<div className="item-footer">
							<span>07.03.2023</span>
						</div>
					</div>
					<div className="customer-opinion__item">
						<div className="item-header">
							<img src="./images/customer.png" alt="" />
							<div>
								<h2>Aziz Shukurov</h2>
								<span>Shifokor</span>
							</div>
						</div>
						<div className="item-main">
							<p>
								Ushbu tabiiy dorilar bemorlar sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! <br /><br /> Sizga ham tavsiya qilaman 👍
							</p>
						</div>
						<div className="item-footer">
							<span>07.03.2023</span>
						</div>
					</div>
					<div className="customer-opinion__item">
						<div className="item-header">
							<img src="./images/customer.png" alt="" />
							<h2>Aziz Shukurov</h2>
							<span>Shifokor</span>
						</div>
						<div className="item-main">
							<p>
								Ushbu tabiiy dorilar bemorlar sog’ligini ijobiy holatga keltirishda katta hissa qo’shdi! <br /><br /> Sizga ham tavsiya qilaman 👍
							</p>
						</div>
						<div className="item-footer">
							<span>07.03.2023</span>
						</div>
					</div>
				</div>
				<div className="other-news">
					<button type='button'>Barchasi</button>
				</div>
			</section>

			{/* partners */}
			<section className="partners">
				<h1>Hamkorlar</h1>
				<div className="partners-images">
					<img src="./images/partners1.png" alt="" />
					<img src="./images/partners2.png" alt="" />
					<img src="./images/partners3.png" alt="" />
					<img src="./images/partners4.png" alt="" />
				</div>
			</section>

			{/* Recommendations */}
			<section className="recommendations">
				<h1>Tavsiyalar</h1>
				<div className="recommendations-items">
					<div className="recommendations-item">
						<div>
							<img src="./images/pain.png" alt="" />
						</div>
						<h2>Bosh og'rig'i</h2>
					</div>
					<div className="recommendations-item">
						<div>
							<img src="./images/pain.png" alt="" />
						</div>
						<h2>Bosh og'rig'i</h2>
					</div>
					<div className="recommendations-item">
						<div>
							<img src="./images/pain.png" alt="" />
						</div>
						<h2>Bosh og'rig'i</h2>
					</div>
					<div className="recommendations-item">
						<div>
							<img src="./images/pain.png" alt="" />
						</div>
						<h2>Bosh og'rig'i</h2>
					</div>
				</div>
				<div className="other-news">
					<button type='button'>Barchasi</button>
				</div>
			</section>
		</div>
	)
}

export default Home