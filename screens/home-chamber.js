define(function (require) {
	'use strict';

	const ListChamber = require('common/platform/chamber/ListChamber');

	return class extends ListChamber {
		getListConfig () {
			return {
				itemClick: (e, list, listItem) => {
					this.goto(listItem.chamber);
				}
			}
		}

		data () {
			return [
				{ 
					text: 'Napster Add To...',
					chamber: 'add-to-chamber'
				},
				{ 
					text: 'Yelp View Images',
					chamber: 'view-images-chamber'
				}
			]
		}
	}
});
