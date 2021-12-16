export async function get({ params }) {
	return {
		body: {
			routes: ['api/item/[itemslug]', 'api/storefront']
		},
		status: 200
	};
}
