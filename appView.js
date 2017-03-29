define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView'),
        Button = require('common/ui/Button'),
        DialogConfig = require('common/ui/dialogs/DialogConfig'),
        Dialog = require('common/ui/Dialog');

    return class extends ModuleView {
        started () {
            return super.started().then(() => {
                let carouselButton, contextMenuButton, carouselDialogConfig, contextMenuDialogConfig;
                    
                carouselButton = new Button({
                    model: {
                        text: 'Display Carousel',
                    },
                    click: this.carouselButtonClick.bind(this)
                });

                contextMenuButton = new Button({
                    model: {
                        text: 'Display Context Menu',
                    },
                    click: this.contextMenuButtonClick.bind(this)
                });

                carouselDialogConfig = new DialogConfig.ListDialog({}).build();
                this.carouselDialog = new Dialog(carouselDialogConfig);

                contextMenuDialogConfig = new DialogConfig.ListDialog({}).build();
                this.contextMenuDialog = new Dialog(contextMenuDialogConfig);

                carouselButton.render(this.getView());
                contextMenuButton.render(this.getView());
            });
        }

        carouselButtonClick () {
            this.carouselDialog.show();
        }

        contextMenuButtonClick () {
            this.contextMenuDialog.show();
        }
    };
});
