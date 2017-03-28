define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        Button = require('common/ui/Button');

    return class extends ModuleView {
        started () {
            return super.started().then(() => {
                let carouselButton, contextMenuButton; 
                    
                carouselButton = new Button({
                    model: {
                        text: 'Display Carousel',
                    },
                    click: this.carouselButtonClick
                });

                contextMenuButton = new Button({
                    model: {
                        text: 'Display Context Menu',
                    },
                    click: this.contextMenuButtonClick
                });

                carouselButton.render(this.getView());
                contextMenuButton.render(this.getView());
            });
        }

        carouselButtonClick () {
            
        }

        contextMenuButtonClick () {
            
        }
    };
});
