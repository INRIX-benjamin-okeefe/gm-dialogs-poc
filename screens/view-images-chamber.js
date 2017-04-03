define(function (require) {
	'use strict';

	const 
		ListChamber = require('common/platform/chamber/ListChamber'),
		showErrorState = true;

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
			if (showErrorState) {
				return [{
					icon: `${window.MODULE_PATH}/images/image-load-error.png`,
					text: 'Problem loading image. Please try again later.',
					$class: 'error-view'
				}];
			} else {
				return [
					{ icon: `${window.MODULE_PATH}/images/yelp1.jpg` },
					{ icon: `${window.MODULE_PATH}/images/yelp2.jpg` },
					{ icon: `${window.MODULE_PATH}/images/yelp3.jpg` }
				];
			}
		}
	}
});
