export const formatDate = (date: string | null) => {
    if (!date) {
        return '';
    }
    const dateToChoose = new Date(date).toLocaleDateString();
    return dateToChoose;
};