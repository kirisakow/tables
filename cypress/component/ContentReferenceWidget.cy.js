import ContentReferenceWidget from '../../src/views/ContentReferenceWidget.vue'
import store from '../../src/store/store.js'
import data from '../../src/store/data.js'

const richObject = {
	id: 1,
	rows: [
		{
			id: 1,
			tableId: 1,
			createdBy: 'admin',
			createdAt: '2024-04-29 16:59:47',
			lastEditBy: 'admin',
			lastEditAt: '2024-04-29 16:59:47',
			data: [
				{
					columnId: 1,
					value: 'Tabellen-App öffnen',
				},
				{
					columnId: 2,
					value: 'Click on tables icon in the menu bar.',
				},
				{
					columnId: 3,
					value: 5,
				},
				{
					columnId: 4,
					value: 'true',
				},
			],
		},
		{
			id: 2,
			tableId: 1,
			createdBy: 'admin',
			createdAt: '2024-04-29 16:59:47',
			lastEditBy: 'admin',
			lastEditAt: '2024-04-29 16:59:47',
			data: [
				{
					columnId: 1,
					value: 'Fügen Sie Ihre erste Zeile hinzu',
				},
				{
					columnId: 2,
					value: 'Just click on "new row" and enter some data inside of the form. At the end click on the bottom "save".',
				},
				{
					columnId: 3,
					value: 5,
				},
				{
					columnId: 4,
					value: 'false',
				},
			],
		},
		{
			id: 3,
			tableId: 1,
			createdBy: 'admin',
			createdAt: '2024-04-29 16:59:47',
			lastEditBy: 'admin',
			lastEditAt: '2024-04-29 16:59:47',
			data: [
				{
					columnId: 1,
					value: 'Eine Zeile bearbeiten',
				},
				{
					columnId: 2,
					value: 'Hover the mouse over a row you want to edit. Click on the pen on the right side. Maybe you want to add a "done" status to this row.',
				},
				{
					columnId: 3,
					value: 5,
				},
				{
					columnId: 4,
					value: 'false',
				},
			],
		},
		{
			id: 4,
			tableId: 1,
			createdBy: 'admin',
			createdAt: '2024-04-29 16:59:47',
			lastEditBy: 'admin',
			lastEditAt: '2024-04-29 16:59:47',
			data: [
				{
					columnId: 1,
					value: 'Neue Spalte hinzufügen',
				},
				{
					columnId: 2,
					value: 'You can add, remove and adjust columns as you need it. Click on the three-dot-menu on the upper right of this table and choose \"create column\". Fill in the data you want, at least a title and column type.',
				},
				{
					columnId: 3,
					value: 4,
				},
				{
					columnId: 4,
					value: 'false',
				},
			],
		},
		{
			id: 5,
			tableId: 1,
			createdBy: 'admin',
			createdAt: '2024-04-29 16:59:47',
			lastEditBy: 'admin',
			lastEditAt: '2024-04-29 16:59:47',
			data: [
				{
					columnId: 1,
					value: 'Lesen Sie die Dokumentation',
				},
				{
					columnId: 2,
					value: 'If you want to go through the documentation, this can be found here: https://github.com/nextcloud/tables/wiki',
				},
				{
					columnId: 3,
					value: 3,
				},
				{
					columnId: 4,
					value: 'false',
				},
			],
		},
	],
}

describe('ContentReferenceWidget', () => {
	it('mounts', () => {
		cy.intercept({
			method: 'GET',
			url: '**/index.php/apps/tables/row/table/*',
		}, richObject.rows)

		cy.mount(ContentReferenceWidget, {
			propsData: {
				richObject,
			},
			store: {
				...store,
				...data,
			},
		})
	})
})
