define(function (require) {
	'use strict';

	const ListChamber = require('common/platform/chamber/ListChamber');

	return class extends ListChamber {
		getListConfig () {
			return {
				layout: 'css'
			}
		}

		data () {
			return [
				{ 'text': 'Add to Library' },
				{ 'text': 'Add to Playlist' },
				{ 'text': 'Create Station' }
			]
		}

		init (screen) {
			return super.init(screen).then(() => {
				this.buttonConfig = [
                    {
                    	"oc-control": "CustomButton",
                        "label": "Cancel",
                        "action": "cancelButtonClick"
                    },
                    {
                    	"oc-control": "CustomButton",
                        "label": "Ok",
                        "action": "okButtonClick"
                    }
                ];

                this.setChamberButtons(this.buttonConfig);
			});
		}

		cancelButtonClick () {
			this.goto('home-chamber');
		}

		okButtonClick () {
			console.log('ok button clicked');
		}
	}
});
