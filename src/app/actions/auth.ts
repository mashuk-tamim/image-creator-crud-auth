"use server";

interface AuthProps {
	errors: {
		username: string | null;
		password: string | null;
	};
	success: boolean;
}

function isAlphaNumeric(x: string) {
	const regex = /^[a-zA-Z0-9]*$/;
	return regex.test(x);
}

export const LoginUser = async (
	prevState: { sky: string },
	formData: FormData
): Promise<AuthProps> => {
	const errors = {
		username: "",
		password: "",
	};

	const user = {
		username: formData.get("username"),
		password: formData.get("password"),
	};
	console.log(prevState, user);

	if (typeof user.username !== "string") {
		user.username = "";
	}
	if (typeof user.password !== "string") {
		user.password = "";
	}

	user.username = user.username.trim();
	user.password = user.password.trim();

  // username errors
	if (user.username.length < 3) {
		errors.username = "Username must be at least 3 characters";
	}
	if (user.username.length > 30) {
		errors.username = "Username cannot exceed 30 characters";
	}
	if (!isAlphaNumeric(user.username)) {
		errors.username = "You can not use special character";
	}
	if (user.username === "") {
		errors.username = "You must provide a username";
  }
  
  // password errors
	if (user.password.length < 8) {
		errors.password = "Password must be at least 8 characters";
	}
	if (user.password.length > 30) {
		errors.password = "Password cannot exceed 30 characters";
	}
	if (user.password === "") {
		errors.password = "You must provide a password";
	}

	if (errors.username || errors.password) {
		return {
			errors: errors,
			success: false,
		};
	}
	return {
		errors: {
			username: null,
			password: null,
		},
		success: false,
	};
};
