if (userPassword = ADMIN_PASSWORD){message = ACCESS_IS_ALLOWED;} else if (userPassword = null){message = CANCELED_BY_USER;} else (userPassword = 123){message =  ACCESS_DENIED;};
console.log(message);