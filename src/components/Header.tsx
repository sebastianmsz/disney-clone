import { useState } from "react";
import logo from "../assets/img/logo.png";
import HeaderItem from "./HeaderItem";
import {
	HiHome,
	HiMagnifyingGlass,
	HiPlus,
	HiStar,
	HiPlay,
	HiTv,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { MenuItem } from "../types";

const menu: MenuItem[] = [
	{ name: "HOME", icon: HiHome },
	{ name: "SEARCH", icon: HiMagnifyingGlass },
	{ name: "WATCH LIST", icon: HiPlus },
	{ name: "ORIGINALS", icon: HiStar },
	{ name: "MOVIES", icon: HiPlay },
	{ name: "SERIES", icon: HiTv },
];

export default function Header(): JSX.Element {
	const [toggle, setToggle] = useState(false);
	return (
		<header className="flex items-center  justify-between p-5">
			<div className="flex gap-8 items-center">
				<img
					src={logo}
					className="w-[100px] md:w-[115px] object-cover cursor-pointer"
					alt="Disney Logo"
				/>
				<div className="hidden md:flex gap-8">
					{menu.map((item) => (
						<HeaderItem key={item.name} icon={item.icon} name={item.name} />
					))}
				</div>
				<div className="flex md:hidden gap-5">
					{menu.map(
						(item, index) =>
							index < 3 && <HeaderItem key={item.name} icon={item.icon} />,
					)}
				</div>
				<div
					onClick={() => {
						setToggle(!toggle);
					}}
					className="md:hidden z-30"
				>
					<HeaderItem icon={HiDotsVertical} name="" />
					{toggle ? (
						<div
							key="dropdown-menu"
							className="absolute mt-3 bg-[#131313] border-[1px] border-[#323236] p-3 px-5 py-4"
						>
							{menu.map(
								(item, index) =>
									index > 2 && (
										<HeaderItem
											key={item.name}
											icon={item.icon}
											name={item.name}
										/>
									),
							)}
						</div>
					) : null}
				</div>
			</div>
			<a
				href="https://github.com/sebastianmsz/disney-clone"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src="src/assets/img/profile-picture.png"
					alt="Profile Picture"
					className="w-[40px] rounded-full cursor-pointer hover:scale-105 hover:border-[1px]"
				/>
			</a>
		</header>
	);
}
