const Container = ({className="", children}) => {
	return (
		<div className={`max-w-295 m-auto ${className}`}>
			{children}
		</div>
	)
}

export default Container
