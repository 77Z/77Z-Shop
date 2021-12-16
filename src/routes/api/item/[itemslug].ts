import { storeid } from '../../../keys';

export async function get({ params }) {
	const { itemslug } = params;

	const itemData = await fetch(
		`https://api.reflowhq.com/v1/stores/${storeid}/products/${itemslug}`
	).then((r) => r.json());

	return {
		body: itemData,
		status: 200
	};
}
