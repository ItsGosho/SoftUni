import Express from 'express'
import { RoutingURLs, UserRoutingURLs } from '../../constants/web/routing.urls.constants'
import UserServices from '../../services/user.services'
import JWTHelper from '../helpers/jwt.helper'
import JWTServices from '../../services/jwt.services'
import NotificationHelper from '../../helpers/notification.helper'
import { ViewsResourcePaths } from '../../constants/path/resource.paths.constants'

const Router = Express.Router()

Router.get(UserRoutingURLs.LOGIN, async (request, response) => {
  response.render(ViewsResourcePaths.AUTHENTICATION.LOGIN)
})

Router.post(UserRoutingURLs.LOGIN, async (request, response) => {

  let { username } = request.body

  let token = await UserServices.proceedToken(username)

  await JWTHelper.attachToken(token.token, response)

  NotificationHelper.prepareInfo(request, 'Successful login!')
  response.redirect(RoutingURLs.HOME)
})

Router.get(UserRoutingURLs.REGISTER, async (request, response) => {
  response.render(ViewsResourcePaths.AUTHENTICATION.REGISTER)
})

Router.post(UserRoutingURLs.REGISTER, async (request, response) => {
  let { username, password, email } = request.body

  let user = {
    username,
    password,
    email
  }

  await UserServices.register(user)

  NotificationHelper.prepareInfo(request, 'Successful registration!')
  response.redirect(RoutingURLs.USER.LOGIN)
})

Router.get(UserRoutingURLs.LOGOUT, async (request, response) => {
  let user = await JWTHelper.getCurrentUser(request)

  if (user !== null) {

    await JWTServices.removeAllByUserId(user.id)
    response.clearCookie('jwt')

    NotificationHelper.prepareInfo(request, 'Successful logged out!')
    response.redirect(RoutingURLs.HOME)
  }
})

export default Router