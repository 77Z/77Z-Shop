import { storeid } from '../../keys';

export async function get({ params }) {
	const storefrontData = await fetch(
		`https://api.reflowhq.com/v1/stores/${storeid}/products/`
	).then((r) => r.json());

	return {
		body: storefrontData,
		status: 200
	};
}
