import clsx from 'clsx'
import { Fragment, useMemo } from 'react'
import { When } from 'react-if'

import { getTemplateValue } from '@/utils'

import FlatContent from './components/FlatContent'
import FloatContentItem from './components/FloatContentItem'
import styles from './index.less'

import type { IPropsReference, IPropsReferenceFlatContent } from '../../types'

const Index = (props: IPropsReference) => {
	const { parent, namespace, data, reference, container } = props

	const _reference = useMemo(() => getTemplateValue(reference || {}, data), [reference, data])

	const props_flat_content: IPropsReferenceFlatContent = {
		parent,
		namespace,
		flatContent: _reference?.flatContent
	}

	return (
		<Fragment>
			<When condition={!!_reference?.flatContent}>
				<FlatContent {...props_flat_content}></FlatContent>
			</When>
			<When condition={!!_reference?.floatContents?.length}>
				<div className={clsx([styles.float_contents_wrap, 'flex flex_column absolute'])}>
					{_reference?.floatContents?.map((item) => (
						<FloatContentItem {...{ item, container }}></FloatContentItem>
					))}
				</div>
			</When>
		</Fragment>
	)
}

export default window.$app.memo(Index)
