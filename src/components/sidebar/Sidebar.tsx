import Arrow_double_left from "../../assets/arrow-double-left-active@2x.png";
import Layers from '../../assets/layers@2x.png'
import Combined_shape from '../../assets/combined-shape-1.svg'
import Line from '../../assets/line-2.svg'
import Combined_shape_2 from '../../assets/combined-shape-2.svg'

function Sidebar() {
	return (
		<div className='w-[319px] h-[1805px] bg-[#1e1e2d] overflow-hidden'>
			<div className='relative w-[321px] h-[1805px] left-[-2px]'>
				<div className='absolute w-[319px] h-[1805px] top-0 left-[2px] bg-[#1e1e2d]' />
				<div className='absolute w-[319px] h-[53px] top-[115px] left-0 bg-[#1b1b28]' />
				<div className='absolute w-[319px] h-[78px] top-0 left-[2px] bg-[#1b1b28]'>
					<img
						className='absolute w-[29px] h-[29px] top-[24px] left-[260px]'
						alt='Arrow double left'
						src={Arrow_double_left}
					/>
				</div>
				<div className='absolute w-[30px] h-[156px] top-[126px] left-[27px]'>
					<img
						className='absolute w-[30px] h-[30px] top-0 left-0'
						alt='Layers'
						src={Layers}
					/>
					<div className='absolute w-[29px] h-[29px] top-[128px] left-0'>
						<div className='relative w-[19px] h-[19px] top-[5px] left-[5px]'>
							<div className='w-[8px] h-[8px] bg-[#6993ff] rounded-[1.5px] absolute top-0 left-0' />
							<img
								className='absolute w-[19px] h-[19px] top-0 left-0'
								alt='Combined shape'
								src={Combined_shape}
							/>
						</div>
					</div>
				</div>
				<div className='absolute w-[63px] h-[22px] top-[205px] left-[31px]'>
					<div className="absolute w-[61px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#4a4b68] text-[12px] tracking-[0] leading-[normal]">
						CUSTOM
					</div>
				</div>
				<div className='absolute w-[75px] h-[166px] top-[307px] left-[66px]'>
					<div className="absolute w-[40px] top-0 left-px [font-family:'Poppins',Helvetica] font-normal text-[#888c9f] text-[12px] tracking-[0] leading-[normal]">
						Users
					</div>
					<div className="absolute w-[67px] top-[48px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#888c9f] text-[12px] tracking-[0] leading-[normal]">
						Contacts
					</div>
					<div className="absolute w-[36px] top-[96px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#888c9f] text-[12px] tracking-[0] leading-[normal]">
						Chat
					</div>
					<div className="absolute w-[45px] top-[144px] left-px [font-family:'Poppins',Helvetica] font-normal text-[#888c9f] text-[12px] tracking-[0] leading-[normal]">
						Pages
					</div>
				</div>
				<div className='absolute w-[225px] h-[265px] top-[15px] left-[32px]'>
					<div className="w-[88px] top-[114px] left-[40px] font-normal text-[13px] absolute [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
						Dashboard
					</div>
					<div className="w-[219px] top-0 left-0 font-bold text-[30px] absolute [font-family:'Poppins',Helvetica] text-white tracking-[0] leading-[normal]">
						DASHBOARD
					</div>
					<div className="absolute w-[98px] top-[241px] left-[40px] [font-family:'Poppins',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
						Applications
					</div>
				</div>
				<div className='absolute w-[6px] h-[96px] top-[318px] left-[49px]'>
					<img
						className='-top-px absolute w-[6px] h-px left-0 object-cover'
						alt='Line'
                        src={Line}
					/>
					<img
						className='top-[47px] absolute w-[6px] h-px left-0 object-cover'
						alt='Line'
                        src={Line}
					/>
					<img
						className='top-[95px] absolute w-[6px] h-px left-0 object-cover'
						alt='Line'
                        src={Line}
					/>
				</div>
				<div className='absolute w-[29px] h-[386px] top-[448px] left-[26px]'>
					<div className='absolute w-[29px] h-[29px] top-[357px] left-0' />
					<div className='absolute w-[29px] h-[29px] top-0 left-0'>
						<div className='relative w-[19px] h-[19px] top-[5px] left-[5px]'>
							<div className='w-[10px] h-[19px] bg-[#4a4b68] opacity-30 absolute top-0 left-0' />
							<img
								className='absolute w-[19px] h-[19px] top-0 left-0'
								alt='Combined shape'
                                src={Combined_shape_2}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
