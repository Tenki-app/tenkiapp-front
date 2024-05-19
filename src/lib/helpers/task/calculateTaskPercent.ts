import type { TypeTask } from "@/lib/types/tasks";

export const calculateTaskPercent = (tasksArray?: TypeTask[] | null) => {
    const tasksDone = tasksArray?.filter(
        (task) => task.state === 'done'
    );
    const isPossibleToCalculatePercent =
        tasksDone &&
        Array.isArray(tasksDone) &&
        tasksArray &&
        Array.isArray(tasksArray);

    if (isPossibleToCalculatePercent) {
        return (tasksDone.length / tasksArray.length) * 100;
    }

    return 0;
}