import type { TypeTask } from "@/lib/types/tasks";

export const calculateTaskDonePercent = (tasksArray?: TypeTask[] | null) => {
    const tasksDone = tasksArray?.filter(
        (task) => task.state === 'done'
    );
    const isPossibleToCalculatePercent =
        tasksDone &&
        tasksArray &&
        tasksArray.length > 0;

    if (isPossibleToCalculatePercent) {
        return (tasksDone.length / tasksArray.length) * 100;
    }

    return 0;
}