import type Filter from './filter'
import type Header from './header'
import type Action from './action'
import type { TableProps } from 'antd'
import type { BaseColumn, Fileds, FiledDetail, ViewComponents } from './common'

export interface TableSetting {
	header: Header
	filter: Filter
	table: {
		props: TableProps<{}>
		columns: Array<BaseColumn>
		actions: Array<Action>
	}
	fileds: {
		filter: Fileds
		table: Fileds
	}
}

export type TableData = {
	data: Array<any>
	page: number
	pagesize: number
	total: number
}

export type Column = BaseColumn & FiledDetail

export { BaseColumn, Fileds, FiledDetail, ViewComponents }
