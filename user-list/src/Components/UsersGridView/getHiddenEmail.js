export const getHiddenEmail = (user) => {
    let temp = user.email.split("@");
    let temp2 = temp[0].slice(0, 3);
    let hiddenEmail = `${temp2}...@${temp[1]}`;
    return hiddenEmail;
};