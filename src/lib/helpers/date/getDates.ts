export const getCurrentDate = () => {
    return new Date().toISOString().split('T')[0];
};

export const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    const tomorrowDate = date.toISOString().split('T')[0];

    return tomorrowDate;
};
