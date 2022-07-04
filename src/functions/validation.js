export const validateName = (name) => name.length > 0

export const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
}
