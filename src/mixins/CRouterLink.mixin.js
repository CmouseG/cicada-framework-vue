export const routerLinkEventName = 'c-router-link-click'

let evt

try {
    evt = new Event(routerLinkEventName)
} catch (error) {
    evt = document.createEvent('Event')
    evt.initEvent(routerLinkEventName, true, false)
}

export { evt as routerLinkEvent }

export const RouterLinkMixin = {
    props: {
        to: [String, Object]
    }
}
