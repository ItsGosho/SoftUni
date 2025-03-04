import RestResponseHelper from "../helpers/rest.response.helper";
import JWTServices from "../../services/jwt.token.services";
import RoleHelper from "../../helpers/role.helper";
import RestResponseMessages from "../../constants/web/rest.message.constants";

/*Note that before this middleware is executed a user must be attached to the request somehow*/

const RoleMiddleware = (requiredRole) => {
    return async (request, response, next) => {
        let user = request.user;
        let role = RoleHelper.getHighestRoleFrom(user.roles);

        if (role.toLowerCase() === requiredRole.toLowerCase()) {
            next();
            return;
        }

        RestResponseHelper.respondErrorMessage(response, RestResponseMessages.REQUIRED_ROLE.replace('${role}', requiredRole))
    }
};

export default RoleMiddleware;

