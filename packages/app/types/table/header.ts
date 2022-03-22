import type { BaseColumn } from './common'

export default interface Header {
	preset: {
		batch: {
			columns: Array<BaseColumn>
			delete: boolean
		}
		import: {
			bind: string
		}
	}
	actions: Array<{
		title: string
		icon: string
		action?: {
			type: string
			payload?: any
		}
		onClick?: () => void
	}>
}
