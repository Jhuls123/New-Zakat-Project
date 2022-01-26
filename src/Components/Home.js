import React from 'react';
import Netpas from '../assets/Image/netpas.jpg';
import Mastercard from '../assets/Image/mastercard.png';
import Visa from '../assets/Image/visa.png';
import Express from '../assets/Image/Aexpress.png';
import Wise from '../assets/Image/wise_ftw.png';
import List from './List';

function Home() {
	return (
		<div className='home--container'>
			<div className='home--header'>
				<h4 className='home--title'>ZAKAT CALCULATOR</h4>
				<p className='lead' className='home--paragraph'>
					<span className='home--span'>HOME / ZAKAT</span> / ZAKAT CALCULATOR
				</p>
			</div>
			{/* HERO SECTION */}
			<div className='hero--section'>
				<div className='hero--wrapper'>
					<div className='hero--container-left'>
						<img src={Netpas} />
						<div className='hero--container-box'>
							<h2 className='hero--container-title'>Zakat Calculator</h2>
							<div className='hero--container-paragraphs'>
								<p>
									Placerat tempor ligula suspendisse vestibulum vulputate dolor
									gravida et. Mauris amet vitae ligula integer nulla.Amet, non
									libero gravida eros. Volutpat, malesuada massa non nulla
									massa.
								</p>
								<p>
									Orci arcu sed mi facilisis in donec et id. Fames non porttitor
									phasellus cursus sit sit tincidunt nunc. Nunc ornare nec sit
									sem lacus tellus elementum. Augue sed ultrices.
								</p>
								<div className='span-box'>
									<span>
										Enter all assets that have been in your possession over a
										lunar year in the text boxes below:
									</span>
								</div>
							</div>
						</div>
						<div className='form--section'>
							<form className='form--parent'>
								<div className='form--container'>
									<label>Select currency</label>
									<input type='text' />
								</div>
								<div className='form--container'>
									<label>Nisab (updated 09 April 2021):</label>
									<input type='text' />
								</div>
								<div className='form--container'>
									<label>Value of Gold</label>
									<input type='text' />
								</div>
								<div className='form--container'>
									<label>Value of Silver</label>
									<input type='text' />
								</div>
								{/* FORM-LIABILITIES */}
								<div className='form-liabilities'>
									<h2>Liabilities</h2>
									<div className='form--container'>
										<label>Borrowed money,goods bought on credit</label>
										<input type='text' />
									</div>
									<div className='form--container'>
										<label>Wages due to employees</label>
										<input type='text' />
									</div>
									<div className='form--container'>
										<label>Taxes, rent, utility bills due immediately</label>
										<input type='text' />
									</div>
								</div>
							</form>
						</div>
					</div>
					{/* RIGHT-SIDEBAR */}
					<div className='hero--container-right'>
						<div className='hero--container-border'>
							{List.map((lists, index) => (
								<div className='hero--container-item'>
									<span>{lists.title}</span>
								</div>
							))}
						</div>
						<div className='hero--container-wrapper'>
							<div className='hero--container-image-box'>
								<img src={Mastercard} style={{ width: '75px' }} />
								<img src={Visa} style={{ width: '75px' }} />
								<img src={Express} style={{ width: '75px' }} />
								<img src={Wise} style={{ width: '75px' }} />
							</div>
							<div className='form--container-cash'>
								<h2 className='Cash--title'>Cash</h2>
								<form className='form--cash-box'>
									<div className='form--box'>
										<label>In hand and in bank accounts</label>
										<input type='text' />
									</div>
									<div className='form--box'>
										<label>Deposited for some future purpose, e.g. Hajj</label>
										<input type='text' />
									</div>
									<div className='form--box'>
										<label>Given out in loans</label>
										<input type='text' />
									</div>
									<div className='form--box'>
										<label>
											Business investment, share, saving Certificates, penssions
											funded by money in one’s possession
										</label>
										<input type='text' />
									</div>
									<div className='form--trade'>
										<h2>Trade Goods</h2>
										<div className='form--container'>
											<label>Value of stock</label>
											<input type='text' />
										</div>
										<div className='form--container-donate'>
											<div className='container'>
												<div className='form--container-calculate'>
													<button>Calculate</button>
													<div className='total-assets'>
														<h2 className='span--assets'>Total Assets</h2>
														<h1>$0.00</h1>
													</div>
												</div>
												<div className='form--container-reset'>
													<button>Reset</button>
													<div className='total-assets'>
														<h2 className='span--payble'>Zakat Payble</h2>
														<h1>$0.00</h1>
													</div>
												</div>
											</div>
											<div className='btn'>
												<button className='btn--donate'>Zakat Donate</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer--section'>
				<footer>footer</footer>
			</div>
		</div>
	);
}

export default Home;
