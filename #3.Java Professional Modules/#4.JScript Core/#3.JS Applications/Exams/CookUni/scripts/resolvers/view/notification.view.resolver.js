const NotificationViewResolver = {

    showNotification(type, message) {
        let notificationsContainer = $(`#notifications`);

        let template = Handlebars.compile(WebTools.getHTMLFile(getPath(type)));

        let element = $(template({message: message}));
        element.css('display', 'block');

        element.on(`click`, function () {
            this.remove();
        });

        setInterval(function () {
            element.remove();
        }, 5000);

        appendObjectElementsTo(element, $(`#notifications`));
        return element;
    }
};

function getPath(notificationType) {
    let path;
    switch (notificationType) {
        case "ERROR":
            path = ViewPaths.NOTIFICATION_ERROR;
            break;
        case "LOADING":
            path = ViewPaths.NOTIFICATION_LOADING;
            break;
        case "SUCCESS":
            path = ViewPaths.NOTIFICATION_SUCCESS;
            break;
    }
    return path;
}

const NotificationType = {
    ERROR: "ERROR",
    LOADING: "LOADING",
    SUCCESS: "SUCCESS"
};