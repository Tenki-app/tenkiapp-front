export const formatDate = (date: string | null) => {
    if (!date) {
        return '';
    }
    const dateToChoose = new Date(date);
    const day = dateToChoose.getDate().toString().padStart(2, '0');
    const month = (dateToChoose.getMonth() + 1).toString().padStart(2, '0');
    const year = dateToChoose.getFullYear().toString();

    return `${day}/${month}/${year}`;
};