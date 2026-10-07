const formatLocalDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const getCurrentDate = () => {
    return formatLocalDate(new Date());
};

export const getTomorrowDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return formatLocalDate(date);
};

