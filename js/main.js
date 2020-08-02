require.config({
    deps: ["main"],
    waitSeconds: 30,
    paths: {
        jquery: "lib/jquery.min",
        jqueryLatest: "lib/jquery-latest/jquery.min",
        validate: "lib/jquery.validate.min",
        tingle: "lib/tingle.min",
        bxSlider: "lib/jquery.bxslider.min",
        underscore: "lib/underscore.min",
        waypoints: "lib/jquery.waypoints.min",
        lottie: "lib/lottie.min",
        lazyLoad: "lib/lazyload.min",
        pictureFill: "lib/picturefill.min",
        modernizrWebp: "lib/modernizr-webp",
        domReady: "lib/domReady",
        fileUploader: "lib/file.uploader",
        simplebar: "lib/simplebar.min",
        spincrement: "lib/jquery.spincrement.min",
        validateAddition: "validator/validate.addition",
        initModules: "modules/init.modules",
        sendingAjax: "modules/sending.ajax",
        textSwitch: "modules/text.switch",
        scrolling: "modules/scrolling",
        languagesSwitch: "modules/languages.switch",
        initWaypoints: "modules/init.waypoints",
        search: "modules/search",
        mainMenu: "modules/main.menu",
        mobileMenu: "modules/mobile.menu",
        storageModules: "modules/storage.modules",
        nullModule: "modules/null.module",
        initEventGa: "modules/init.event.ga",
        eventFormGa: "modules/event.form.ga",
        svgIconHover: "modules/svg.icon.hover",
        lazyLoadSlider: "modules/lazyload.slider",
        initSlick: "modules/init.slick",
        anchorScroll: "modules/anchor.scroll",
        disqusHashUpdate: "modules/disqus.hash.update",
        textareaLimit: "modules/textarea.limit",
        csDynamic: "modules/cs.dynamic",
        selectField: "lib/select2.full",
        initAjaxForm: "modules/init.ajax.form",
        textareaResize: "modules/textarea.resize",
        demoIframe: "modules/demo.iframe",
        textareaValidate: "modules/textarea.validate",
        serviceCardsAccord: "modules/service.cards.accord",
        serviceCardsHide: "modules/service.cards.hide",
	groupingCardsAccord: "modules/grouping.cards.accord",
	groupingCardsHide: "modules/grouping.cards.hide",
        expandBlock: "modules/expand.block",
        collapsibleTextAccord: "modules/collapsible.text.accord",
        collapsibleTextHide: "modules/collapsible.text.hide",
        stepsNumber: "modules/steps.number",
        numbersCounter: "modules/numbers.counter",
        serviceVariations: "modules/service.variations",
        timelineDisplay: "modules/timeline.display",
        contactSlider: "modules/contact.slider",
        testimonialsConfigurable: "modules/testimonials.configurable",
        additionalInformation: "modules/additional.information",
        flippingCard: "modules/flipping.card",
        downloadsFiles: "modules/downloads.files",
        sliderWithContent: "modules/slider.with.content",
        selectionListForm: "modules/selection.list.form",
    	core: "formstone/js/core",
    	mediaquery: "formstone/js/mediaquery",
    	swap: "formstone/js/swap",
    	tabs: "formstone/js/tabs",
        equalize: "formstone/js/equalize",
        bootstrap: "modules/bootstrap.min",
        touchSwipe: "modules/jquery.touchSwipe.min",
        touchSlider: "modules/bootstrap-touch-slider"
    },
    shim: {
        initModules: ["jquery", "domReady"],
        validate: ["jquery"],
        validateAddition: ["validate"],
        waypoints: ["jquery"],
        initWaypoints: ["waypoints", "domReady"],
        bxSlider: ["jquery"],
        languagesSwitch: ["jquery"],
        search: ["jquery"],
        mainMenu: ["jquery"],
        mobileMenu: ["jquery"],
        storageModules: ["initModules"],
        initEventGa: ["jquery"],
        lazyLoadSlider: ["jquery"],
        lazyLoad: ["jquery"]
    }
}), require(["lazyLoad", "initEventGa", "anchorScroll", "initModules", "pictureFill", "modernizrWebp", "simplebar"], function(e, i, l) {
    i(), l();
    var s = new e({
        elements_selector: ".lazy"
    });
    $(document).ajaxSuccess(function() {
        s.update()
    })
});
