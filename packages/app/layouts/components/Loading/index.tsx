import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './index.less'

import type { IPropsLoading } from '../../types'

const Index = (props: IPropsLoading) => {
	const { loading, visible_nav, visible_menu } = props

	return (
		<AnimatePresence>
			{loading && (
				<motion.div
					className={clsx([
						styles._local,
						!visible_menu ? styles.no_menu : '',
						!visible_menu && !visible_nav ? styles.no_nav : '',
						'fixed top_0 left_0 z_index_1000 h_100vh flex flex_column align_center justify_center'
					])}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.45, ease: 'backInOut' }}
				>
					<div className='inner mb_20' />
					<div className='text'>loading</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default window.$app.memo(Index)
