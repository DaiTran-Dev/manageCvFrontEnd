import { PERMISSION_USER } from "~/constant/constant.js"
export default function (context) {

    var permission_user_list = PERMISSION_USER
    var user = context.$auth.user
    var level_user = null
    var redirect = context.redirect
    var path = context.route.fullPath
    var pages = []
    var permission_user = null

    if (!user && path == '/login') {
        return
    }

    if (!user && path == '/') {
        return redirect('/login')
    }

    level_user = user.level
    permission_user = permission_user_list.find((permission_user) => {
        return permission_user.id == level_user
    });

    if (!permission_user) {
        return redirect('/login')
    }
    pages = permission_user.pages
    if (!pages.includes(path)) {

        return redirect('/login')
    }
}