
const message = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict"
}

function HttpError (status, message = message[status]) {
 const error = new Error
 error.status = status
 error.message = message
 return error
}

module.exports = HttpError