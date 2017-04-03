define(function (require) {
	'use strict';

	const ListChamber = require('common/platform/chamber/ListChamber');

	return class extends ListChamber {
		getListConfig () {
			return {
				layout: 'hero',
				orientation: 'horizontal',
				itemClick: (eventKey, listControl, model, details) => {
					console.log(model);
				}
			}
		}

		data () {
			return [
				{ icon: `${window.MODULE_PATH}/images/yelp1.jpg` },
				{ icon: `${window.MODULE_PATH}/images/yelp2.jpg` },
				{ icon: `${window.MODULE_PATH}/images/yelp3.jpg` }
			];
		}
	}
});
