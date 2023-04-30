export const convertDate = (num) => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug","Sep","Oct","Nov","Dec"];
    const date = new Date(num);
    return date.getDate() + " " + (month[date.getMonth()]) + " " + date.getFullYear();
};