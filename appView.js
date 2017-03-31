define(function (require) {
    'use strict';

    const
    	ModuleView = require('common/platform/ModuleView'),
    	Button = require('common/ui/Button');
        

    return class extends ModuleView {
        started () {
            return super.started().then(() => {
                this.goto('home-chamber');
            });
        }
    };
});
