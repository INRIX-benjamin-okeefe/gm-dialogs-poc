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
                const contextMenuButton = new Button({
                    model: {
                        text: 'Display "Add To" List Control Dialog',
                    },
                    click: this.contextMenuButtonClick.bind(this)
                });

                const addToListControlDialogConfig = {
                    itemType: 'radio',
                    height: 500,
                    width: 800,
                    data: [
                        { text: 'Add to Library', status: '' },
                        { text: 'Add to Playlist', status: '' },
                        { text: 'Create Station', status: '' }
                    ],
                    itemClick: (eventKey, list, model, event) => {
                        alert('click!');
                    }
                }

                const addToListControlDialog = new DialogConfig.ListControlDialog(addToListControlDialogConfig)
                .addButton('Cancel', {
                    text: 'Cancel'
                })
                .addButton('Ok', {
                    text: 'Ok'
                }).build();

                this.addToListControlDialog = new Dialog(addToListControlDialog);

                contextMenuButton.render(this.getView());
            });
        }

        carouselButtonClick () {
            
        }

        contextMenuButtonClick () {
            this.addToListControlDialog.show();
        }
    };
});
