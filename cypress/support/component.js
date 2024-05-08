import { mount } from 'cypress/vue2'
import store from '../../src/store/store.js'
import data from '../../src/store/data.js'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'

const tables = {
	0: {
		id: 1,
		title: 'Tutorial',
		emoji: '🚀',
		ownership: 'admin',
		ownerDisplayName: 'admin',
		createdBy: 'admin',
		createdAt: '2024-04-29 16:59:47',
		lastEditBy: 'admin',
		lastEditAt: '2024-04-29 16:59:47',
		archived: false,
		isShared: false,
		favorite: false,
		onSharePermissions: null,
		hasShares: false,
		rowsCount: 5,
		columnsCount: 4,
		views: [],
	},
}

const defaultOptions = {
	extensions: {
		mixins: [
			{ methods: {t, n } },
			{ store: { ...store, ...data } }
		],
		plugins: [],
		components: {},
	},
}

Cypress.Commands.add('mount', (component, options) => {
	// Use default options and mix in the given options
	options = {
		...defaultOptions,
		...options,
	}

	return mount(component, options)
})
