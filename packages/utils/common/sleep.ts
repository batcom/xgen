const Index = async (time: number) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(true), time)
	})
}

export default Index
