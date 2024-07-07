interface HeaderItemProps {
	icon: React.ComponentType;
	name?: string;
	key?: string;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
	icon: Icon,
	name = "",
	key,
}) => (
	<div
		className="text-white flex items-center gap-3
					text-[18px] font-semibold cursor-pointer 
					hover:underline underline-offset-8 mb-2"
		key={key}
	>
		<Icon />
		<h2 className="">{name}</h2>
	</div>
);

export default HeaderItem;
