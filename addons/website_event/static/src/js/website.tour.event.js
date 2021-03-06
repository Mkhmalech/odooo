odoo.define("website_event.tour", function (require) {
    "use strict";

    var core = require("web.core");
    var Tour = require("web.Tour");
    var tour = require("web_tour.tour");
    var base = require("web_editor.base");

    var _t = core._t;

    base.ready().done(function () {
        Tour.register({
            id:   'event',
            mode: 'test',
            name: _t("Create an event"),
            steps: [
                {
                    title:     _t("Create an Event"),
                    content:   _t("Let's go through the first steps to publish a new event."),
                    popover:   { next: _t("Start Tutorial"), end: _t("Skip It") },
                },
                {
                    element:   '#oe_main_menu_navbar a[data-action=new_page]',
                    placement: 'bottom',
                    title:     _t("Add Content"),
                    content:   _t("This button allows you to create new pages, events, menus, etc."),
                    popover:   { fixed: true },
                },
                {
                    element:   'a[data-action=new_event]',
                    placement: 'left',
                    title:     _t("New Event"),
                    content:   _t("Click here to create a new event."),
                    popover:   { fixed: true },
                },
                {
                    element:   '.modal-dialog #editor_new_event input[type=text]',
                    sampleText: 'Advanced Technical Training',
                    placement: 'right',
                    title:     _t("Create an Event Name"),
                    content:   _t("Create a name for your new event and click <em>'Continue'</em>. e.g: Technical Training"),
                },
                {
                    waitNot:   '.modal-dialog #editor_new_event input[type=text]:not([value!=""])',
                    element:   '.modal-dialog button.btn-primary.btn-continue',
                    placement: 'right',
                    title:     _t("Create Event"),
                    content:   _t("Click <em>Continue</em> to create the event."),
                },
                {
                    waitFor:   '#o_scroll .oe_snippet',
                    title:     _t("New Event Created"),
                    content:   _t("This is your new event page. We will edit the event presentation page."),
                    popover:   { next: _t("Continue") },
                },
                {
                    snippet:   '#snippet_structure .oe_snippet:eq(2)',
                    placement: 'bottom',
                    title:     _t("Drag & Drop a block"),
                    content:   _t("Drag the 'Image-Text' block and drop it in your page."),
                    popover:   { fixed: true },
                },
                {
                    element:   'button[data-action=save]',
                    placement: 'bottom',
                    title:     _t("Save your modifications"),
                    content:   _t("Once you click on save, your event is updated."),
                    popover:   { fixed: true },
                },
                {
                    waitNot:   '#web_editor-top-edit',
                    element:   'button.btn-danger.js_publish_btn',
                    placement: 'top',
                    title:     _t("Publish your event"),
                    content:   _t("Click to publish your event."),
                },
                {
                    waitFor:   '.js_publish_management button.js_publish_btn.btn-success:visible',
                    element:   '.js_publish_management button[data-toggle="dropdown"]',
                    placement: 'left',
                    title:     _t("Customize your event"),
                    content:   _t("Click here to customize your event further."),
                },
                {
                    element:   '.js_publish_management ul>li>a:last:visible',
                },
            ]
        });

        tour.register("event", {
            url: "/",
        }, [{
            trigger: "a[data-action=new_event]",
            content: _t("Click here to create a new event."),
            position: "bottom",
        }, {
            trigger: ".modal-dialog #editor_new_event input[type=text]",
            content: _t("Create a name for your new event and click <em>\"Continue\"</em>. e.g: Technical Training"),
            position: "right",
        }, {
            trigger: ".modal-dialog button.btn-primary.btn-continue",
            extra_trigger: ".modal-dialog #editor_new_event input[type=text][value!=\"\"]",
            content: _t("Click <em>Continue</em> to create the event."),
            position: "right",
        }, {
            trigger: "#snippet_structure .oe_snippet:eq(2)",
            content: _t("Drag this block and drop it in your page."),
            position: "bottom",
        }, {
            trigger: "button[data-action=save]",
            content: _t("Once you click on save, your event is updated."),
            position: "bottom",
        }, {
            trigger: "button.btn-danger.js_publish_btn",
            extra_trigger: "body:not(.editor_enable)",
            content: _t("Click to publish your event."),
            position: "top",
        }, {
            trigger: ".js_publish_management button[data-toggle=\"dropdown\"]",
            extra_trigger: ".js_publish_management button.js_publish_btn.btn-success:visible",
            content: _t("Click here to customize your event further."),
            position: "left",
        }]);
    });
});
