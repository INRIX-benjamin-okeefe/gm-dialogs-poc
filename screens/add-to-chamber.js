define(function (require) {
	'use strict';

	const ListChamber = require('common/platform/chamber/ListChamber');

	return class extends ListChamber {
		getListConfig () {
			return {
				layout: 'css',
				itemClick: (eventKey, listControl, model, details) => {
					console.log(model.get('action'));
				}
			}
		}

		data () {
			return [
				{ text: 'Add to Library', action: 'library' },
				{ text: 'Add to Playlist', action: 'playlist' },
				{ text: 'Create Station', action: 'station' }
			]
		}

		// init (screen) {
		// 	return super.init(screen).then(() => {
		// 		this.buttonConfig = [
  //                   {
  //                   	"oc-control": "CustomButton",
  //                       "label": "Cancel",
  //                       "action": "cancelButtonClick"
  //                   },
  //                   {
  //                   	"oc-control": "CustomButton",
  //                       "label": "Ok",
  //                       "action": "okButtonClick"
  //                   }
  //               ];

  //               this.setChamberButtons(this.buttonConfig);
		// 	});
		// }
	}
});
